var React = require('react'),
  Router = require('react-router'),
  { NotFoundRoute, Navigation, State, Link, Route, RouteHandler, DefaultRoute, Redirect } = Router,
  resolveHash = require('when/keys').all

var fs = require('fs')
var vimeoJson = window.vimeoJson = JSON.parse(fs.readFileSync('all.json', 'utf8'))

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <RouteHandler {...this.props}/>
      </div>
    )
  }
})

var Album = React.createClass({
  statics: {
    fetchData: (params) => {
      return vimeoJson.albums.filter(album => album.slug == params.slug)[0]
    }
  },

  render() {
    var album = this.props.data.albums
    var videos = album.videos.map(video => <Video key={video.id} id={video.id} json={video} />)

    return (
      <div>
        <h1>{album.title}</h1>
        <p dangerouslySetInnerHTML={{__html: album.description}}></p>
        {videos}
      </div>
    )
  }
})

var Video = React.createClass({
  statics: {
    fetchData: (params) => {
      return vimeoJson.videos.filter(video => video.id == params.id || video.slug == params.slug)[0]
    },

    // ensure we send people to the canonical URL of a video: /videos/:slug
    // (if they're heading towards /videos/:id, redirect)
    willTransitionTo: (transition, params) => {
      var slug = Video.fetchData(params).slug // why won't `this` work?
      if(params.slug === slug) return
      params.slug = slug
      transition.redirect('videos', params)
    }
  },

  render() {
    var data = this.props.json || this.props.data.videos
    var showEmbed = typeof(this.props.json) == 'undefined'
    // ^ false when we're on an album listing page, true for /videos/

    return (
      <figure>
        <VimeoPlayer id={data.id} data={data} showEmbed={showEmbed} />
        <VideoCaption data={data} showEmbed={showEmbed} />
      </figure>
    )
  }
})

var VideoCaption = React.createClass({
  render() {
    var data = this.props.data
    var showEmbed = this.props.showEmbed
    var content = <div dangerouslySetInnerHTML={{__html: data.description}}></div>

    return (
      <figcaption>
        <h2>{data.title} {!showEmbed ? <Link to="videos" params={{slug: data.slug}}>#</Link> : ''}</h2>
        {showEmbed ? content : ''}
      </figcaption>
    )
  }
})

var VimeoPlayer = React.createClass({
  render() {
    var embedUrl = `//player.vimeo.com/video/${this.props.id}?portrait=0&title=0&byline=0`

    // only show the video thumbnail unless this has been passed the
    // `showEmbed` prop
    return (
      <div>
        {this.props.showEmbed ?
          <iframe src={embedUrl} frameBorder="0"></iframe> :
          <img src={this.props.data.thumbnail_large} />}
      </div>
    )
  }
})

var Header = React.createClass({
  render() { return <div>
    <p><strong>Third/AV</strong> <span>Audio, visual, inspiring. From the MIA</span></p> 
    <Nav />
  </div> }
})

var Nav = React.createClass({
  render() {
    var albums = vimeoJson.albums
    return (
      <ul>
        {albums.map(album => <li key={album.id}><Link to="albums" params={{slug: album.slug}}>{album.title}</Link></li>)}
      </ul>
    )
  }
})

var routes = (
  <Route handler={App} path="/">
    <Route name="videoById" path="videos/id/:id" handler={Video} />
    <Route name="videosByIdAndSlug" path="videos/:id/:slug" handler={Video} />
    <Route name="videos" path="videos/:slug" handler={Video} />
    <Route name="albums" path="albums/:slug" handler={Album} />
    <Redirect from="/" to="albums" params={{slug: 'featured'}} />
  </Route>
);

Router.run(routes, (Handler, state) => {
  window.Handler = Handler
  window.state = state

  var promises = state.routes.filter((route) => {
    return route.handler.fetchData
  }).reduce((promises, route) => {
    promises[route.name] = route.handler.fetchData(state.params)
    return promises
  }, {})

  resolveHash(promises).then(data => {
    console.log('fetched data', promises, 'resolved to ', data)
    React.render(<Handler data={data}/>, document.body)
  })
});

// TODO
// server rendering
//   https://github.com/rackt/react-router/issues/844
// show all albums that a video belongs to?
// bold and disable the link in the currently open nav
