(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ng = require('angular')
  , fs = require('fs')
  , vimeoJson = JSON.parse("{\"videos\":[{\"description\":\"Stan Douglas is a photographer, filmmaker, and installation artist whose works have been exhibited internationally, including in three Venice Biennials and three dOCUMENTAs. Douglas's photographs examine how images and memory shape interpretations of history. To create his photographs, Douglas often assumes the role of a photojournalist who travels back in time to reinterpret key events in social and political history, such as the 1975 revolution in Angola and social riots in Canada during the 1930s and 1970s. After conducting intensive research, he restages these events using actors, costumes, props, and sets. These pictures are meticulously composed down to the slightest gestures and period styles.<br />\\r\\n<br />\\r\\nDouglas was awarded the prestigious Infinity Award for Art by the International Center for Photography in 2012.<br />\\r\\n<br />\\r\\nThe Arnold Neman Lecture Series is made possible thanks to a generous gift from the Arnold and Augusta Newman Foundation.<br />\\r\\n<br />\\r\\nGenerous support for New Pictures is provided by the W. Duncan and Nivin MacMillan Foundation.\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96937899,\"mobile_url\":\"http://vimeo.com/m/96937899\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":1,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures 7: Stan Douglas\",\"upload_date\":\"2014-05-30 15:05:34\",\"url\":\"http://vimeo.com/96937899\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jones gained notoriety for photographing psychoanalysts' therapy rooms in the late 1990s and has continued to explore this provocative subject. In Analyst (Couch) (I), 2008, she shows the therapist's viewpoint: a banal-looking couch covered with a red blanket bears the imprint of the patient who lay upon it during a session. Arrangement (Analyst) (I), 2007, focuses on the objects that have been carefully arranged by the analyst to create a soothing environment for the patient.<br />\\r\\n<br />\\r\\nTwo large-scale diptychs—one showing a horse and the other a rose bush—refer to early stereographic prints and explore the potential for photography to reveal uncanny perspectives. In The Rose Gardens (display: III / white) (II) and (III), of 2008, Jones photographed a rose bush from both front and back so viewers can contemplate both viewpoints simultaneously. In Horse (profile / black) (II) and (III), of 2012, she paired two images of a horse, whose majestic presence is compressed through the process of doubling.<br />\\r\\n<br />\\r\\nJones earned her master of fine arts degree at Goldsmith College in London and has been exhibiting internationally for over twenty years. She is represented by Maureen Paley, London, and Anton Kern Gallery, New York, and is also a tutor at The Royal College of Art in London. A new monograph published by Violette Editions, with contributions by David Campany, Brian Dillon, and A. M. Homes, is now available in bookshops.<br />\\r\\n<br />\\r\\nMusic credit: \\\"White Lotus\\\" by Kevin Macleod\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96710338,\"mobile_url\":\"http://vimeo.com/m/96710338\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":4,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/476841556_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/476841556_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/476841556_100x75.jpg\",\"title\":\"New Pictures 8: Sarah Jones\",\"upload_date\":\"2014-05-28 11:04:42\",\"url\":\"http://vimeo.com/96710338\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":7,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":33,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Marla Spivak of the University of Minnesota BeeSquad talks about the importance of having bees on the roof of the Minneapolis Institute of Arts\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93166314,\"mobile_url\":\"http://vimeo.com/m/93166314\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":11,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473141728_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473141728_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473141728_100x75.jpg\",\"title\":\"Beekeeping at Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:00:05\",\"url\":\"http://vimeo.com/93166314\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Creativity Academy is an educational program at the MIA. It fosters creative thinking skills and critical thinking skills in children at the 4th grade level.<br />\\r\\n<br />\\r\\nGenerous support for Creativity Academy is provided by Friends of the Institute\",\"duration\":128,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92166635,\"mobile_url\":\"http://vimeo.com/m/92166635\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":3,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471816383_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471816383_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471816383_100x75.jpg\",\"title\":\"Creativity Academy x MIA\",\"upload_date\":\"2014-04-16 14:03:54\",\"url\":\"http://vimeo.com/92166635\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of funds from Gayle Fuguitt and Tom Veitch and the Decorative Arts Miscellaneous Purchase Fund. 2013.61<br />\\r\\n<br />\\r\\nArtist: Kati Touminen-Niittylä. Sculpted  in Finland, Europe in 2010.<br />\\r\\n<br />\\r\\nPresented by Jennifer Komar Olivarez, the Associate Curator of Decorative Arts, Textiles, and Sculpture.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":111,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065797,\"mobile_url\":\"http://vimeo.com/m/92065797\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"object:118851\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Inverno II - from \\\"Winter\\\"\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065797\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of Jim Billings with 50 years of friendship. 2013. 59<br />\\r\\n<br />\\r\\nArtist of the scroll: Motīlāl Josī, painted in Chittorgarh, Rajasthan in early 20th Century.<br />\\r\\n<br />\\r\\nPresented by Risha Lee, Ph.D. Jane Emison Assistant Curator of South and Southeast Asian Art.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":130,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065796,\"mobile_url\":\"http://vimeo.com/m/92065796\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"object:116488\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665898_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665898_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665898_100x75.jpg\",\"title\":\"Scroll Painting Dedicated to Pabuji (India, Asia)\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065796\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift from the John R. Van Derlip Fund. 2013.56<br />\\r\\n<br />\\r\\nArtist: William Edmondson, Made in United States, 1938-1942.<br />\\r\\n<br />\\r\\nPresented by Karleen Gardner, the Director of Learning and Innovation. <br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":88,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065795,\"mobile_url\":\"http://vimeo.com/m/92065795\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":3,\"tags\":\"object:118808\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471664191_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471664191_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471664191_100x75.jpg\",\"title\":\"Ram\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065795\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A face montage of visitors and our collections.<br />\\n<br />\\nCome as you are.<br />\\nMinneapolis Institute of Arts\",\"duration\":15,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90909355,\"mobile_url\":\"http://vimeo.com/m/90909355\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":5,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/470247651_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/470247651_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/470247651_100x75.jpg\",\"title\":\"Come as you are\",\"upload_date\":\"2014-04-03 17:56:53\",\"url\":\"http://vimeo.com/90909355\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A video installation in the lobby of the MIA.<br />\\r\\n<br />\\r\\nMusic: Fragile, Do Not Drop by Podington Bear (http://podingtonbear.com/)\",\"duration\":185,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90909218,\"mobile_url\":\"http://vimeo.com/m/90909218\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":19,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/470381023_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/470381023_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/470381023_100x75.jpg\",\"title\":\"Dolly through the MIA\",\"upload_date\":\"2014-04-03 17:55:19\",\"url\":\"http://vimeo.com/90909218\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":960},{\"description\":\"The Minneapolis Institute of Arts, in collaboration with 89.3 The Current and Vita.mn, was proud to host a special concert featuring hip-hop artist Dessa of the Doomtree collective. Ticket sales from this performance seeded a new scholarship for under-served teens as part of the museum's continued commitment to youth programs.\",\"duration\":180,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90344285,\"mobile_url\":\"http://vimeo.com/m/90344285\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":23,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469446016_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469446016_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469446016_100x75.jpg\",\"title\":\"Dessa at the MIA\",\"upload_date\":\"2014-03-28 13:02:49\",\"url\":\"http://vimeo.com/90344285\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Saturday, September 24, 2011—Sunday, June 10, 2012<br />\\r\\nGallery 263 and U.S. Bank Atrium, Target Wing<br />\\r\\nFree Exhibition<br />\\r\\n<br />\\r\\nIn its first ten years, Highpoint Center for Printmaking has become a vibrant part of the Twin Cities art scene. Less well known is its national and increasingly international stature as a publisher of exquisitely made prints. \\\"Highpoint Editions--Decade One\\\" celebrates its professional collaborations with fine artists of many stripes. The diversity and the quality testify to Highpoint's master printer, Cole Rogers, and his talented staff's ability to work with artists to realize their visions. The MIA is delighted to salute Highpoint and to present highlights from its production to a broad public audience.<br />\\r\\n<br />\\r\\nFeatured artists will include: Kinji Akagawa, Carlos Amorales, Carter, Santiago Cucullu, Mary Esch, Rob Fischer, Adam Helms, Joel Janowitz, Cameron Martin, Julie Mehretu, Clarence Morgan, Lisa Nankivil, Todd Norsten, Chloe Piene, Jessica Rankin, David Rathman, Carolyn Swiszcz, and others.\",\"duration\":393,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90330667,\"mobile_url\":\"http://vimeo.com/m/90330667\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":5,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469438887_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469438887_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469438887_100x75.jpg\",\"title\":\"Highpoint Editions -- Decade One\",\"upload_date\":\"2014-03-28 10:43:18\",\"url\":\"http://vimeo.com/90330667\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"On July 16, 2012, the MIA hosted presentations by top trend experts for its staff, Trustees, and colleagues from the Toledo Museum of Art, the Andy Warhol Museum, the Carnegie Museum of Art, the High Museum of Art, and The Nelson-Atkins Museum. <br />\\n<br />\\nCalled \\\"The Art of Ideas,\\\" this forum is part of a broader initiative to develop innovative approaches to some of the most pressing challenges faced by art museums today.\",\"duration\":310,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90330274,\"mobile_url\":\"http://vimeo.com/m/90330274\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469437723_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469437723_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469437723_100x75.jpg\",\"title\":\"Art of Ideas at the MIA\",\"upload_date\":\"2014-03-28 10:38:51\",\"url\":\"http://vimeo.com/90330274\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Film director and producer and Professor of French and Director of the French and Francophone Studies program at Carleton College, on the topic of Mali.\",\"duration\":190,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161609,\"mobile_url\":\"http://vimeo.com/m/90161609\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":44,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204083_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204083_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204083_100x75.jpg\",\"title\":\"Voices of the Community: Chérif KeÏta, Mali\",\"upload_date\":\"2014-03-26 16:51:25\",\"url\":\"http://vimeo.com/90161609\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Regents Professor Emeritus of Medieval Studies and Cataloguer of Oriental Manuscripts at the Hill Museum and Manuscript Library at Saint John's University, on the topic of Ethiopian Manuscripts\",\"duration\":207,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161586,\"mobile_url\":\"http://vimeo.com/m/90161586\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204121_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204121_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204121_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Getatchew Haile, Ethiopia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161586\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Assistant Professor of Sociology at the University of Minnesota, on the topic of Somalia\",\"duration\":195,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161584,\"mobile_url\":\"http://vimeo.com/m/90161584\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":14,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469202141_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469202141_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469202141_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Cawo Abdi, Somalia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161584\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Friday, April 20, 2012—Sunday, August 5, 2012<br />\\r\\nLinda and Lawrence Perlman Gallery (262)<br />\\r\\nFree Exhibition<br />\\r\\n<br />\\r\\nAs part of our \\\"New Pictures\\\" series devoted to innovation in contemporary photography, the Minneapolis Institute of Arts invited British photographer Martin Parr to cross the pond and shoot photos covering the wealth of winter activities in Minnesota, from pond hockey to ice fishing.<br />\\r\\n<br />\\r\\nThe results of his endeavor are on view in his exhibition, \\\"New Pictures 6: Martin Parr,\\\" opening April 20 in the Linda and Lawrence Perlman Gallery (262).<br />\\r\\n<br />\\r\\nA member of the esteemed Magnum Photos, an international photographers' cooperative, Parr is one of the most renowned and celebrated photographers working today. He is known for his innovative use of color photography and his humorous approach to documenting the daily rituals of life. Parr is also recognized for his work as an editor of photo-based publications, and is credited with more than twenty compilations of his own work. In 2008, he was awarded the Royal Photographic Society Centenary Medal and the Baume & Mercier award for his career contributions to contemporary photography.\",\"duration\":166,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134391,\"mobile_url\":\"http://vimeo.com/m/90134391\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":21,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156574_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156574_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156574_100x75.jpg\",\"title\":\"New Pictures 6: Martin Parr\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134391\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A few years ago, a friend gave artist Jason Fulford a manila envelope, found at a flea market. The envelope contained 80 photographs of mushrooms, each composed and annotated with the care of someone who just had to be a mushroom collector. These anonymous photographs inspired Fulford to create his own collection of photographs, publications, sculptures, and performances, all under the umbrella of the Soon Institute. Similar to the lifecycle of mushrooms, the project goes underground and periodically sprouts up in various artistic forms (including The Mushroom Collector, a book he published in 2010), in unexpected locations, such as New York, California, and Amsterdam.<br />\\r\\n<br />\\r\\nFulford's pictures appear to be unremarkable shots of commonplace objects, people, and places. Yet a closer look reveals humorous and subtle oddities. Fulford's images reveal themselves through repetition, sequences, and relationships between form and shadow, abstraction and reality. His work is now on view in \\\"New Pictures 5\\\" in Gallery 262.<br />\\r\\n<br />\\r\\nFulford is a photographer and co-founder of the publishing house J&L Books in Atlanta / New York, and the author of several titles. He has lectured widely, and is a contributing editor to Blind Spot magazine. Fulford's photographs have been featured in magazines and books.\",\"duration\":153,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134389,\"mobile_url\":\"http://vimeo.com/m/90134389\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":24,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156337_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156337_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156337_100x75.jpg\",\"title\":\"New Pictures 5: Jason Fulford\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134389\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}],\"albums\":[{\"created_on\":\"2014-03-27 14:51:13\",\"description\":\"\",\"id\":2800016,\"last_modified\":\"2014-05-05 12:31:58\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"Featured\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2800016\",\"videos\":[{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":33,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Rinko Kawauchi's first museum exhibition in the United States shows why she's one of the most important and popular female photographers working in Japan today. Kawauchi's unique installation of photographs at the MIA capture ordinary, fleeting moments of light and daily life, the photographs evoking everything from wonderment to the grotesque. A picture of a child breastfeeding. Ants carrying a grain of sugar. A tiny chrysalis on a blade of grass. She views the world with a playful, thought-provoking, and critically detached curiosity.<br />\\r\\n<br />\\r\\nExhibition Dates: February 20 - August 10, 2014\",\"duration\":114,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90059652,\"mobile_url\":\"http://vimeo.com/m/90059652\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":225,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469047957_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469047957_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469047957_100x75.jpg\",\"title\":\"New Pictures 9: Rinko Kawauchi\",\"upload_date\":\"2014-03-25 16:37:53\",\"url\":\"http://vimeo.com/90059652\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Exhibition Dates: November 2, 2013 - August 31, 2014<br />\\r\\n<br />\\r\\nMartin Weinstein, a former trial attorney turned photography connoisseur, has given more than 500 photographs to the MIA, in addition to numerous prints, paintings, and sculptures. \\\"31 Years: Gifts from Martin Weinstein\\\" celebrates the depth and quality of his decades of art giving.<br />\\r\\n<br />\\r\\nThe photographs on view include a who's who in the history of photography, from Margaret Bourke-White and Ansel Adams to Robert Mapplethorpe and Alec Soth. Together these pictures highlight many stories—personal, institutional, and historic.\",\"duration\":223,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87681978,\"mobile_url\":\"http://vimeo.com/m/87681978\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":27,\"tags\":\"photography, museum, art, exhibition, minneapolis, starts:2013-11-02, ends:2014-08-31\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465837390_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465837390_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465837390_100x75.jpg\",\"title\":\"31 Years: Gifts from Martin Weinstein\",\"upload_date\":\"2014-02-26 11:32:01\",\"url\":\"http://vimeo.com/87681978\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-04-16 11:24:07\",\"description\":\"\",\"id\":2830866,\"last_modified\":\"2014-05-05 16:53:07\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Recent Acquisitions\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2830866\",\"videos\":[{\"description\":\"Gift of funds from Gayle Fuguitt and Tom Veitch and the Decorative Arts Miscellaneous Purchase Fund. 2013.61<br />\\r\\n<br />\\r\\nArtist: Kati Touminen-Niittylä. Sculpted  in Finland, Europe in 2010.<br />\\r\\n<br />\\r\\nPresented by Jennifer Komar Olivarez, the Associate Curator of Decorative Arts, Textiles, and Sculpture.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":111,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065797,\"mobile_url\":\"http://vimeo.com/m/92065797\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Inverno II - from \\\"Winter\\\"\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065797\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of Jim Billings with 50 years of friendship. 2013. 59<br />\\r\\n<br />\\r\\nArtist of the scroll: Motīlāl Josī, painted in Chittorgarh, Rajasthan in early 20th Century.<br />\\r\\n<br />\\r\\nPresented by Risha Lee, Ph.D. Jane Emison Assistant Curator of South and Southeast Asian Art.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":130,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065796,\"mobile_url\":\"http://vimeo.com/m/92065796\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665898_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665898_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665898_100x75.jpg\",\"title\":\"Scroll Painting Dedicated to Pabuji (India, Asia)\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065796\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift from the John R. Van Derlip Fund. 2013.56<br />\\r\\n<br />\\r\\nArtist: William Edmondson, Made in United States, 1938-1942.<br />\\r\\n<br />\\r\\nPresented by Karleen Gardner, the Director of Learning and Innovation. <br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":88,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065795,\"mobile_url\":\"http://vimeo.com/m/92065795\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":3,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471664191_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471664191_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471664191_100x75.jpg\",\"title\":\"Ram\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065795\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-04-15 13:25:25\",\"description\":\"\",\"id\":2829415,\"last_modified\":\"2014-05-30 15:35:32\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Current Exhibitions\",\"total_videos\":4,\"url\":\"http://vimeo.com/album/2829415\",\"videos\":[{\"description\":\"Exhibition Dates: November 2, 2013 - August 31, 2014<br />\\r\\n<br />\\r\\nMartin Weinstein, a former trial attorney turned photography connoisseur, has given more than 500 photographs to the MIA, in addition to numerous prints, paintings, and sculptures. \\\"31 Years: Gifts from Martin Weinstein\\\" celebrates the depth and quality of his decades of art giving.<br />\\r\\n<br />\\r\\nThe photographs on view include a who's who in the history of photography, from Margaret Bourke-White and Ansel Adams to Robert Mapplethorpe and Alec Soth. Together these pictures highlight many stories—personal, institutional, and historic.\",\"duration\":223,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87681978,\"mobile_url\":\"http://vimeo.com/m/87681978\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":27,\"tags\":\"photography, museum, art, exhibition, minneapolis, starts:2013-11-02, ends:2014-08-31\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465837390_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465837390_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465837390_100x75.jpg\",\"title\":\"31 Years: Gifts from Martin Weinstein\",\"upload_date\":\"2014-02-26 11:32:01\",\"url\":\"http://vimeo.com/87681978\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":33,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":7,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:23:40\",\"description\":\"The MIA’s Artist in Residence program (AIR) is designed to enhance and enliven the museum’s encyclopedic holdings of contemporary and historical art, resulting in projects that recontextualize or reinterpret art in the collection.<br />\\r\\n<br />\\r\\nResident artists create site-specific works, collaborate on projects with the community, and mine the museum’s collections to create installations that juxtapose artworks from a range of historical periods and aesthetic traditions.<br />\\r\\n<br />\\r\\nBringing their individual experiences and perspectives to the museum, AIR creative thinkers and makers provide the community with a fresh perspective on the meaning and power of art.\",\"id\":2799770,\"last_modified\":\"2014-03-27 12:23:40\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465842316_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465842316_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465842316_100x75.jpg\",\"title\":\"Artist in Residence\",\"total_videos\":1,\"url\":\"http://vimeo.com/album/2799770\",\"videos\":[{\"description\":\"Mark Dion is an American artist best known for his seductive and often fantastical cabinets of curiosity. Based on 17th-century Wunderkammern (\\\"chambers of wonder\\\"), his work explores the relationships among art, science, and history through pseudo-scientific methods of investigation and display. <br />\\r\\n<br />\\r\\nHis new installation, Curator's Office, commissioned for the exhibition \\\"More Real? Art in the Age of Truthiness,\\\" claims the artist rediscovered an office used in the 1950s by the first curator of modern art at the Minneapolis Institute of Arts. Within the context of a museum exhibition, however, Curator's Office also becomes a \\\"period room,\\\" an installation of objects, furnishings, and architecture meant to illustrate a historical moment by re-creating its interior domestic spaces. Period rooms are popular museum attractions that are both authentic (in their contents) and false (in their detachment from their original contexts.)\",\"duration\":131,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685777,\"mobile_url\":\"http://vimeo.com/m/87685777\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"mia:object=116294, mia:exhibition=more-real\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465842316_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465842316_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465842316_100x75.jpg\",\"title\":\"MIA Artist in Residence: Mark Dion\",\"upload_date\":\"2014-02-26 12:10:36\",\"url\":\"http://vimeo.com/87685777\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:19:20\",\"description\":\"\",\"id\":2799756,\"last_modified\":\"2014-04-15 13:28:57\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469446016_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469446016_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469446016_100x75.jpg\",\"title\":\"Events\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2799756\",\"videos\":[{\"description\":\"The Minneapolis Institute of Arts, in collaboration with 89.3 The Current and Vita.mn, was proud to host a special concert featuring hip-hop artist Dessa of the Doomtree collective. Ticket sales from this performance seeded a new scholarship for under-served teens as part of the museum's continued commitment to youth programs.\",\"duration\":180,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90344285,\"mobile_url\":\"http://vimeo.com/m/90344285\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":23,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469446016_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469446016_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469446016_100x75.jpg\",\"title\":\"Dessa at the MIA\",\"upload_date\":\"2014-03-28 13:02:49\",\"url\":\"http://vimeo.com/90344285\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"On July 16, 2012, the MIA hosted presentations by top trend experts for its staff, Trustees, and colleagues from the Toledo Museum of Art, the Andy Warhol Museum, the Carnegie Museum of Art, the High Museum of Art, and The Nelson-Atkins Museum. <br />\\n<br />\\nCalled \\\"The Art of Ideas,\\\" this forum is part of a broader initiative to develop innovative approaches to some of the most pressing challenges faced by art museums today.\",\"duration\":310,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90330274,\"mobile_url\":\"http://vimeo.com/m/90330274\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469437723_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469437723_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469437723_100x75.jpg\",\"title\":\"Art of Ideas at the MIA\",\"upload_date\":\"2014-03-28 10:38:51\",\"url\":\"http://vimeo.com/90330274\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The MIA is proud to present Body/Head as the first installation of Sound.Art.MIA, a new contemporary music program at the museum that invites all your senses to experiment, create, and play.<br />\\r\\n<br />\\r\\nLocal virtuoso musician Paul Metzger kicked off the evening with haunting sounds from his 23-string banjo. <br />\\r\\nBody/Head performed against a backdrop of slow-motion film projection, which serves as a powerful and visionary dream narrative.\",\"duration\":71,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744587,\"mobile_url\":\"http://vimeo.com/m/89744587\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":11,\"tags\":\"event, thirdthursday, soundart\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468615027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468615027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468615027_100x75.jpg\",\"title\":\"Third Thursday 2/27 Sound Art MIA\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744587\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:17:52\",\"description\":\"The Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. Begun in 1975 as a creative partnership with the MIA, the MAEP was founded by a group of regional artists interested in creating an innovative exhibition and programming space. What began as a year-long agreement has been extended into an ongoing relationship between the Minnesota artist community and the MIA.<br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"id\":2799752,\"last_modified\":\"2014-05-30 15:44:14\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Minnesota Artists Exhibition Program [MAEP]\",\"total_videos\":4,\"url\":\"http://vimeo.com/album/2799752\",\"videos\":[{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":7,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The driving principle of Williams's MAEP exhibition is to display the science and technology of vision. He creates fascinating sculptural installations that re-present digital and analog images and \\\"utilize photography as a technical and philosophical strategy.\\\" Most recently, he has been interested in ocular phenomena such as the persistence of vision, linear perspective, and the stereoscopic illusion. <br />\\r\\n<br />\\r\\nExhibition: Jaron Childs and Jonathan Bruce Williams Exhibition Dates: January 17 - March 30, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/jar...<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":93,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744586,\"mobile_url\":\"http://vimeo.com/m/89744586\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":14,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468620145_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468620145_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468620145_100x75.jpg\",\"title\":\"Jonathan Bruce Williams - Anti-Newton\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744586\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jaron Childs' exhibition presents a new series of hyper-realistic and finely detailed paintings, based on his own photographs, that are a rejoinder to contemporary attitudes about beauty in painting. He has done this by carefully choosing images that both test the limits of acceptable sentimentality for critical art and offer visual pleasures that also contain sensations of alienation and loss. With a relatively small number of works, \\\"How to make a world\\\" is meant to engage the various and contradicting claims made on painting regarding beauty, artistic merit, and its relevance as a medium.<br />\\r\\n<br />\\r\\nExhibition: Jaron Childs and Jonathan Bruce Williams Exhibition Dates: January 17 - March 30, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/jar...<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744585,\"mobile_url\":\"http://vimeo.com/m/89744585\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":18,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468615412_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468615412_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468615412_100x75.jpg\",\"title\":\"Jaron Childs - How to Make a World\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744585\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-26 14:50:14\",\"description\":\"\",\"id\":2798271,\"last_modified\":\"2014-03-26 18:18:12\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204083_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204083_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204083_100x75.jpg\",\"title\":\"Voices of the Community\",\"total_videos\":8,\"url\":\"http://vimeo.com/album/2798271\",\"videos\":[{\"description\":\"Film director and producer and Professor of French and Director of the French and Francophone Studies program at Carleton College, on the topic of Mali.\",\"duration\":190,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161609,\"mobile_url\":\"http://vimeo.com/m/90161609\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":44,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204083_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204083_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204083_100x75.jpg\",\"title\":\"Voices of the Community: Chérif KeÏta, Mali\",\"upload_date\":\"2014-03-26 16:51:25\",\"url\":\"http://vimeo.com/90161609\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Regents Professor Emeritus of Medieval Studies and Cataloguer of Oriental Manuscripts at the Hill Museum and Manuscript Library at Saint John's University, on the topic of Ethiopian Manuscripts\",\"duration\":207,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161586,\"mobile_url\":\"http://vimeo.com/m/90161586\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204121_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204121_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204121_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Getatchew Haile, Ethiopia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161586\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Assistant Professor of Sociology at the University of Minnesota, on the topic of Somalia\",\"duration\":195,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161584,\"mobile_url\":\"http://vimeo.com/m/90161584\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":14,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469202141_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469202141_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469202141_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Cawo Abdi, Somalia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161584\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Student Advisor of the African Nation Student Association at the University of St. Thomas, on the topic of Liberia<br />\\r\\ncredit: 2013 Minneapolis Institute of Arts\",\"duration\":260,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685191,\"mobile_url\":\"http://vimeo.com/m/87685191\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203658_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203658_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203658_100x75.jpg\",\"title\":\"Voices of the Community: Tarkor Zehn, Liberia\",\"upload_date\":\"2014-02-26 12:05:09\",\"url\":\"http://vimeo.com/87685191\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Ethnomusicologist, composer, master drummer; and director of African music ensembles at Macalester College, the University of Saint Thomas, and the University of Minnesota, on the topic of Ghana.\",\"duration\":292,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685190,\"mobile_url\":\"http://vimeo.com/m/87685190\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203865_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203865_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203865_100x75.jpg\",\"title\":\"Voices of the Community: Sowah Mensah, Ghana\",\"upload_date\":\"2014-02-26 12:05:09\",\"url\":\"http://vimeo.com/87685190\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Founding member of the Igbo Women League of Minnesota, on the topic of Igbo.\",\"duration\":188,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87684937,\"mobile_url\":\"http://vimeo.com/m/87684937\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":7,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203947_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203947_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203947_100x75.jpg\",\"title\":\"Voices of the Community: Rositta Nwaokolo, Nigeria (Igbo)\",\"upload_date\":\"2014-02-26 12:02:41\",\"url\":\"http://vimeo.com/87684937\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-26 12:43:44\",\"description\":\"Presented each fall and spring, \\\"New Pictures\\\" highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nhttp://www2.artsmia.org/blogs/new-pictures/exhibition-archive/\",\"id\":2798066,\"last_modified\":\"2014-05-30 15:06:32\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures\",\"total_videos\":9,\"url\":\"http://vimeo.com/album/2798066\",\"videos\":[{\"description\":\"Noriko Furunishi's monumental landscape photographs inaugurate New Pictures, a semiannual series dedicated to innovative work by emerging artists from around the world. Presented each fall and spring, the series highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nFurunishi, who was born in Kobe, Japan, and lives in Los Angeles, uses a large-format 4 x 5 camera to make several film images of geographical sites in the United States. Each image represents a different point of view, typically including one with a span from the tip of the artists toes into the foreground and landscape. After selecting four to six images, Furunishi scans the negatives onto a computer and then digitally stitches them together with Adobe Photoshop to create seemingly continuous landscapes. A close look reveals that some images have been flipped upside down or rearranged within the composition. The vertical orientation of Furunishi's photographs recalls the complex formal compositions of historical Chinese and Japanese hanging scroll paintings, providing a contemporary perspective on the MIA's renowned Asian collection.<br />\\r\\n<br />\\r\\nFurunishi's photographs suggest the new visual conditions and technological possibilities of our own time through their subtly warped vistas, which upend preconceptions about the land beneath our feet and the skies overhead.\",\"duration\":241,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89751956,\"mobile_url\":\"http://vimeo.com/m/89751956\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":75,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469158561_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469158561_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469158561_100x75.jpg\",\"title\":\"New Pictures 1: Noriko Furunishi\",\"upload_date\":\"2014-03-21 18:08:12\",\"url\":\"http://vimeo.com/89751956\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Abstract photographs by the German artist Marco Breuer (b. 1966) are featured in this \\\"New Pictures\\\" exhibition, the second in a semiannual series dedicated to innovative new work by artists from around the world. Presented each fall and spring, New Pictures highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nBreuer's works invite close inspection of their complex and delicate surfaces, colors, and forms. At the same time, they challenge our assumptions by raising the question \\\"What is a photograph?\\\" Breuer omits the two elements most commonly associated with photographs: the camera and a representational picture of the world. By sanding, scraping, burning, embossing, and cutting the light-sensitive surface of the photographic paper, he emphasizes the medium's fundamental elements: light-sensitive photographic paper, and light. In the end, Breuer's images are not just pictures, they are physical marks of the material world.<br />\\r\\n<br />\\r\\nTo capture the complexity of Breuer's approach to photography, a second edition of \\\"New Pictures 2: Marco Breuer\\\" will be on view starting March 12. At that time, the artist will alter the space to evoke a darkroom and will create a site-specific installation addressing the relationship between photography and drawing.\",\"duration\":87,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134383,\"mobile_url\":\"http://vimeo.com/m/90134383\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":54,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469154005_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469154005_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469154005_100x75.jpg\",\"title\":\"New Pictures 2: Marco Breuer\",\"upload_date\":\"2014-03-26 12:11:33\",\"url\":\"http://vimeo.com/90134383\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The third exhibition in the Minneapolis Institute of Arts' new photography series presents the innovative work of Los Angeles photographer James Welling.<br />\\r\\n<br />\\r\\n\\\"New Pictures 3: James Welling, Glass House\\\" showcases an elegant photographic series of Philip Johnson's modernist architectural masterpiece, Glass House (1949).<br />\\r\\n<br />\\r\\nUsing a digital camera and color filters, Welling experiments with new possibilities for architectural photography, capturing the luminous effects of Johnson's glass-skinned structure at different times and with changing light conditions over a three-year period (2006--2008.) These atmospheric works reveal the ambiguity between the interior built space and exterior natural space evoked by Johnson's home. These pictures suggest a physical experience of space and form that is unique in architectural photography.<br />\\r\\n<br />\\r\\nJames Welling has been producing groundbreaking work since the 1970s that possesses a rare combination of conceptual depth and technical skill. Through the last three decades, he continues to challenge himself as a photographer and offers viewers new discoveries through thoughtful and visually arresting photographs that suggest overlooked aspects of the medium.<br />\\r\\n<br />\\r\\nIn the last five years, he has taken on the challenge of architecture and produced a body of work that offers a new take on representations of architecture within a natural site. His experimental use of color and light to explore spatiality makes him a particularly important artist to feature in the MIA's 'New Pictures' series.<br />\\r\\n<br />\\r\\nWelling, a professor in the Department of Art at the University of California, Los Angeles, first gained national recognition in the 1970s and 1980s for his carefully staged black-and-white photographs employing such unconventional mediums as pastry dough, gelatin, and tinfoil. These early works spoke to the role of the photographer in staging the vision and narrative of each picture. Welling's work has been exhibited internationally and was the subject of a retrospective exhibition, \\\"James Welling Photographs, 1974--1999.\\\"\",\"duration\":259,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134384,\"mobile_url\":\"http://vimeo.com/m/90134384\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":71,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469155427_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469155427_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469155427_100x75.jpg\",\"title\":\"New Pictures 3: James Welling\",\"upload_date\":\"2014-03-26 12:11:34\",\"url\":\"http://vimeo.com/90134384\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The fourth edition of \\\"New Pictures,\\\" a semi-annual series dedicated to showcasing vital experiments in photography and new media by artists from around the world, features a selection of photographs by Angela Strassheim from her series Evidence. These pictures draw on photography's historical association with images of death. In the late 19th century, families often took pictures of deceased children and loved ones to preserve their memories. At the same time, homicide detectives, lawyers, and journalists have long used photographs as evidence of murders and other crimes. Employing forensic techniques to record domestic interiors where murders have taken place in New York, Massachusetts, and Minneapolis, Strassheim merges these two deeply rooted themes of memory and crime in her images.<br />\\r\\n<br />\\r\\nA graduate of the Minneapolis College of Art and Design and the M.F.A. program at Yale University, Strassheim received training and a certificate in forensic photography. During a six-year period between her undergraduate and graduate studies, she earned a living as a forensic photographer, taking pictures of crime scenes and autopsies. Since 2009, she has applied this on-the-job experience to produce Evidence, a more nuanced and less scientific examination of domestic crime. These photographs reveal the eerie vestiges of past lives in homes that are now inhabited by new families. To contextualize the long history of photography with the genre of crime and murder, the exhibition also features a display of photographs from local historical collections.\",\"duration\":162,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134386,\"mobile_url\":\"http://vimeo.com/m/90134386\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":62,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469155716_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469155716_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469155716_100x75.jpg\",\"title\":\"New Pictures 4: Angela Strassheim\",\"upload_date\":\"2014-03-26 12:11:34\",\"url\":\"http://vimeo.com/90134386\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A few years ago, a friend gave artist Jason Fulford a manila envelope, found at a flea market. The envelope contained 80 photographs of mushrooms, each composed and annotated with the care of someone who just had to be a mushroom collector. These anonymous photographs inspired Fulford to create his own collection of photographs, publications, sculptures, and performances, all under the umbrella of the Soon Institute. Similar to the lifecycle of mushrooms, the project goes underground and periodically sprouts up in various artistic forms (including The Mushroom Collector, a book he published in 2010), in unexpected locations, such as New York, California, and Amsterdam.<br />\\r\\n<br />\\r\\nFulford's pictures appear to be unremarkable shots of commonplace objects, people, and places. Yet a closer look reveals humorous and subtle oddities. Fulford's images reveal themselves through repetition, sequences, and relationships between form and shadow, abstraction and reality. His work is now on view in \\\"New Pictures 5\\\" in Gallery 262.<br />\\r\\n<br />\\r\\nFulford is a photographer and co-founder of the publishing house J&L Books in Atlanta / New York, and the author of several titles. He has lectured widely, and is a contributing editor to Blind Spot magazine. Fulford's photographs have been featured in magazines and books.\",\"duration\":153,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134389,\"mobile_url\":\"http://vimeo.com/m/90134389\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":24,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156337_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156337_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156337_100x75.jpg\",\"title\":\"New Pictures 5: Jason Fulford\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134389\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Friday, April 20, 2012—Sunday, August 5, 2012<br />\\r\\nLinda and Lawrence Perlman Gallery (262)<br />\\r\\nFree Exhibition<br />\\r\\n<br />\\r\\nAs part of our \\\"New Pictures\\\" series devoted to innovation in contemporary photography, the Minneapolis Institute of Arts invited British photographer Martin Parr to cross the pond and shoot photos covering the wealth of winter activities in Minnesota, from pond hockey to ice fishing.<br />\\r\\n<br />\\r\\nThe results of his endeavor are on view in his exhibition, \\\"New Pictures 6: Martin Parr,\\\" opening April 20 in the Linda and Lawrence Perlman Gallery (262).<br />\\r\\n<br />\\r\\nA member of the esteemed Magnum Photos, an international photographers' cooperative, Parr is one of the most renowned and celebrated photographers working today. He is known for his innovative use of color photography and his humorous approach to documenting the daily rituals of life. Parr is also recognized for his work as an editor of photo-based publications, and is credited with more than twenty compilations of his own work. In 2008, he was awarded the Royal Photographic Society Centenary Medal and the Baume & Mercier award for his career contributions to contemporary photography.\",\"duration\":166,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134391,\"mobile_url\":\"http://vimeo.com/m/90134391\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":21,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156574_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156574_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156574_100x75.jpg\",\"title\":\"New Pictures 6: Martin Parr\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134391\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Stan Douglas is a photographer, filmmaker, and installation artist whose works have been exhibited internationally, including in three Venice Biennials and three dOCUMENTAs. Douglas's photographs examine how images and memory shape interpretations of history. To create his photographs, Douglas often assumes the role of a photojournalist who travels back in time to reinterpret key events in social and political history, such as the 1975 revolution in Angola and social riots in Canada during the 1930s and 1970s. After conducting intensive research, he restages these events using actors, costumes, props, and sets. These pictures are meticulously composed down to the slightest gestures and period styles.<br />\\r\\n<br />\\r\\nDouglas was awarded the prestigious Infinity Award for Art by the International Center for Photography in 2012.<br />\\r\\n<br />\\r\\nThe Arnold Neman Lecture Series is made possible thanks to a generous gift from the Arnold and Augusta Newman Foundation.<br />\\r\\n<br />\\r\\nGenerous support for New Pictures is provided by the W. Duncan and Nivin MacMillan Foundation.\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96937899,\"mobile_url\":\"http://vimeo.com/m/96937899\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":1,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures 7: Stan Douglas\",\"upload_date\":\"2014-05-30 15:05:34\",\"url\":\"http://vimeo.com/96937899\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jones gained notoriety for photographing psychoanalysts' therapy rooms in the late 1990s and has continued to explore this provocative subject. In Analyst (Couch) (I), 2008, she shows the therapist's viewpoint: a banal-looking couch covered with a red blanket bears the imprint of the patient who lay upon it during a session. Arrangement (Analyst) (I), 2007, focuses on the objects that have been carefully arranged by the analyst to create a soothing environment for the patient.<br />\\r\\n<br />\\r\\nTwo large-scale diptychs—one showing a horse and the other a rose bush—refer to early stereographic prints and explore the potential for photography to reveal uncanny perspectives. In The Rose Gardens (display: III / white) (II) and (III), of 2008, Jones photographed a rose bush from both front and back so viewers can contemplate both viewpoints simultaneously. In Horse (profile / black) (II) and (III), of 2012, she paired two images of a horse, whose majestic presence is compressed through the process of doubling.<br />\\r\\n<br />\\r\\nJones earned her master of fine arts degree at Goldsmith College in London and has been exhibiting internationally for over twenty years. She is represented by Maureen Paley, London, and Anton Kern Gallery, New York, and is also a tutor at The Royal College of Art in London. A new monograph published by Violette Editions, with contributions by David Campany, Brian Dillon, and A. M. Homes, is now available in bookshops.<br />\\r\\n<br />\\r\\nMusic credit: \\\"White Lotus\\\" by Kevin Macleod\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96710338,\"mobile_url\":\"http://vimeo.com/m/96710338\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":4,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/476841556_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/476841556_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/476841556_100x75.jpg\",\"title\":\"New Pictures 8: Sarah Jones\",\"upload_date\":\"2014-05-28 11:04:42\",\"url\":\"http://vimeo.com/96710338\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Rinko Kawauchi's first museum exhibition in the United States shows why she's one of the most important and popular female photographers working in Japan today. Kawauchi's unique installation of photographs at the MIA capture ordinary, fleeting moments of light and daily life, the photographs evoking everything from wonderment to the grotesque. A picture of a child breastfeeding. Ants carrying a grain of sugar. A tiny chrysalis on a blade of grass. She views the world with a playful, thought-provoking, and critically detached curiosity.<br />\\r\\n<br />\\r\\nExhibition Dates: February 20 - August 10, 2014\",\"duration\":114,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90059652,\"mobile_url\":\"http://vimeo.com/m/90059652\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":225,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469047957_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469047957_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469047957_100x75.jpg\",\"title\":\"New Pictures 9: Rinko Kawauchi\",\"upload_date\":\"2014-03-25 16:37:53\",\"url\":\"http://vimeo.com/90059652\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]}]}\n")
  , controls = document.getElementById('thirdav-controls').innerHTML;

window.app = ng.module('third-av', [])

app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'player.vimeo.com/**'
  ])
})

app.controller('mainCtrl', ['$scope', '$sce',
  function($scope, $sce) {
    $scope.videos = $scope.recent = vimeoJson.videos
    $scope.albums = vimeoJson.albums
    $scope.albums.splice(1, 0, {title: "Latest", videos: $scope.recent})

    $scope.activateAlbum = function(album) { $scope.activeAlbum = album }
    $scope.activeAlbum = $scope.albums[0]
  }
])

require('./js/miaVideo')
require('./js/swiper')
require('./js/ngUnsafe')

window.addEventListener('load', function() {
  FastClick.attach(document.body);
}, false);

// Bootstrap after page load
document.body.setAttribute( 'ng-controller', 'mainCtrl' );
document.getElementById('thirdav-menu').innerHTML = controls;
ng.bootstrap( document.body, ['third-av'] );
},{"./js/miaVideo":3,"./js/ngUnsafe":4,"./js/swiper":5,"angular":6,"fs":8}],2:[function(require,module,exports){
/*
 * Swiper 2.5.5
 * Mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2010-2014, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: March 23, 2014
*/
var Swiper = function (selector, params) {
    'use strict';

    /*=========================
      A little bit dirty but required part for IE8 and old FF support
      ===========================*/
    if (document.body.__defineGetter__) {
        if (HTMLElement) {
            var element = HTMLElement.prototype;
            if (element.__defineGetter__) {
                element.__defineGetter__('outerHTML', function () { return new XMLSerializer().serializeToString(this); });
            }
        }
    }

    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') prop = 'styleFloat';
                if (re.test(prop)) {
                    prop = prop.replace(re, function () {
                        return arguments[2].toUpperCase();
                    });
                }
                return el.currentStyle[prop] ? el.currentStyle[prop] : null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        };
    }
    if (!document.querySelectorAll) {
        if (!window.jQuery) return;
    }
    function $$(selector, context) {
        if (document.querySelectorAll)
            return (context || document).querySelectorAll(selector);
        else
            return jQuery(selector, context);
    }

    /*=========================
      Check for correct selector
      ===========================*/
    if (typeof selector === 'undefined') return;

    if (!(selector.nodeType)) {
        if ($$(selector).length === 0) return;
    }

     /*=========================
      _this
      ===========================*/
    var _this = this;

     /*=========================
      Default Flags and vars
      ===========================*/
    _this.touches = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
        abs: 0
    };
    _this.positions = {
        start: 0,
        abs: 0,
        diff: 0,
        current: 0
    };
    _this.times = {
        start: 0,
        end: 0
    };

    _this.id = (new Date()).getTime();
    _this.container = (selector.nodeType) ? selector : $$(selector)[0];
    _this.isTouched = false;
    _this.isMoved = false;
    _this.activeIndex = 0;
    _this.centerIndex = 0;
    _this.activeLoaderIndex = 0;
    _this.activeLoopIndex = 0;
    _this.previousIndex = null;
    _this.velocity = 0;
    _this.snapGrid = [];
    _this.slidesGrid = [];
    _this.imagesToLoad = [];
    _this.imagesLoaded = 0;
    _this.wrapperLeft = 0;
    _this.wrapperRight = 0;
    _this.wrapperTop = 0;
    _this.wrapperBottom = 0;
    _this.isAndroid = navigator.userAgent.toLowerCase().indexOf('android') >= 0;
    var wrapper, slideSize, wrapperSize, direction, isScrolling, containerSize;

    /*=========================
      Default Parameters
      ===========================*/
    var defaults = {
        eventTarget: 'wrapper', // or 'container'
        mode : 'horizontal', // or 'vertical'
        touchRatio : 1,
        speed : 300,
        freeMode : false,
        freeModeFluid : false,
        momentumRatio: 1,
        momentumBounce: true,
        momentumBounceRatio: 1,
        slidesPerView : 1,
        slidesPerGroup : 1,
        slidesPerViewFit: true, //Fit to slide when spv "auto" and slides larger than container
        simulateTouch : true,
        followFinger : true,
        shortSwipes : true,
        longSwipesRatio: 0.5,
        moveStartThreshold: false,
        onlyExternal : false,
        createPagination : true,
        pagination : false,
        paginationElement: 'span',
        paginationClickable: false,
        paginationAsRange: true,
        resistance : true, // or false or 100%
        scrollContainer : false,
        preventLinks : true,
        preventLinksPropagation: false,
        noSwiping : false, // or class
        noSwipingClass : 'swiper-no-swiping', //:)
        initialSlide: 0,
        keyboardControl: false,
        mousewheelControl : false,
        mousewheelControlForceToAxis : false,
        useCSS3Transforms : true,
        // Autoplay
        autoplay: false,
        autoplayDisableOnInteraction: true,
        autoplayStopOnLast: false,
        //Loop mode
        loop: false,
        loopAdditionalSlides: 0,
        // Round length values
        roundLengths: false,
        //Auto Height
        calculateHeight: false,
        cssWidthAndHeight: false,
        //Images Preloader
        updateOnImagesReady : true,
        //Form elements
        releaseFormElements : true,
        //Watch for active slide, useful when use effects on different slide states
        watchActiveIndex: false,
        //Slides Visibility Fit
        visibilityFullFit : false,
        //Slides Offset
        offsetPxBefore : 0,
        offsetPxAfter : 0,
        offsetSlidesBefore : 0,
        offsetSlidesAfter : 0,
        centeredSlides: false,
        //Queue callbacks
        queueStartCallbacks : false,
        queueEndCallbacks : false,
        //Auto Resize
        autoResize : true,
        resizeReInit : false,
        //DOMAnimation
        DOMAnimation : true,
        //Slides Loader
        loader: {
            slides: [], //array with slides
            slidesHTMLType: 'inner', // or 'outer'
            surroundGroups: 1, //keep preloaded slides groups around view
            logic: 'reload', //or 'change'
            loadAllSlides: false
        },
        //Namespace
        slideElement: 'div',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        wrapperClass: 'swiper-wrapper',
        paginationElementClass: 'swiper-pagination-switch',
        paginationActiveClass: 'swiper-active-switch',
        paginationVisibleClass: 'swiper-visible-switch'
    };
    params = params || {};
    for (var prop in defaults) {
        if (prop in params && typeof params[prop] === 'object') {
            for (var subProp in defaults[prop]) {
                if (! (subProp in params[prop])) {
                    params[prop][subProp] = defaults[prop][subProp];
                }
            }
        }
        else if (! (prop in params)) {
            params[prop] = defaults[prop];
        }
    }
    _this.params = params;
    if (params.scrollContainer) {
        params.freeMode = true;
        params.freeModeFluid = true;
    }
    if (params.loop) {
        params.resistance = '100%';
    }
    var isH = params.mode === 'horizontal';

    /*=========================
      Define Touch Events
      ===========================*/
    var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
    if (_this.browser.ie10) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    if (_this.browser.ie11) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];

    _this.touchEvents = {
        touchStart : _this.support.touch || !params.simulateTouch  ? 'touchstart' : desktopEvents[0],
        touchMove : _this.support.touch || !params.simulateTouch ? 'touchmove' : desktopEvents[1],
        touchEnd : _this.support.touch || !params.simulateTouch ? 'touchend' : desktopEvents[2]
    };

    /*=========================
      Wrapper
      ===========================*/
    for (var i = _this.container.childNodes.length - 1; i >= 0; i--) {
        if (_this.container.childNodes[i].className) {
            var _wrapperClasses = _this.container.childNodes[i].className.split(/\s+/);
            for (var j = 0; j < _wrapperClasses.length; j++) {
                if (_wrapperClasses[j] === params.wrapperClass) {
                    wrapper = _this.container.childNodes[i];
                }
            }
        }
    }

    _this.wrapper = wrapper;
    /*=========================
      Slide API
      ===========================*/
    _this._extendSwiperSlide = function  (el) {
        el.append = function () {
            if (params.loop) {
                el.insertAfter(_this.slides.length - _this.loopedSlides);
            }
            else {
                _this.wrapper.appendChild(el);
                _this.reInit();
            }

            return el;
        };
        el.prepend = function () {
            if (params.loop) {
                _this.wrapper.insertBefore(el, _this.slides[_this.loopedSlides]);
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                _this.wrapper.insertBefore(el, _this.wrapper.firstChild);
            }
            _this.reInit();
            return el;
        };
        el.insertAfter = function (index) {
            if (typeof index === 'undefined') return false;
            var beforeSlide;

            if (params.loop) {
                beforeSlide = _this.slides[index + 1 + _this.loopedSlides];
                if (beforeSlide) {
                    _this.wrapper.insertBefore(el, beforeSlide);
                }
                else {
                    _this.wrapper.appendChild(el);
                }
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else {
                beforeSlide = _this.slides[index + 1];
                _this.wrapper.insertBefore(el, beforeSlide);
            }
            _this.reInit();
            return el;
        };
        el.clone = function () {
            return _this._extendSwiperSlide(el.cloneNode(true));
        };
        el.remove = function () {
            _this.wrapper.removeChild(el);
            _this.reInit();
        };
        el.html = function (html) {
            if (typeof html === 'undefined') {
                return el.innerHTML;
            }
            else {
                el.innerHTML = html;
                return el;
            }
        };
        el.index = function () {
            var index;
            for (var i = _this.slides.length - 1; i >= 0; i--) {
                if (el === _this.slides[i]) index = i;
            }
            return index;
        };
        el.isActive = function () {
            if (el.index() === _this.activeIndex) return true;
            else return false;
        };
        if (!el.swiperSlideDataStorage) el.swiperSlideDataStorage = {};
        el.getData = function (name) {
            return el.swiperSlideDataStorage[name];
        };
        el.setData = function (name, value) {
            el.swiperSlideDataStorage[name] = value;
            return el;
        };
        el.data = function (name, value) {
            if (typeof value === 'undefined') {
                return el.getAttribute('data-' + name);
            }
            else {
                el.setAttribute('data-' + name, value);
                return el;
            }
        };
        el.getWidth = function (outer, round) {
            return _this.h.getWidth(el, outer, round);
        };
        el.getHeight = function (outer, round) {
            return _this.h.getHeight(el, outer, round);
        };
        el.getOffset = function () {
            return _this.h.getOffset(el);
        };
        return el;
    };

    //Calculate information about number of slides
    _this.calcSlides = function (forceCalcSlides) {
        var oldNumber = _this.slides ? _this.slides.length : false;
        _this.slides = [];
        _this.displaySlides = [];
        for (var i = 0; i < _this.wrapper.childNodes.length; i++) {
            if (_this.wrapper.childNodes[i].className) {
                var _className = _this.wrapper.childNodes[i].className;
                var _slideClasses = _className.split(/\s+/);
                for (var j = 0; j < _slideClasses.length; j++) {
                    if (_slideClasses[j] === params.slideClass) {
                        _this.slides.push(_this.wrapper.childNodes[i]);
                    }
                }
            }
        }
        for (i = _this.slides.length - 1; i >= 0; i--) {
            _this._extendSwiperSlide(_this.slides[i]);
        }
        if (oldNumber === false) return;
        if (oldNumber !== _this.slides.length || forceCalcSlides) {

            // Number of slides has been changed
            removeSlideEvents();
            addSlideEvents();
            _this.updateActiveSlide();
            if (_this.params.pagination) _this.createPagination();
            _this.callPlugins('numberOfSlidesChanged');
        }
    };

    //Create Slide
    _this.createSlide = function (html, slideClassList, el) {
        slideClassList = slideClassList || _this.params.slideClass;
        el = el || params.slideElement;
        var newSlide = document.createElement(el);
        newSlide.innerHTML = html || '';
        newSlide.className = slideClassList;
        return _this._extendSwiperSlide(newSlide);
    };

    //Append Slide
    _this.appendSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).append();
        }
        else {
            return _this.createSlide(html, slideClassList, el).append();
        }
    };
    _this.prependSlide = function (html, slideClassList, el) {
        if (!html) return;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).prepend();
        }
        else {
            return _this.createSlide(html, slideClassList, el).prepend();
        }
    };
    _this.insertSlideAfter = function (index, html, slideClassList, el) {
        if (typeof index === 'undefined') return false;
        if (html.nodeType) {
            return _this._extendSwiperSlide(html).insertAfter(index);
        }
        else {
            return _this.createSlide(html, slideClassList, el).insertAfter(index);
        }
    };
    _this.removeSlide = function (index) {
        if (_this.slides[index]) {
            if (params.loop) {
                if (!_this.slides[index + _this.loopedSlides]) return false;
                _this.slides[index + _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[index].remove();
            return true;
        }
        else return false;
    };
    _this.removeLastSlide = function () {
        if (_this.slides.length > 0) {
            if (params.loop) {
                _this.slides[_this.slides.length - 1 - _this.loopedSlides].remove();
                _this.removeLoopedSlides();
                _this.calcSlides();
                _this.createLoop();
            }
            else _this.slides[_this.slides.length - 1].remove();
            return true;
        }
        else {
            return false;
        }
    };
    _this.removeAllSlides = function () {
        for (var i = _this.slides.length - 1; i >= 0; i--) {
            _this.slides[i].remove();
        }
    };
    _this.getSlide = function (index) {
        return _this.slides[index];
    };
    _this.getLastSlide = function () {
        return _this.slides[_this.slides.length - 1];
    };
    _this.getFirstSlide = function () {
        return _this.slides[0];
    };

    //Currently Active Slide
    _this.activeSlide = function () {
        return _this.slides[_this.activeIndex];
    };

    /*=========================
     Wrapper for Callbacks : Allows additive callbacks via function arrays
     ===========================*/
    _this.fireCallback = function () {
        var callback = arguments[0];
        if (Object.prototype.toString.call(callback) === '[object Array]') {
            for (var i = 0; i < callback.length; i++) {
                if (typeof callback[i] === 'function') {
                    callback[i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                }
            }
        } else if (Object.prototype.toString.call(callback) === '[object String]') {
            if (params['on' + callback]) _this.fireCallback(params['on' + callback]);
        } else {
            callback(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    };
    function isArray(obj) {
        if (Object.prototype.toString.apply(obj) === '[object Array]') return true;
        return false;
    }

    /**
     * Allows user to add callbacks, rather than replace them
     * @param callback
     * @param func
     * @return {*}
     */
    _this.addCallback = function (callback, func) {
        var _this = this, tempFunc;
        if (_this.params['on' + callback]) {
            if (isArray(this.params['on' + callback])) {
                return this.params['on' + callback].push(func);
            } else if (typeof this.params['on' + callback] === 'function') {
                tempFunc = this.params['on' + callback];
                this.params['on' + callback] = [];
                this.params['on' + callback].push(tempFunc);
                return this.params['on' + callback].push(func);
            }
        } else {
            this.params['on' + callback] = [];
            return this.params['on' + callback].push(func);
        }
    };
    _this.removeCallbacks = function (callback) {
        if (_this.params['on' + callback]) {
            _this.params['on' + callback] = null;
        }
    };

    /*=========================
      Plugins API
      ===========================*/
    var _plugins = [];
    for (var plugin in _this.plugins) {
        if (params[plugin]) {
            var p = _this.plugins[plugin](_this, params[plugin]);
            if (p) _plugins.push(p);
        }
    }
    _this.callPlugins = function (method, args) {
        if (!args) args = {};
        for (var i = 0; i < _plugins.length; i++) {
            if (method in _plugins[i]) {
                _plugins[i][method](args);
            }
        }
    };

    /*=========================
      Windows Phone 8 Fix
      ===========================*/
    if ((_this.browser.ie10 || _this.browser.ie11) && !params.onlyExternal) {
        _this.wrapper.classList.add('swiper-wp8-' + (isH ? 'horizontal' : 'vertical'));
    }

    /*=========================
      Free Mode Class
      ===========================*/
    if (params.freeMode) {
        _this.container.className += ' swiper-free-mode';
    }

    /*==================================================
        Init/Re-init/Resize Fix
    ====================================================*/
    _this.initialized = false;
    _this.init = function (force, forceCalcSlides) {
        var _width = _this.h.getWidth(_this.container, false, params.roundLengths);
        var _height = _this.h.getHeight(_this.container, false, params.roundLengths);
        if (_width === _this.width && _height === _this.height && !force) return;
        
        _this.width = _width;
        _this.height = _height;

        var slideWidth, slideHeight, slideMaxHeight, wrapperWidth, wrapperHeight, slideLeft;
        var i; // loop index variable to avoid JSHint W004 / W038
        containerSize = isH ? _width : _height;
        var wrapper = _this.wrapper;

        if (force) {
            _this.calcSlides(forceCalcSlides);
        }

        if (params.slidesPerView === 'auto') {
            //Auto mode
            var slidesWidth = 0;
            var slidesHeight = 0;

            //Unset Styles
            if (params.slidesOffset > 0) {
                wrapper.style.paddingLeft = '';
                wrapper.style.paddingRight = '';
                wrapper.style.paddingTop = '';
                wrapper.style.paddingBottom = '';
            }
            wrapper.style.width = '';
            wrapper.style.height = '';
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }

            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - this.slides[0].getWidth(true, params.roundLengths)) / 2;
                    _this.wrapperRight = (containerSize - _this.slides[_this.slides.length - 1].getWidth(true, params.roundLengths)) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - _this.slides[0].getHeight(true, params.roundLengths)) / 2;
                    _this.wrapperBottom = (containerSize - _this.slides[_this.slides.length - 1].getHeight(true, params.roundLengths)) / 2;
                }
            }

            if (isH) {
                if (_this.wrapperLeft >= 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight >= 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop >= 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom >= 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }
            slideLeft = 0;
            var centeredSlideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];

            slideMaxHeight = 0;
            for (i = 0; i < _this.slides.length; i++) {
                slideWidth = _this.slides[i].getWidth(true, params.roundLengths);
                slideHeight = _this.slides[i].getHeight(true, params.roundLengths);
                if (params.calculateHeight) {
                    slideMaxHeight = Math.max(slideMaxHeight, slideHeight);
                }
                var _slideSize = isH ? slideWidth : slideHeight;
                if (params.centeredSlides) {
                    var nextSlideWidth = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getWidth(true, params.roundLengths);
                    var nextSlideHeight = i === _this.slides.length - 1 ? 0 : _this.slides[i + 1].getHeight(true, params.roundLengths);
                    var nextSlideSize = isH ? nextSlideWidth : nextSlideHeight;
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize + _this.wrapperLeft);
                        }
                        else {
                            for (var j = 0; j <= Math.floor(_slideSize / (containerSize + _this.wrapperLeft)); j++) {
                                if (j === 0) _this.snapGrid.push(slideLeft + _this.wrapperLeft);
                                else _this.snapGrid.push(slideLeft + _this.wrapperLeft + containerSize * j);
                            }
                        }
                        _this.slidesGrid.push(slideLeft + _this.wrapperLeft);
                    }
                    else {
                        _this.snapGrid.push(centeredSlideLeft);
                        _this.slidesGrid.push(centeredSlideLeft);
                    }
                    centeredSlideLeft += _slideSize / 2 + nextSlideSize / 2;
                }
                else {
                    if (_slideSize > containerSize) {
                        if (params.slidesPerViewFit) {
                            _this.snapGrid.push(slideLeft);
                            _this.snapGrid.push(slideLeft + _slideSize - containerSize);
                        }
                        else {
                            if (containerSize !== 0) {
                                for (var k = 0; k <= Math.floor(_slideSize / containerSize); k++) {
                                    _this.snapGrid.push(slideLeft + containerSize * k);
                                }
                            }
                            else {
                                _this.snapGrid.push(slideLeft);
                            }
                        }
                            
                    }
                    else {
                        _this.snapGrid.push(slideLeft);
                    }
                    _this.slidesGrid.push(slideLeft);
                }

                slideLeft += _slideSize;

                slidesWidth += slideWidth;
                slidesHeight += slideHeight;
            }
            if (params.calculateHeight) _this.height = slideMaxHeight;
            if (isH) {
                wrapperSize = slidesWidth + _this.wrapperRight + _this.wrapperLeft;
                wrapper.style.width = (slidesWidth) + 'px';
                wrapper.style.height = (_this.height) + 'px';
            }
            else {
                wrapperSize = slidesHeight + _this.wrapperTop + _this.wrapperBottom;
                wrapper.style.width = (_this.width) + 'px';
                wrapper.style.height = (slidesHeight) + 'px';
            }

        }
        else if (params.scrollContainer) {
            //Scroll Container
            wrapper.style.width = '';
            wrapper.style.height = '';
            wrapperWidth = _this.slides[0].getWidth(true, params.roundLengths);
            wrapperHeight = _this.slides[0].getHeight(true, params.roundLengths);
            wrapperSize = isH ? wrapperWidth : wrapperHeight;
            wrapper.style.width = wrapperWidth + 'px';
            wrapper.style.height = wrapperHeight + 'px';
            slideSize = isH ? wrapperWidth : wrapperHeight;

        }
        else {
            //For usual slides
            if (params.calculateHeight) {
                slideMaxHeight = 0;
                wrapperHeight = 0;
                //ResetWrapperSize
                if (!isH) _this.container.style.height = '';
                wrapper.style.height = '';

                for (i = 0; i < _this.slides.length; i++) {
                    //ResetSlideSize
                    _this.slides[i].style.height = '';
                    slideMaxHeight = Math.max(_this.slides[i].getHeight(true), slideMaxHeight);
                    if (!isH) wrapperHeight += _this.slides[i].getHeight(true);
                }
                slideHeight = slideMaxHeight;
                _this.height = slideHeight;

                if (isH) wrapperHeight = slideHeight;
                else {
                    containerSize = slideHeight;
                    _this.container.style.height = containerSize + 'px';
                }
            }
            else {
                slideHeight = isH ? _this.height : _this.height / params.slidesPerView;
                if (params.roundLengths) slideHeight = Math.round(slideHeight);
                wrapperHeight = isH ? _this.height : _this.slides.length * slideHeight;
            }
            slideWidth = isH ? _this.width / params.slidesPerView : _this.width;
            if (params.roundLengths) slideWidth = Math.round(slideWidth);
            wrapperWidth = isH ? _this.slides.length * slideWidth : _this.width;
            slideSize = isH ? slideWidth : slideHeight;

            if (params.offsetSlidesBefore > 0) {
                if (isH) _this.wrapperLeft = slideSize * params.offsetSlidesBefore;
                else _this.wrapperTop = slideSize * params.offsetSlidesBefore;
            }
            if (params.offsetSlidesAfter > 0) {
                if (isH) _this.wrapperRight = slideSize * params.offsetSlidesAfter;
                else _this.wrapperBottom = slideSize * params.offsetSlidesAfter;
            }
            if (params.offsetPxBefore > 0) {
                if (isH) _this.wrapperLeft = params.offsetPxBefore;
                else _this.wrapperTop = params.offsetPxBefore;
            }
            if (params.offsetPxAfter > 0) {
                if (isH) _this.wrapperRight = params.offsetPxAfter;
                else _this.wrapperBottom = params.offsetPxAfter;
            }
            if (params.centeredSlides) {
                if (isH) {
                    _this.wrapperLeft = (containerSize - slideSize) / 2;
                    _this.wrapperRight = (containerSize - slideSize) / 2;
                }
                else {
                    _this.wrapperTop = (containerSize - slideSize) / 2;
                    _this.wrapperBottom = (containerSize - slideSize) / 2;
                }
            }
            if (isH) {
                if (_this.wrapperLeft > 0) wrapper.style.paddingLeft = _this.wrapperLeft + 'px';
                if (_this.wrapperRight > 0) wrapper.style.paddingRight = _this.wrapperRight + 'px';
            }
            else {
                if (_this.wrapperTop > 0) wrapper.style.paddingTop = _this.wrapperTop + 'px';
                if (_this.wrapperBottom > 0) wrapper.style.paddingBottom = _this.wrapperBottom + 'px';
            }

            wrapperSize = isH ? wrapperWidth + _this.wrapperRight + _this.wrapperLeft : wrapperHeight + _this.wrapperTop + _this.wrapperBottom;
            if (!params.cssWidthAndHeight) {
                if (parseFloat(wrapperWidth) > 0) {
                    wrapper.style.width = wrapperWidth + 'px';
                }
                if (parseFloat(wrapperHeight) > 0) {
                    wrapper.style.height = wrapperHeight + 'px';
                }
            }
            slideLeft = 0;
            _this.snapGrid = [];
            _this.slidesGrid = [];
            for (i = 0; i < _this.slides.length; i++) {
                _this.snapGrid.push(slideLeft);
                _this.slidesGrid.push(slideLeft);
                slideLeft += slideSize;
                if (!params.cssWidthAndHeight) {
                    if (parseFloat(slideWidth) > 0) {
                        _this.slides[i].style.width = slideWidth + 'px';
                    }
                    if (parseFloat(slideHeight) > 0) {
                        _this.slides[i].style.height = slideHeight + 'px';
                    }
                }
            }

        }

        if (!_this.initialized) {
            _this.callPlugins('onFirstInit');
            if (params.onFirstInit) _this.fireCallback(params.onFirstInit, _this);
        }
        else {
            _this.callPlugins('onInit');
            if (params.onInit) _this.fireCallback(params.onInit, _this);
        }
        _this.initialized = true;
    };

    _this.reInit = function (forceCalcSlides) {
        _this.init(true, forceCalcSlides);
    };

    _this.resizeFix = function (reInit) {
        _this.callPlugins('beforeResizeFix');

        _this.init(params.resizeReInit || reInit);

        // swipe to active slide in fixed mode
        if (!params.freeMode) {
            _this.swipeTo((params.loop ? _this.activeLoopIndex : _this.activeIndex), 0, false);
            // Fix autoplay
            if (params.autoplay) {
                if (_this.support.transitions && typeof autoplayTimeoutId !== 'undefined') {
                    if (typeof autoplayTimeoutId !== 'undefined') {
                        clearTimeout(autoplayTimeoutId);
                        autoplayTimeoutId = undefined;
                        _this.startAutoplay();
                    }
                }
                else {
                    if (typeof autoplayIntervalId !== 'undefined') {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                        _this.startAutoplay();
                    }
                }
            }
        }
        // move wrapper to the beginning in free mode
        else if (_this.getWrapperTranslate() < -maxWrapperPosition()) {
            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(-maxWrapperPosition());
        }

        _this.callPlugins('afterResizeFix');
    };

    /*==========================================
        Max and Min Positions
    ============================================*/
    function maxWrapperPosition() {
        var a = (wrapperSize - containerSize);
        if (params.freeMode) {
            a = wrapperSize - containerSize;
        }
        // if (params.loop) a -= containerSize;
        if (params.slidesPerView > _this.slides.length && !params.centeredSlides) {
            a = 0;
        }
        if (a < 0) a = 0;
        return a;
    }

    /*==========================================
        Event Listeners
    ============================================*/
    function initEvents() {
        var bind = _this.h.addEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                bind(eventTarget, 'touchstart', onTouchStart);
                bind(eventTarget, 'touchmove', onTouchMove);
                bind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                bind(eventTarget, 'mousedown', onTouchStart);
                bind(document, 'mousemove', onTouchMove);
                bind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            bind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            bind(document, _this.touchEvents.touchMove, onTouchMove);
            bind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            bind(window, 'resize', _this.resizeFix);
        }
        //Slide Events
        addSlideEvents();
        //Mousewheel
        _this._wheelEvent = false;
        if (params.mousewheelControl) {
            if (document.onmousewheel !== undefined) {
                _this._wheelEvent = 'mousewheel';
            }
            if (!_this._wheelEvent) {
                try {
                    new WheelEvent('wheel');
                    _this._wheelEvent = 'wheel';
                } catch (e) {}
            }
            if (!_this._wheelEvent) {
                _this._wheelEvent = 'DOMMouseScroll';
            }
            if (_this._wheelEvent) {
                bind(_this.container, _this._wheelEvent, handleMousewheel);
            }
        }

        //Keyboard
        function _loadImage(src) {
            var image = new Image();
            image.onload = function () {
                if (_this && _this.imagesLoaded !== undefined) _this.imagesLoaded++;
                if (_this.imagesLoaded === _this.imagesToLoad.length) {
                    _this.reInit();
                    if (params.onImagesReady) _this.fireCallback(params.onImagesReady, _this);
                }
            };
            image.src = src;
        }

        if (params.keyboardControl) {
            bind(document, 'keydown', handleKeyboardKeys);
        }
        if (params.updateOnImagesReady) {
            _this.imagesToLoad = $$('img', _this.container);

            for (var i = 0; i < _this.imagesToLoad.length; i++) {
                _loadImage(_this.imagesToLoad[i].getAttribute('src'));
            }
        }
    }

    //Remove Event Listeners
    _this.destroy = function () {
        var unbind = _this.h.removeEventListener;
        var eventTarget = params.eventTarget === 'wrapper' ? _this.wrapper : _this.container;
        //Touch Events
        if (! (_this.browser.ie10 || _this.browser.ie11)) {
            if (_this.support.touch) {
                unbind(eventTarget, 'touchstart', onTouchStart);
                unbind(eventTarget, 'touchmove', onTouchMove);
                unbind(eventTarget, 'touchend', onTouchEnd);
            }
            if (params.simulateTouch) {
                unbind(eventTarget, 'mousedown', onTouchStart);
                unbind(document, 'mousemove', onTouchMove);
                unbind(document, 'mouseup', onTouchEnd);
            }
        }
        else {
            unbind(eventTarget, _this.touchEvents.touchStart, onTouchStart);
            unbind(document, _this.touchEvents.touchMove, onTouchMove);
            unbind(document, _this.touchEvents.touchEnd, onTouchEnd);
        }

        //Resize Event
        if (params.autoResize) {
            unbind(window, 'resize', _this.resizeFix);
        }

        //Init Slide Events
        removeSlideEvents();

        //Pagination
        if (params.paginationClickable) {
            removePaginationEvents();
        }

        //Mousewheel
        if (params.mousewheelControl && _this._wheelEvent) {
            unbind(_this.container, _this._wheelEvent, handleMousewheel);
        }

        //Keyboard
        if (params.keyboardControl) {
            unbind(document, 'keydown', handleKeyboardKeys);
        }

        //Stop autoplay
        if (params.autoplay) {
            _this.stopAutoplay();
        }
        _this.callPlugins('onDestroy');

        //Destroy variable
        _this = null;
    };

    function addSlideEvents() {
        var bind = _this.h.addEventListener,
            i;

        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                bind(links[i], 'click', preventClick);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                bind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                bind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
    }
    function removeSlideEvents() {
        var unbind = _this.h.removeEventListener,
            i;

        //Slide Clicks & Touches
        if (params.onSlideClick) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], 'click', slideClick);
            }
        }
        if (params.onSlideTouch) {
            for (i = 0; i < _this.slides.length; i++) {
                unbind(_this.slides[i], _this.touchEvents.touchStart, slideTouch);
            }
        }
        //Release Form Elements
        if (params.releaseFormElements) {
            var formElements = $$('input, textarea, select', _this.container);
            for (i = 0; i < formElements.length; i++) {
                unbind(formElements[i], _this.touchEvents.touchStart, releaseForms, true);
            }
        }
        //Prevent Links Events
        if (params.preventLinks) {
            var links = $$('a', _this.container);
            for (i = 0; i < links.length; i++) {
                unbind(links[i], 'click', preventClick);
            }
        }
    }
    /*==========================================
        Keyboard Control
    ============================================*/
    function handleKeyboardKeys(e) {
        var kc = e.keyCode || e.charCode;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
        if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
            var inView = false;
            //Check that swiper should be inside of visible area of window
            var swiperOffset = _this.h.getOffset(_this.container);
            var scrollLeft = _this.h.windowScroll().left;
            var scrollTop = _this.h.windowScroll().top;
            var windowWidth = _this.h.windowWidth();
            var windowHeight = _this.h.windowHeight();
            var swiperCoord = [
                [swiperOffset.left, swiperOffset.top],
                [swiperOffset.left + _this.width, swiperOffset.top],
                [swiperOffset.left, swiperOffset.top + _this.height],
                [swiperOffset.left + _this.width, swiperOffset.top + _this.height]
            ];
            for (var i = 0; i < swiperCoord.length; i++) {
                var point = swiperCoord[i];
                if (
                    point[0] >= scrollLeft && point[0] <= scrollLeft + windowWidth &&
                    point[1] >= scrollTop && point[1] <= scrollTop + windowHeight
                ) {
                    inView = true;
                }

            }
            if (!inView) return;
        }
        if (isH) {
            if (kc === 37 || kc === 39) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 39) _this.swipeNext();
            if (kc === 37) _this.swipePrev();
        }
        else {
            if (kc === 38 || kc === 40) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (kc === 40) _this.swipeNext();
            if (kc === 38) _this.swipePrev();
        }
    }

    _this.disableKeyboardControl = function () {
        params.keyboardControl = false;
        _this.h.removeEventListener(document, 'keydown', handleKeyboardKeys);
    };

    _this.enableKeyboardControl = function () {
        params.keyboardControl = true;
        _this.h.addEventListener(document, 'keydown', handleKeyboardKeys);
    };

    /*==========================================
        Mousewheel Control
    ============================================*/
    var lastScrollTime = (new Date()).getTime();
    function handleMousewheel(e) {
        var we = _this._wheelEvent;
        var delta = 0;

        //Opera & IE
        if (e.detail) delta = -e.detail;
        //WebKits
        else if (we === 'mousewheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
                    else return;
                }
            }
            else {
                delta = e.wheelDelta;
            }
        }
        //Old FireFox
        else if (we === 'DOMMouseScroll') delta = -e.detail;
        //New FireFox
        else if (we === 'wheel') {
            if (params.mousewheelControlForceToAxis) {
                if (isH) {
                    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX;
                    else return;
                }
                else {
                    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
                    else return;
                }
            }
            else {
                delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX : - e.deltaY;
            }
        }

        if (!params.freeMode) {
            if ((new Date()).getTime() - lastScrollTime > 60) {
                if (delta < 0) _this.swipeNext();
                else _this.swipePrev();
            }
            lastScrollTime = (new Date()).getTime();

        }
        else {
            //Freemode or scrollContainer:
            var position = _this.getWrapperTranslate() + delta;

            if (position > 0) position = 0;
            if (position < -maxWrapperPosition()) position = -maxWrapperPosition();

            _this.setWrapperTransition(0);
            _this.setWrapperTranslate(position);
            _this.updateActiveSlide(position);

            // Return page scroll on edge positions
            if (position === 0 || position === -maxWrapperPosition()) return;
        }
        if (params.autoplay) _this.stopAutoplay(true);

        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }

    /*=========================
      Grab Cursor
      ===========================*/
    if (params.grabCursor) {
        var containerStyle = _this.container.style;
        containerStyle.cursor = 'move';
        containerStyle.cursor = 'grab';
        containerStyle.cursor = '-moz-grab';
        containerStyle.cursor = '-webkit-grab';
    }

    /*=========================
      Slides Events Handlers
      ===========================*/

    _this.allowSlideClick = true;
    function slideClick(event) {
        if (_this.allowSlideClick) {
            setClickedSlide(event);
            _this.fireCallback(params.onSlideClick, _this, event);
        }
    }

    function slideTouch(event) {
        setClickedSlide(event);
        _this.fireCallback(params.onSlideTouch, _this, event);
    }

    function setClickedSlide(event) {

        // IE 6-8 support
        if (!event.currentTarget) {
            var element = event.srcElement;
            do {
                if (element.className.indexOf(params.slideClass) > -1) {
                    break;
                }
                element = element.parentNode;
            } while (element);
            _this.clickedSlide = element;
        }
        else {
            _this.clickedSlide = event.currentTarget;
        }

        _this.clickedSlideIndex     = _this.slides.indexOf(_this.clickedSlide);
        _this.clickedSlideLoopIndex = _this.clickedSlideIndex - (_this.loopedSlides || 0);
    }

    _this.allowLinks = true;
    function preventClick(e) {
        if (!_this.allowLinks) {
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            if (params.preventLinksPropagation && 'stopPropagation' in e) {
                e.stopPropagation();
            }
            return false;
        }
    }
    function releaseForms(e) {
        if (e.stopPropagation) e.stopPropagation();
        else e.returnValue = false;
        return false;

    }

    /*==================================================
        Event Handlers
    ====================================================*/
    var isTouchEvent = false;
    var allowThresholdMove;
    var allowMomentumBounce = true;
    function onTouchStart(event) {
        if (params.preventLinks) _this.allowLinks = true;
        //Exit if slider is already was touched
        if (_this.isTouched || params.onlyExternal) {
            return false;
        }

        if (params.noSwiping && (event.target || event.srcElement) && noSwipingSlide(event.target || event.srcElement)) return false;
        allowMomentumBounce = false;
        //Check For Nested Swipers
        _this.isTouched = true;
        isTouchEvent = event.type === 'touchstart';

        if (!isTouchEvent || event.targetTouches.length === 1) {
            _this.callPlugins('onTouchStartBegin');

            if (!isTouchEvent && !_this.isAndroid) {
                if (event.preventDefault) event.preventDefault();
                else event.returnValue = false;
            }

            var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
            var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

            //Start Touches to check the scrolling
            _this.touches.startX = _this.touches.currentX = pageX;
            _this.touches.startY = _this.touches.currentY = pageY;

            _this.touches.start = _this.touches.current = isH ? pageX : pageY;

            //Set Transition Time to 0
            _this.setWrapperTransition(0);

            //Get Start Translate Position
            _this.positions.start = _this.positions.current = _this.getWrapperTranslate();

            //Set Transform
            _this.setWrapperTranslate(_this.positions.start);

            //TouchStartTime
            _this.times.start = (new Date()).getTime();

            //Unset Scrolling
            isScrolling = undefined;

            //Set Treshold
            if (params.moveStartThreshold > 0) {
                allowThresholdMove = false;
            }

            //CallBack
            if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this);
            _this.callPlugins('onTouchStartEnd');

        }
    }
    var velocityPrevPosition, velocityPrevTime;
    function onTouchMove(event) {
        // If slider is not touched - exit
        if (!_this.isTouched || params.onlyExternal) return;
        if (isTouchEvent && event.type === 'mousemove') return;

        var pageX = isTouchEvent ? event.targetTouches[0].pageX : (event.pageX || event.clientX);
        var pageY = isTouchEvent ? event.targetTouches[0].pageY : (event.pageY || event.clientY);

        //check for scrolling
        if (typeof isScrolling === 'undefined' && isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) > Math.abs(pageX - _this.touches.startX));
        }
        if (typeof isScrolling === 'undefined' && !isH) {
            isScrolling = !!(isScrolling || Math.abs(pageY - _this.touches.startY) < Math.abs(pageX - _this.touches.startX));
        }
        if (isScrolling) {
            _this.isTouched = false;
            return;
        }

        //Check For Nested Swipers
        if (event.assignedToSwiper) {
            _this.isTouched = false;
            return;
        }
        event.assignedToSwiper = true;

        //Block inner links
        if (params.preventLinks) {
            _this.allowLinks = false;
        }
        if (params.onSlideClick) {
            _this.allowSlideClick = false;
        }

        //Stop AutoPlay if exist
        if (params.autoplay) {
            _this.stopAutoplay(true);
        }
        if (!isTouchEvent || event.touches.length === 1) {

            //Moved Flag
            if (!_this.isMoved) {
                _this.callPlugins('onTouchMoveStart');

                if (params.loop) {
                    _this.fixLoop();
                    _this.positions.start = _this.getWrapperTranslate();
                }
                if (params.onTouchMoveStart) _this.fireCallback(params.onTouchMoveStart, _this);
            }
            _this.isMoved = true;

            // cancel event
            if (event.preventDefault) event.preventDefault();
            else event.returnValue = false;

            _this.touches.current = isH ? pageX : pageY;

            _this.positions.current = (_this.touches.current - _this.touches.start) * params.touchRatio + _this.positions.start;

            //Resistance Callbacks
            if (_this.positions.current > 0 && params.onResistanceBefore) {
                _this.fireCallback(params.onResistanceBefore, _this, _this.positions.current);
            }
            if (_this.positions.current < -maxWrapperPosition() && params.onResistanceAfter) {
                _this.fireCallback(params.onResistanceAfter, _this, Math.abs(_this.positions.current + maxWrapperPosition()));
            }
            //Resistance
            if (params.resistance && params.resistance !== '100%') {
                var resistance;
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0) {
                    resistance = 1 - _this.positions.current / containerSize / 2;
                    if (resistance < 0.5)
                        _this.positions.current = (containerSize / 2);
                    else
                        _this.positions.current = _this.positions.current * resistance;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition()) {

                    var diff = (_this.touches.current - _this.touches.start) * params.touchRatio + (maxWrapperPosition() + _this.positions.start);
                    resistance = (containerSize + diff) / (containerSize);
                    var newPos = _this.positions.current - diff * (1 - resistance) / 2;
                    var stopPos = -maxWrapperPosition() - containerSize / 2;

                    if (newPos < stopPos || resistance <= 0)
                        _this.positions.current = stopPos;
                    else
                        _this.positions.current = newPos;
                }
            }
            if (params.resistance && params.resistance === '100%') {
                //Resistance for Negative-Back sliding
                if (_this.positions.current > 0 && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = 0;
                }
                //Resistance for After-End Sliding
                if (_this.positions.current < -maxWrapperPosition() && !(params.freeMode && !params.freeModeFluid)) {
                    _this.positions.current = -maxWrapperPosition();
                }
            }
            //Move Slides
            if (!params.followFinger) return;

            if (!params.moveStartThreshold) {
                _this.setWrapperTranslate(_this.positions.current);
            }
            else {
                if (Math.abs(_this.touches.current - _this.touches.start) > params.moveStartThreshold || allowThresholdMove) {
                    if (!allowThresholdMove) {
                        allowThresholdMove = true;
                        _this.touches.start = _this.touches.current;
                        return;
                    }
                    _this.setWrapperTranslate(_this.positions.current);
                }
                else {
                    _this.positions.current = _this.positions.start;
                }
            }

            if (params.freeMode || params.watchActiveIndex) {
                _this.updateActiveSlide(_this.positions.current);
            }

            //Grab Cursor
            if (params.grabCursor) {
                _this.container.style.cursor = 'move';
                _this.container.style.cursor = 'grabbing';
                _this.container.style.cursor = '-moz-grabbin';
                _this.container.style.cursor = '-webkit-grabbing';
            }
            //Velocity
            if (!velocityPrevPosition) velocityPrevPosition = _this.touches.current;
            if (!velocityPrevTime) velocityPrevTime = (new Date()).getTime();
            _this.velocity = (_this.touches.current - velocityPrevPosition) / ((new Date()).getTime() - velocityPrevTime) / 2;
            if (Math.abs(_this.touches.current - velocityPrevPosition) < 2) _this.velocity = 0;
            velocityPrevPosition = _this.touches.current;
            velocityPrevTime = (new Date()).getTime();
            //Callbacks
            _this.callPlugins('onTouchMoveEnd');
            if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this);

            return false;
        }
    }
    function onTouchEnd(event) {
        //Check For scrolling
        if (isScrolling) {
            _this.swipeReset();
        }
        // If slider is not touched exit
        if (params.onlyExternal || !_this.isTouched) return;
        _this.isTouched = false;

        //Return Grab Cursor
        if (params.grabCursor) {
            _this.container.style.cursor = 'move';
            _this.container.style.cursor = 'grab';
            _this.container.style.cursor = '-moz-grab';
            _this.container.style.cursor = '-webkit-grab';
        }

        //Check for Current Position
        if (!_this.positions.current && _this.positions.current !== 0) {
            _this.positions.current = _this.positions.start;
        }

        //For case if slider touched but not moved
        if (params.followFinger) {
            _this.setWrapperTranslate(_this.positions.current);
        }

        // TouchEndTime
        _this.times.end = (new Date()).getTime();

        //Difference
        _this.touches.diff = _this.touches.current - _this.touches.start;
        _this.touches.abs = Math.abs(_this.touches.diff);

        _this.positions.diff = _this.positions.current - _this.positions.start;
        _this.positions.abs = Math.abs(_this.positions.diff);

        var diff = _this.positions.diff;
        var diffAbs = _this.positions.abs;
        var timeDiff = _this.times.end - _this.times.start;

        if (diffAbs < 5 && (timeDiff) < 300 && _this.allowLinks === false) {
            if (!params.freeMode && diffAbs !== 0) _this.swipeReset();
            //Release inner links
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }

        setTimeout(function () {
            //Release inner links
            if (params.preventLinks) {
                _this.allowLinks = true;
            }
            if (params.onSlideClick) {
                _this.allowSlideClick = true;
            }
        }, 100);

        var maxPosition = maxWrapperPosition();

        //Not moved or Prevent Negative Back Sliding/After-End Sliding
        if (!_this.isMoved && params.freeMode) {
            _this.isMoved = false;
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }
        if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
            _this.swipeReset();
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }

        _this.isMoved = false;

        //Free Mode
        if (params.freeMode) {
            if (params.freeModeFluid) {
                var momentumDuration = 1000 * params.momentumRatio;
                var momentumDistance = _this.velocity * momentumDuration;
                var newPosition = _this.positions.current + momentumDistance;
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(_this.velocity) * 20 * params.momentumBounceRatio;
                if (newPosition < -maxPosition) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition + maxPosition < -bounceAmount) newPosition = -maxPosition - bounceAmount;
                        afterBouncePosition = -maxPosition;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = -maxPosition;
                }
                if (newPosition > 0) {
                    if (params.momentumBounce && _this.support.transitions) {
                        if (newPosition > bounceAmount) newPosition = bounceAmount;
                        afterBouncePosition = 0;
                        doBounce = true;
                        allowMomentumBounce = true;
                    }
                    else newPosition = 0;
                }
                //Fix duration
                if (_this.velocity !== 0) momentumDuration = Math.abs((newPosition - _this.positions.current) / _this.velocity);

                _this.setWrapperTranslate(newPosition);

                _this.setWrapperTransition(momentumDuration);

                if (params.momentumBounce && doBounce) {
                    _this.wrapperTransitionEnd(function () {
                        if (!allowMomentumBounce) return;
                        if (params.onMomentumBounce) _this.fireCallback(params.onMomentumBounce, _this);
                        _this.callPlugins('onMomentumBounce');

                        _this.setWrapperTranslate(afterBouncePosition);
                        _this.setWrapperTransition(300);
                    });
                }

                _this.updateActiveSlide(newPosition);
            }
            if (!params.freeModeFluid || timeDiff >= 300) _this.updateActiveSlide(_this.positions.current);

            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
            _this.callPlugins('onTouchEnd');
            return;
        }

        //Direction
        direction = diff < 0 ? 'toNext' : 'toPrev';

        //Short Touches
        if (direction === 'toNext' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipeNext(true);
        }

        if (direction === 'toPrev' && (timeDiff <= 300)) {
            if (diffAbs < 30 || !params.shortSwipes) _this.swipeReset();
            else _this.swipePrev(true);
        }

        //Long Touches
        var targetSlideSize = 0;
        if (params.slidesPerView === 'auto') {
            //Define current slide's width
            var currentPosition = Math.abs(_this.getWrapperTranslate());
            var slidesOffset = 0;
            var _slideSize;
            for (var i = 0; i < _this.slides.length; i++) {
                _slideSize = isH ? _this.slides[i].getWidth(true, params.roundLengths) : _this.slides[i].getHeight(true, params.roundLengths);
                slidesOffset += _slideSize;
                if (slidesOffset > currentPosition) {
                    targetSlideSize = _slideSize;
                    break;
                }
            }
            if (targetSlideSize > containerSize) targetSlideSize = containerSize;
        }
        else {
            targetSlideSize = slideSize * params.slidesPerView;
        }
        if (direction === 'toNext' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipeNext(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (direction === 'toPrev' && (timeDiff > 300)) {
            if (diffAbs >= targetSlideSize * params.longSwipesRatio) {
                _this.swipePrev(true);
            }
            else {
                _this.swipeReset();
            }
        }
        if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this);
        _this.callPlugins('onTouchEnd');
    }


    /*==================================================
        noSwiping Bubble Check by Isaac Strack
    ====================================================*/
    function noSwipingSlide(el) {
        /*This function is specifically designed to check the parent elements for the noSwiping class, up to the wrapper.
        We need to check parents because while onTouchStart bubbles, _this.isTouched is checked in onTouchStart, which stops the bubbling.
        So, if a text box, for example, is the initial target, and the parent slide container has the noSwiping class, the _this.isTouched
        check will never find it, and what was supposed to be noSwiping is able to be swiped.
        This function will iterate up and check for the noSwiping class in parents, up through the wrapperClass.*/

        // First we create a truthy variable, which is that swiping is allowd (noSwiping = false)
        var noSwiping = false;

        // Now we iterate up (parentElements) until we reach the node with the wrapperClass.
        do {

            // Each time, we check to see if there's a 'swiper-no-swiping' class (noSwipingClass).
            if (el.className.indexOf(params.noSwipingClass) > -1)
            {
                noSwiping = true; // If there is, we set noSwiping = true;
            }

            el = el.parentElement;  // now we iterate up (parent node)

        } while (!noSwiping && el.parentElement && el.className.indexOf(params.wrapperClass) === -1); // also include el.parentElement truthy, just in case.

        // because we didn't check the wrapper itself, we do so now, if noSwiping is false:
        if (!noSwiping && el.className.indexOf(params.wrapperClass) > -1 && el.className.indexOf(params.noSwipingClass) > -1)
            noSwiping = true; // if the wrapper has the noSwipingClass, we set noSwiping = true;

        return noSwiping;
    }

    function addClassToHtmlString(klass, outerHtml) {
        var par = document.createElement('div');
        var child;

        par.innerHTML = outerHtml;
        child = par.firstChild;
        child.className += ' ' + klass;

        return child.outerHTML;
    }


    /*==================================================
        Swipe Functions
    ====================================================*/
    _this.swipeNext = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipeNext');
        var currentPosition = _this.getWrapperTranslate();
        var newPosition = currentPosition;
        if (params.slidesPerView === 'auto') {
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i + 1];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.floor(Math.abs(currentPosition) / Math.floor(groupSize)) * groupSize + groupSize);
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'next');
        return true;
    };
    _this.swipePrev = function (internal) {
        if (!internal && params.loop) _this.fixLoop();
        if (!internal && params.autoplay) _this.stopAutoplay(true);
        _this.callPlugins('onSwipePrev');

        var currentPosition = Math.ceil(_this.getWrapperTranslate());
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 1; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) {
                    newPosition = -_this.snapGrid[i - 1];
                    break;
                }
                if (-currentPosition > _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    newPosition = -_this.snapGrid[i];
                    break;
                }
            }
        }
        else {
            var groupSize = slideSize * params.slidesPerGroup;
            newPosition = -(Math.ceil(-currentPosition / groupSize) - 1) * groupSize;
        }

        if (newPosition > 0) newPosition = 0;

        if (newPosition === currentPosition) return false;
        swipeToPosition(newPosition, 'prev');
        return true;

    };
    _this.swipeReset = function () {
        _this.callPlugins('onSwipeReset');
        var currentPosition = _this.getWrapperTranslate();
        var groupSize = slideSize * params.slidesPerGroup;
        var newPosition;
        var maxPosition = -maxWrapperPosition();
        if (params.slidesPerView === 'auto') {
            newPosition = 0;
            for (var i = 0; i < _this.snapGrid.length; i++) {
                if (-currentPosition === _this.snapGrid[i]) return;
                if (-currentPosition >= _this.snapGrid[i] && -currentPosition < _this.snapGrid[i + 1]) {
                    if (_this.positions.diff > 0) newPosition = -_this.snapGrid[i + 1];
                    else newPosition = -_this.snapGrid[i];
                    break;
                }
            }
            if (-currentPosition >= _this.snapGrid[_this.snapGrid.length - 1]) newPosition = -_this.snapGrid[_this.snapGrid.length - 1];
            if (currentPosition <= -maxWrapperPosition()) newPosition = -maxWrapperPosition();
        }
        else {
            newPosition = currentPosition < 0 ? Math.round(currentPosition / groupSize) * groupSize : 0;
        }
        if (params.scrollContainer)  {
            newPosition = currentPosition < 0 ? currentPosition : 0;
        }
        if (newPosition < -maxWrapperPosition()) {
            newPosition = -maxWrapperPosition();
        }
        if (params.scrollContainer && (containerSize > slideSize)) {
            newPosition = 0;
        }

        if (newPosition === currentPosition) return false;

        swipeToPosition(newPosition, 'reset');
        return true;
    };

    _this.swipeTo = function (index, speed, runCallbacks) {
        index = parseInt(index, 10);
        _this.callPlugins('onSwipeTo', {index: index, speed: speed});
        if (params.loop) index = index + _this.loopedSlides;
        var currentPosition = _this.getWrapperTranslate();
        if (index > (_this.slides.length - 1) || index < 0) return;
        var newPosition;
        if (params.slidesPerView === 'auto') {
            newPosition = -_this.slidesGrid[index];
        }
        else {
            newPosition = -index * slideSize;
        }
        if (newPosition < - maxWrapperPosition()) {
            newPosition = - maxWrapperPosition();
        }

        if (newPosition === currentPosition) return false;

        runCallbacks = runCallbacks === false ? false : true;
        swipeToPosition(newPosition, 'to', {index: index, speed: speed, runCallbacks: runCallbacks});
        return true;
    };

    function swipeToPosition(newPosition, action, toOptions) {
        var speed = (action === 'to' && toOptions.speed >= 0) ? toOptions.speed : params.speed;
        var timeOld = + new Date();

        function anim() {
            var timeNew = + new Date();
            var time = timeNew - timeOld;
            currentPosition += animationStep * time / (1000 / 60);
            condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (condition) {
                _this.setWrapperTranslate(Math.round(currentPosition));
                _this._DOMAnimating = true;
                window.setTimeout(function () {
                    anim();
                }, 1000 / 60);
            }
            else {
                if (params.onSlideChangeEnd) {
                    if (action === 'to') {
                        if (toOptions.runCallbacks === true) _this.fireCallback(params.onSlideChangeEnd, _this);
                    }
                    else {
                        _this.fireCallback(params.onSlideChangeEnd, _this);
                    }
                    
                }
                _this.setWrapperTranslate(newPosition);
                _this._DOMAnimating = false;
            }
        }

        if (_this.support.transitions || !params.DOMAnimation) {
            _this.setWrapperTranslate(newPosition);
            _this.setWrapperTransition(speed);
        }
        else {
            //Try the DOM animation
            var currentPosition = _this.getWrapperTranslate();
            var animationStep = Math.ceil((newPosition - currentPosition) / speed * (1000 / 60));
            var direction = currentPosition > newPosition ? 'toNext' : 'toPrev';
            var condition = direction === 'toNext' ? currentPosition > newPosition : currentPosition < newPosition;
            if (_this._DOMAnimating) return;

            anim();
        }

        //Update Active Slide Index
        _this.updateActiveSlide(newPosition);

        //Callbacks
        if (params.onSlideNext && action === 'next') {
            _this.fireCallback(params.onSlideNext, _this, newPosition);
        }
        if (params.onSlidePrev && action === 'prev') {
            _this.fireCallback(params.onSlidePrev, _this, newPosition);
        }
        //'Reset' Callback
        if (params.onSlideReset && action === 'reset') {
            _this.fireCallback(params.onSlideReset, _this, newPosition);
        }

        //'Next', 'Prev' and 'To' Callbacks
        if (action === 'next' || action === 'prev' || (action === 'to' && toOptions.runCallbacks === true))
            slideChangeCallbacks(action);
    }
    /*==================================================
        Transition Callbacks
    ====================================================*/
    //Prevent Multiple Callbacks
    _this._queueStartCallbacks = false;
    _this._queueEndCallbacks = false;
    function slideChangeCallbacks(direction) {
        //Transition Start Callback
        _this.callPlugins('onSlideChangeStart');
        if (params.onSlideChangeStart) {
            if (params.queueStartCallbacks && _this.support.transitions) {
                if (_this._queueStartCallbacks) return;
                _this._queueStartCallbacks = true;
                _this.fireCallback(params.onSlideChangeStart, _this, direction);
                _this.wrapperTransitionEnd(function () {
                    _this._queueStartCallbacks = false;
                });
            }
            else _this.fireCallback(params.onSlideChangeStart, _this, direction);
        }
        //Transition End Callback
        if (params.onSlideChangeEnd) {
            if (_this.support.transitions) {
                if (params.queueEndCallbacks) {
                    if (_this._queueEndCallbacks) return;
                    _this._queueEndCallbacks = true;
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
                else {
                    _this.wrapperTransitionEnd(function (swiper) {
                        _this.fireCallback(params.onSlideChangeEnd, swiper, direction);
                    });
                }
            }
            else {
                if (!params.DOMAnimation) {
                    setTimeout(function () {
                        _this.fireCallback(params.onSlideChangeEnd, _this, direction);
                    }, 10);
                }
            }
        }
    }

    /*==================================================
        Update Active Slide Index
    ====================================================*/
    _this.updateActiveSlide = function (position) {
        if (!_this.initialized) return;
        if (_this.slides.length === 0) return;
        _this.previousIndex = _this.activeIndex;
        if (typeof position === 'undefined') position = _this.getWrapperTranslate();
        if (position > 0) position = 0;
        var i;
        if (params.slidesPerView === 'auto') {
            var slidesOffset = 0;
            _this.activeIndex = _this.slidesGrid.indexOf(-position);
            if (_this.activeIndex < 0) {
                for (i = 0; i < _this.slidesGrid.length - 1; i++) {
                    if (-position > _this.slidesGrid[i] && -position < _this.slidesGrid[i + 1]) {
                        break;
                    }
                }
                var leftDistance = Math.abs(_this.slidesGrid[i] + position);
                var rightDistance = Math.abs(_this.slidesGrid[i + 1] + position);
                if (leftDistance <= rightDistance) _this.activeIndex = i;
                else _this.activeIndex = i + 1;
            }
        }
        else {
            _this.activeIndex = Math[params.visibilityFullFit ? 'ceil' : 'round'](-position / slideSize);
        }

        if (_this.activeIndex === _this.slides.length) _this.activeIndex = _this.slides.length - 1;
        if (_this.activeIndex < 0) _this.activeIndex = 0;

        // Check for slide
        if (!_this.slides[_this.activeIndex]) return;

        // Calc Visible slides
        _this.calcVisibleSlides(position);

        // Mark visible and active slides with additonal classes
        if (_this.support.classList) {
            var slide;
            for (i = 0; i < _this.slides.length; i++) {
                slide = _this.slides[i];
                slide.classList.remove(params.slideActiveClass);
                if (_this.visibleSlides.indexOf(slide) >= 0) {
                    slide.classList.add(params.slideVisibleClass);
                } else {
                    slide.classList.remove(params.slideVisibleClass);
                }
            }
            _this.slides[_this.activeIndex].classList.add(params.slideActiveClass);
        } else {
            var activeClassRegexp = new RegExp('\\s*' + params.slideActiveClass);
            var inViewClassRegexp = new RegExp('\\s*' + params.slideVisibleClass);

            for (i = 0; i < _this.slides.length; i++) {
                _this.slides[i].className = _this.slides[i].className.replace(activeClassRegexp, '').replace(inViewClassRegexp, '');
                if (_this.visibleSlides.indexOf(_this.slides[i]) >= 0) {
                    _this.slides[i].className += ' ' + params.slideVisibleClass;
                }
            }
            _this.slides[_this.activeIndex].className += ' ' + params.slideActiveClass;
        }

        //Update loop index
        if (params.loop) {
            var ls = _this.loopedSlides;
            _this.activeLoopIndex = _this.activeIndex - ls;
            if (_this.activeLoopIndex >= _this.slides.length - ls * 2) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 - _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) {
                _this.activeLoopIndex = _this.slides.length - ls * 2 + _this.activeLoopIndex;
            }
            if (_this.activeLoopIndex < 0) _this.activeLoopIndex = 0;
        }
        else {
            _this.activeLoopIndex = _this.activeIndex;
        }
        //Update Pagination
        if (params.pagination) {
            _this.updatePagination(position);
        }
    };
    /*==================================================
        Pagination
    ====================================================*/
    _this.createPagination = function (firstInit) {
        if (params.paginationClickable && _this.paginationButtons) {
            removePaginationEvents();
        }
        _this.paginationContainer = params.pagination.nodeType ? params.pagination : $$(params.pagination)[0];
        if (params.createPagination) {
            var paginationHTML = '';
            var numOfSlides = _this.slides.length;
            var numOfButtons = numOfSlides;
            if (params.loop) numOfButtons -= _this.loopedSlides * 2;
            for (var i = 0; i < numOfButtons; i++) {
                paginationHTML += '<' + params.paginationElement + ' class="' + params.paginationElementClass + '"></' + params.paginationElement + '>';
            }
            _this.paginationContainer.innerHTML = paginationHTML;
        }
        _this.paginationButtons = $$('.' + params.paginationElementClass, _this.paginationContainer);
        if (!firstInit) _this.updatePagination();
        _this.callPlugins('onCreatePagination');
        if (params.paginationClickable) {
            addPaginationEvents();
        }
    };
    function removePaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.removeEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function addPaginationEvents() {
        var pagers = _this.paginationButtons;
        if (pagers) {
            for (var i = 0; i < pagers.length; i++) {
                _this.h.addEventListener(pagers[i], 'click', paginationClick);
            }
        }
    }
    function paginationClick(e) {
        var index;
        var target = e.target || e.srcElement;
        var pagers = _this.paginationButtons;
        for (var i = 0; i < pagers.length; i++) {
            if (target === pagers[i]) index = i;
        }
        _this.swipeTo(index);
    }
    _this.updatePagination = function (position) {
        if (!params.pagination) return;
        if (_this.slides.length < 1) return;
        var activePagers = $$('.' + params.paginationActiveClass, _this.paginationContainer);
        if (!activePagers) return;

        //Reset all Buttons' class to not active
        var pagers = _this.paginationButtons;
        if (pagers.length === 0) return;
        for (var i = 0; i < pagers.length; i++) {
            pagers[i].className = params.paginationElementClass;
        }

        var indexOffset = params.loop ? _this.loopedSlides : 0;
        if (params.paginationAsRange) {
            if (!_this.visibleSlides) _this.calcVisibleSlides(position);
            //Get Visible Indexes
            var visibleIndexes = [];
            var j; // lopp index - avoid JSHint W004 / W038
            for (j = 0; j < _this.visibleSlides.length; j++) {
                var visIndex = _this.slides.indexOf(_this.visibleSlides[j]) - indexOffset;

                if (params.loop && visIndex < 0) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 + visIndex;
                }
                if (params.loop && visIndex >= _this.slides.length - _this.loopedSlides * 2) {
                    visIndex = _this.slides.length - _this.loopedSlides * 2 - visIndex;
                    visIndex = Math.abs(visIndex);
                }
                visibleIndexes.push(visIndex);
            }

            for (j = 0; j < visibleIndexes.length; j++) {
                if (pagers[visibleIndexes[j]]) pagers[visibleIndexes[j]].className += ' ' + params.paginationVisibleClass;
            }

            if (params.loop) {
                if (pagers[_this.activeLoopIndex] !== undefined) {
                    pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass;
                }
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass;
            }
        }
        else {
            if (params.loop) {
                if (pagers[_this.activeLoopIndex]) pagers[_this.activeLoopIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
            else {
                pagers[_this.activeIndex].className += ' ' + params.paginationActiveClass + ' ' + params.paginationVisibleClass;
            }
        }
    };
    _this.calcVisibleSlides = function (position) {
        var visibleSlides = [];
        var _slideLeft = 0, _slideSize = 0, _slideRight = 0;
        if (isH && _this.wrapperLeft > 0) position = position + _this.wrapperLeft;
        if (!isH && _this.wrapperTop > 0) position = position + _this.wrapperTop;

        for (var i = 0; i < _this.slides.length; i++) {
            _slideLeft += _slideSize;
            if (params.slidesPerView === 'auto')
                _slideSize  = isH ? _this.h.getWidth(_this.slides[i], true, params.roundLengths) : _this.h.getHeight(_this.slides[i], true, params.roundLengths);
            else _slideSize = slideSize;

            _slideRight = _slideLeft + _slideSize;
            var isVisibile = false;
            if (params.visibilityFullFit) {
                if (_slideLeft >= -position && _slideRight <= -position + containerSize) isVisibile = true;
                if (_slideLeft <= -position && _slideRight >= -position + containerSize) isVisibile = true;
            }
            else {
                if (_slideRight > -position && _slideRight <= ((-position + containerSize))) isVisibile = true;
                if (_slideLeft >= -position && _slideLeft < ((-position + containerSize))) isVisibile = true;
                if (_slideLeft < -position && _slideRight > ((-position + containerSize))) isVisibile = true;
            }

            if (isVisibile) visibleSlides.push(_this.slides[i]);

        }
        if (visibleSlides.length === 0) visibleSlides = [_this.slides[_this.activeIndex]];

        _this.visibleSlides = visibleSlides;
    };

    /*==========================================
        Autoplay
    ============================================*/
    var autoplayTimeoutId, autoplayIntervalId;
    _this.startAutoplay = function () {
        if (_this.support.transitions) {
            if (typeof autoplayTimeoutId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplay();
        }
        else {
            if (typeof autoplayIntervalId !== 'undefined') return false;
            if (!params.autoplay) return;
            _this.callPlugins('onAutoplayStart');
            if (params.onAutoplayStart) _this.fireCallback(params.onAutoplayStart, _this);
            autoplayIntervalId = setInterval(function () {
                if (params.loop) {
                    _this.fixLoop();
                    _this.swipeNext(true);
                }
                else if (!_this.swipeNext(true)) {
                    if (!params.autoplayStopOnLast) _this.swipeTo(0);
                    else {
                        clearInterval(autoplayIntervalId);
                        autoplayIntervalId = undefined;
                    }
                }
            }, params.autoplay);
        }
    };
    _this.stopAutoplay = function (internal) {
        if (_this.support.transitions) {
            if (!autoplayTimeoutId) return;
            if (autoplayTimeoutId) clearTimeout(autoplayTimeoutId);
            autoplayTimeoutId = undefined;
            if (internal && !params.autoplayDisableOnInteraction) {
                _this.wrapperTransitionEnd(function () {
                    autoplay();
                });
            }
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
        else {
            if (autoplayIntervalId) clearInterval(autoplayIntervalId);
            autoplayIntervalId = undefined;
            _this.callPlugins('onAutoplayStop');
            if (params.onAutoplayStop) _this.fireCallback(params.onAutoplayStop, _this);
        }
    };
    function autoplay() {
        autoplayTimeoutId = setTimeout(function () {
            if (params.loop) {
                _this.fixLoop();
                _this.swipeNext(true);
            }
            else if (!_this.swipeNext(true)) {
                if (!params.autoplayStopOnLast) _this.swipeTo(0);
                else {
                    clearTimeout(autoplayTimeoutId);
                    autoplayTimeoutId = undefined;
                }
            }
            _this.wrapperTransitionEnd(function () {
                if (typeof autoplayTimeoutId !== 'undefined') autoplay();
            });
        }, params.autoplay);
    }
    /*==================================================
        Loop
    ====================================================*/
    _this.loopCreated = false;
    _this.removeLoopedSlides = function () {
        if (_this.loopCreated) {
            for (var i = 0; i < _this.slides.length; i++) {
                if (_this.slides[i].getData('looped') === true) _this.wrapper.removeChild(_this.slides[i]);
            }
        }
    };

    _this.createLoop = function () {
        if (_this.slides.length === 0) return;
        if (params.slidesPerView === 'auto') {
            _this.loopedSlides = params.loopedSlides || 1;
        }
        else {
            _this.loopedSlides = params.slidesPerView + params.loopAdditionalSlides;
        }

        if (_this.loopedSlides > _this.slides.length) {
            _this.loopedSlides = _this.slides.length;
        }

        var slideFirstHTML = '',
            slideLastHTML = '',
            i;
        var slidesSetFullHTML = '';
        /**
                loopedSlides is too large if loopAdditionalSlides are set.
                Need to divide the slides by maximum number of slides existing.

                @author        Tomaz Lovrec <tomaz.lovrec@blanc-noir.at>
        */
        var numSlides = _this.slides.length;
        var fullSlideSets = Math.floor(_this.loopedSlides / numSlides);
        var remainderSlides = _this.loopedSlides % numSlides;
        // assemble full sets of slides
        for (i = 0; i < (fullSlideSets * numSlides); i++) {
            var j = i;
            if (i >= numSlides) {
                var over = Math.floor(i / numSlides);
                j = i - (numSlides * over);
            }
            slidesSetFullHTML += _this.slides[j].outerHTML;
        }
        // assemble remainder slides
        // assemble remainder appended to existing slides
        for (i = 0; i < remainderSlides;i++) {
            slideLastHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble slides that get preppended to existing slides
        for (i = numSlides - remainderSlides; i < numSlides;i++) {
            slideFirstHTML += addClassToHtmlString(params.slideDuplicateClass, _this.slides[i].outerHTML);
        }
        // assemble all slides
        var slides = slideFirstHTML + slidesSetFullHTML + wrapper.innerHTML + slidesSetFullHTML + slideLastHTML;
        // set the slides
        wrapper.innerHTML = slides;

        _this.loopCreated = true;
        _this.calcSlides();

        //Update Looped Slides with special class
        for (i = 0; i < _this.slides.length; i++) {
            if (i < _this.loopedSlides || i >= _this.slides.length - _this.loopedSlides) _this.slides[i].setData('looped', true);
        }
        _this.callPlugins('onCreateLoop');

    };

    _this.fixLoop = function () {
        var newIndex;
        //Fix For Negative Oversliding
        if (_this.activeIndex < _this.loopedSlides) {
            newIndex = _this.slides.length - _this.loopedSlides * 3 + _this.activeIndex;
            _this.swipeTo(newIndex, 0, false);
        }
        //Fix For Positive Oversliding
        else if ((params.slidesPerView === 'auto' && _this.activeIndex >= _this.loopedSlides * 2) || (_this.activeIndex > _this.slides.length - params.slidesPerView * 2)) {
            newIndex = -_this.slides.length + _this.activeIndex + _this.loopedSlides;
            _this.swipeTo(newIndex, 0, false);
        }
    };

    /*==================================================
        Slides Loader
    ====================================================*/
    _this.loadSlides = function () {
        var slidesHTML = '';
        _this.activeLoaderIndex = 0;
        var slides = params.loader.slides;
        var slidesToLoad = params.loader.loadAllSlides ? slides.length : params.slidesPerView * (1 + params.loader.surroundGroups);
        for (var i = 0; i < slidesToLoad; i++) {
            if (params.loader.slidesHTMLType === 'outer') slidesHTML += slides[i];
            else {
                slidesHTML += '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
        }
        _this.wrapper.innerHTML = slidesHTML;
        _this.calcSlides(true);
        //Add permanent transitionEnd callback
        if (!params.loader.loadAllSlides) {
            _this.wrapperTransitionEnd(_this.reloadSlides, true);
        }
    };

    _this.reloadSlides = function () {
        var slides = params.loader.slides;
        var newActiveIndex = parseInt(_this.activeSlide().data('swiperindex'), 10);
        if (newActiveIndex < 0 || newActiveIndex > slides.length - 1) return; //<-- Exit
        _this.activeLoaderIndex = newActiveIndex;
        var firstIndex = Math.max(0, newActiveIndex - params.slidesPerView * params.loader.surroundGroups);
        var lastIndex = Math.min(newActiveIndex + params.slidesPerView * (1 + params.loader.surroundGroups) - 1, slides.length - 1);
        //Update Transforms
        if (newActiveIndex > 0) {
            var newTransform = -slideSize * (newActiveIndex - firstIndex);
            _this.setWrapperTranslate(newTransform);
            _this.setWrapperTransition(0);
        }
        var i; // loop index
        //New Slides
        if (params.loader.logic === 'reload') {
            _this.wrapper.innerHTML = '';
            var slidesHTML = '';
            for (i = firstIndex; i <= lastIndex; i++) {
                slidesHTML += params.loader.slidesHTMLType === 'outer' ? slides[i] : '<' + params.slideElement + ' class="' + params.slideClass + '" data-swiperindex="' + i + '">' + slides[i] + '</' + params.slideElement + '>';
            }
            _this.wrapper.innerHTML = slidesHTML;
        }
        else {
            var minExistIndex = 1000;
            var maxExistIndex = 0;

            for (i = 0; i < _this.slides.length; i++) {
                var index = _this.slides[i].data('swiperindex');
                if (index < firstIndex || index > lastIndex) {
                    _this.wrapper.removeChild(_this.slides[i]);
                }
                else {
                    minExistIndex = Math.min(index, minExistIndex);
                    maxExistIndex = Math.max(index, maxExistIndex);
                }
            }
            for (i = firstIndex; i <= lastIndex; i++) {
                var newSlide;
                if (i < minExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.insertBefore(newSlide, _this.wrapper.firstChild);
                }
                if (i > maxExistIndex) {
                    newSlide = document.createElement(params.slideElement);
                    newSlide.className = params.slideClass;
                    newSlide.setAttribute('data-swiperindex', i);
                    newSlide.innerHTML = slides[i];
                    _this.wrapper.appendChild(newSlide);
                }
            }
        }
        //reInit
        _this.reInit(true);
    };

    /*==================================================
        Make Swiper
    ====================================================*/
    function makeSwiper() {
        _this.calcSlides();
        if (params.loader.slides.length > 0 && _this.slides.length === 0) {
            _this.loadSlides();
        }
        if (params.loop) {
            _this.createLoop();
        }
        _this.init();
        initEvents();
        if (params.pagination) {
            _this.createPagination(true);
        }

        if (params.loop || params.initialSlide > 0) {
            _this.swipeTo(params.initialSlide, 0, false);
        }
        else {
            _this.updateActiveSlide(0);
        }
        if (params.autoplay) {
            _this.startAutoplay();
        }
        /**
         * Set center slide index.
         *
         * @author        Tomaz Lovrec <tomaz.lovrec@gmail.com>
         */
        _this.centerIndex = _this.activeIndex;

        // Callbacks
        if (params.onSwiperCreated) _this.fireCallback(params.onSwiperCreated, _this);
        _this.callPlugins('onSwiperCreated');
    }

    makeSwiper();
};

Swiper.prototype = {
    plugins : {},

    /*==================================================
        Wrapper Operations
    ====================================================*/
    wrapperTransitionEnd : function (callback, permanent) {
        'use strict';
        var a = this,
            el = a.wrapper,
            events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i;

        function fireCallBack() {
            callback(a);
            if (a.params.queueEndCallbacks) a._queueEndCallbacks = false;
            if (!permanent) {
                for (i = 0; i < events.length; i++) {
                    a.h.removeEventListener(el, events[i], fireCallBack);
                }
            }
        }

        if (callback) {
            for (i = 0; i < events.length; i++) {
                a.h.addEventListener(el, events[i], fireCallBack);
            }
        }
    },

    getWrapperTranslate : function (axis) {
        'use strict';
        var el = this.wrapper,
            matrix, curTransform, curStyle, transformMatrix;

        // automatic axis detection
        if (typeof axis === 'undefined') {
            axis = this.params.mode === 'horizontal' ? 'x' : 'y';
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform);
            }
            else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m41;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[12]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                //Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix)
                    curTransform = transformMatrix.m42;
                //Crazy IE10 Matrix
                else if (matrix.length === 16)
                    curTransform = parseFloat(matrix[13]);
                //Normal Browsers
                else
                    curTransform = parseFloat(matrix[5]);
            }
        }
        else {
            if (axis === 'x') curTransform = parseFloat(el.style.left, 10) || 0;
            if (axis === 'y') curTransform = parseFloat(el.style.top, 10) || 0;
        }
        return curTransform || 0;
    },

    setWrapperTranslate : function (x, y, z) {
        'use strict';
        var es = this.wrapper.style,
            coords = {x: 0, y: 0, z: 0},
            translate;

        // passed all coordinates
        if (arguments.length === 3) {
            coords.x = x;
            coords.y = y;
            coords.z = z;
        }

        // passed one coordinate and optional axis
        else {
            if (typeof y === 'undefined') {
                y = this.params.mode === 'horizontal' ? 'x' : 'y';
            }
            coords[y] = x;
        }

        if (this.support.transforms && this.params.useCSS3Transforms) {
            translate = this.support.transforms3d ? 'translate3d(' + coords.x + 'px, ' + coords.y + 'px, ' + coords.z + 'px)' : 'translate(' + coords.x + 'px, ' + coords.y + 'px)';
            es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = translate;
        }
        else {
            es.left = coords.x + 'px';
            es.top  = coords.y + 'px';
        }
        this.callPlugins('onSetWrapperTransform', coords);
        if (this.params.onSetWrapperTransform) this.fireCallback(this.params.onSetWrapperTransform, this, coords);
    },

    setWrapperTransition : function (duration) {
        'use strict';
        var es = this.wrapper.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = (duration / 1000) + 's';
        this.callPlugins('onSetWrapperTransition', {duration: duration});
        if (this.params.onSetWrapperTransition) this.fireCallback(this.params.onSetWrapperTransition, this, duration);

    },

    /*==================================================
        Helpers
    ====================================================*/
    h : {
        getWidth: function (el, outer, round) {
            'use strict';
            var width = window.getComputedStyle(el, null).getPropertyValue('width');
            var returnWidth = parseFloat(width);
            //IE Fixes
            if (isNaN(returnWidth) || width.indexOf('%') > 0) {
                returnWidth = el.offsetWidth - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            }
            if (outer) returnWidth += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-right'));
            if (round) return Math.round(returnWidth);
            else return returnWidth;
        },
        getHeight: function (el, outer, round) {
            'use strict';
            if (outer) return el.offsetHeight;

            var height = window.getComputedStyle(el, null).getPropertyValue('height');
            var returnHeight = parseFloat(height);
            //IE Fixes
            if (isNaN(returnHeight) || height.indexOf('%') > 0) {
                returnHeight = el.offsetHeight - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) - parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            }
            if (outer) returnHeight += parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue('padding-bottom'));
            if (round) return Math.round(returnHeight);
            else return returnHeight;
        },
        getOffset: function (el) {
            'use strict';
            var box = el.getBoundingClientRect();
            var body = document.body;
            var clientTop  = el.clientTop  || body.clientTop  || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop  = window.pageYOffset || el.scrollTop;
            var scrollLeft = window.pageXOffset || el.scrollLeft;
            if (document.documentElement && !window.pageYOffset) {
                //IE7-8
                scrollTop  = document.documentElement.scrollTop;
                scrollLeft = document.documentElement.scrollLeft;
            }
            return {
                top: box.top  + scrollTop  - clientTop,
                left: box.left + scrollLeft - clientLeft
            };
        },
        windowWidth : function () {
            'use strict';
            if (window.innerWidth) return window.innerWidth;
            else if (document.documentElement && document.documentElement.clientWidth) return document.documentElement.clientWidth;
        },
        windowHeight : function () {
            'use strict';
            if (window.innerHeight) return window.innerHeight;
            else if (document.documentElement && document.documentElement.clientHeight) return document.documentElement.clientHeight;
        },
        windowScroll : function () {
            'use strict';
            if (typeof pageYOffset !== 'undefined') {
                return {
                    left: window.pageXOffset,
                    top: window.pageYOffset
                };
            }
            else if (document.documentElement) {
                return {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                };
            }
        },

        addEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.addEventListener) {
                el.addEventListener(event, listener, useCapture);
            }
            else if (el.attachEvent) {
                el.attachEvent('on' + event, listener);
            }
        },

        removeEventListener : function (el, event, listener, useCapture) {
            'use strict';
            if (typeof useCapture === 'undefined') {
                useCapture = false;
            }

            if (el.removeEventListener) {
                el.removeEventListener(event, listener, useCapture);
            }
            else if (el.detachEvent) {
                el.detachEvent('on' + event, listener);
            }
        }
    },
    setTransform : function (el, transform) {
        'use strict';
        var es = el.style;
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transform;
    },
    setTranslate : function (el, translate) {
        'use strict';
        var es = el.style;
        var pos = {
            x : translate.x || 0,
            y : translate.y || 0,
            z : translate.z || 0
        };
        var transformString = this.support.transforms3d ? 'translate3d(' + (pos.x) + 'px,' + (pos.y) + 'px,' + (pos.z) + 'px)' : 'translate(' + (pos.x) + 'px,' + (pos.y) + 'px)';
        es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = transformString;
        if (!this.support.transforms) {
            es.left = pos.x + 'px';
            es.top = pos.y + 'px';
        }
    },
    setTransition : function (el, duration) {
        'use strict';
        var es = el.style;
        es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = duration + 'ms';
    },
    /*==================================================
        Feature Detection
    ====================================================*/
    support: {

        touch : (window.Modernizr && Modernizr.touch === true) || (function () {
            'use strict';
            return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
        })(),

        transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
        })(),

        transforms : (window.Modernizr && Modernizr.csstransforms === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transform' in div || 'WebkitTransform' in div || 'MozTransform' in div || 'msTransform' in div || 'MsTransform' in div || 'OTransform' in div);
        })(),

        transitions : (window.Modernizr && Modernizr.csstransitions === true) || (function () {
            'use strict';
            var div = document.createElement('div').style;
            return ('transition' in div || 'WebkitTransition' in div || 'MozTransition' in div || 'msTransition' in div || 'MsTransition' in div || 'OTransition' in div);
        })(),

        classList : (function () {
            'use strict';
            var div = document.createElement('div').style;
            return 'classList' in div;
        })()
    },

    browser : {

        ie8 : (function () {
            'use strict';
            var rv = -1; // Return value assumes failure.
            if (navigator.appName === 'Microsoft Internet Explorer') {
                var ua = navigator.userAgent;
                var re = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);
                if (re.exec(ua) !== null)
                    rv = parseFloat(RegExp.$1);
            }
            return rv !== -1 && rv < 9;
        })(),

        ie10 : window.navigator.msPointerEnabled,
        ie11 : window.navigator.pointerEnabled
    }
};

/*=========================
  jQuery & Zepto Plugins
  ===========================*/
if (window.jQuery || window.Zepto) {
    (function ($) {
        'use strict';
        $.fn.swiper = function (params) {
            var s = new Swiper($(this)[0], params);
            $(this).data('swiper', s);
            return s;
        };
    })(window.jQuery || window.Zepto);
}

// component
if (typeof(module) !== 'undefined')
{
    module.exports = Swiper;
}

// requirejs support
if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return Swiper;
    });
}

},{}],3:[function(require,module,exports){
app.directive('miaVideo', function($sce, $window) {
  return {
    template: '<iframe ng-src="{{embedUrl}}" height="{{height}}" webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder="0"></iframe>',
    restrict: 'EA',
    replace: true,
    scope: { videoId: '@' },
    link: function postLink($scope, element, attrs) {
      $scope.embedUrl = $sce.trustAsResourceUrl("//player.vimeo.com/video/"+$scope.videoId+"?portrait=0&title=0&byline=0")

      $scope.getWidth = function() {
        return parseInt(element[0].clientWidth) * (9/16)
      };

      $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        $scope.height = Math.min(document.body.clientHeight, newValue);
      });

      var _apply = function(e) {
        $scope.$apply()
      }
      $window.addEventListener('resize', _apply)
      $window.addEventListener('onorientationchange', _apply)

      element[0].addEventListener('load', function(e) {
        $scope.$parent.video.loaded = true
        $scope.$parent.$apply()
      })
    }
  }
})


},{}],4:[function(require,module,exports){
app.filter('unsafe', function($sce) {
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})


},{}],5:[function(require,module,exports){
var Swiper = require("./../bower_components/swiper/dist/idangerous.swiper.js")
window.Swiper = Swiper

app.directive('swiper', function($timeout, $rootScope) {
  return {
    restrict: 'A',
    link: function postLink($scope, element, attrs) {
      $scope.swiper = new Swiper(element[0], {
        updateOnImagesReady: true
        , keyboardControl: true
        , roundLengths: true
        , speed: 600
        , calculateHeight: true
      })
      $timeout(function() { $scope.swiper.reInit() }, 0)

      // Replace video thumbnails with <iframe> video players on slide change
      var replaceWithVimeo = function(swiper, direction) {
        var scope = angular.element(swiper.activeSlide()).scope()
        if(scope.video) scope.video.active = true
        if(scope.$$nextSibling && scope.$$nextSibling.video) scope.$$nextSibling.video.active = true
        scope.$apply()
      }
      $scope.swiper.addCallback('Init', replaceWithVimeo)
      $scope.swiper.addCallback('SlideChangeEnd', replaceWithVimeo)

      $scope.restart = function() {
        $timeout( function() {
         $scope.swiper.swipeTo(0, 300, true)
        });
      }
    }
  }
})

},{"./../bower_components/swiper/dist/idangerous.swiper.js":2}],6:[function(require,module,exports){
require('./lib/angular.min.js');

module.exports = angular;

},{"./lib/angular.min.js":7}],7:[function(require,module,exports){
/*
 AngularJS v1.2.10
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Z,Q,r){'use strict';function F(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.10/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function rb(b){if(null==b||Aa(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:D(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(L(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(rb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Pb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Pc(b,
a,c){for(var d=Pb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Qb(b){return function(a,c){b(c,a)}}function $a(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Rb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Rb(b,a);return b}function S(b){return parseInt(b,
10)}function Sb(b,a){return t(new (t(function(){},{prototype:b})),a)}function w(){}function Ba(b){return b}function $(b){return function(){return b}}function z(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function D(b){return"string"===typeof b}function sb(b){return"number"===typeof b}function La(b){return"[object Date]"===Ma.call(b)}function K(b){return"[object Array]"===Ma.call(b)}function L(b){return"function"===typeof b}
function ab(b){return"[object RegExp]"===Ma.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Qc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Rc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function bb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Na(b,a){var c=bb(b,a);0<=c&&b.splice(c,1);return a}function aa(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");if(a){if(b===
a)throw Oa("cpi");if(K(b))for(var c=a.length=0;c<b.length;c++)a.push(aa(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=aa(b[d]);Rb(a,c)}}else(a=b)&&(K(b)?a=aa(b,[]):La(b)?a=new Date(b.getTime()):ab(b)?a=RegExp(b.source):X(b)&&(a=aa(b,{})));return a}function Tb(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&("$"!==c.charAt(0)&&"$"!==c.charAt(1))&&(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,
d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(La(b))return La(a)&&b.getTime()==a.getTime();if(ab(b)&&ab(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!L(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!L(a[d]))return!1;return!0}return!1}
function Ub(){return Q.securityPolicy&&Q.securityPolicy.isActive||Q.querySelector&&!(!Q.querySelector("[ng-csp]")&&!Q.querySelector("[data-ng-csp]"))}function cb(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!L(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Sc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:Aa(a)?c="$WINDOW":
a&&Q===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Sc,a?"  ":null)}function Vb(b){return D(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function Wb(b){try{return decodeURIComponent(b)}catch(a){}}function Xb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Wb(c[0]),B(d)&&(b=B(c[1])?Wb(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Yb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function tb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Tc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(Q.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Zb(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===Q?"document":ga(b);throw Oa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=$b(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Z&&!d.test(Z.name))return c();Z.name=Z.name.replace(d,"");Ca.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function db(b,a){a=a||"_";return b.replace(Uc,function(b,d){return(d?a:"")+b.toLowerCase()})}function ub(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&K(b)&&(b=b[b.length-1]);ub(L(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function vb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&L(b)?cb(e,b):b}function wb(b){var a=b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Vc(b){var a=F("$injector"),c=F("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||F;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Ra(b){return b.replace(Wc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Xc,"Moz$1")}function xb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(p=A(k[l]),m?p.triggerHandler("$destroy"):m=!m,s=0,p=(C=p.children()).length;s<p;s++)e.push(Da(C[s]));return g.apply(this,arguments)}var g=Da.fn[b],g=g.$original||g;e.$original=g;Da.fn[b]=e}function O(b){if(b instanceof O)return b;if(!(this instanceof O)){if(D(b)&&"<"!=b.charAt(0))throw yb("nosel");return new O(b)}if(D(b)){var a=Q.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);zb(this,a.childNodes);A(Q.createDocumentFragment()).append(this)}else zb(this,
b)}function Ab(b){return b.cloneNode(!0)}function Ea(b){ac(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ea(b[a])}function bc(b,a,c,d){if(B(d))throw yb("offargs");var e=la(b,"events");la(b,"handle")&&(z(a)?q(e,function(a,c){Bb(b,c,a);delete e[c]}):q(a.split(" "),function(a){z(c)?(Bb(b,a,e[a]),delete e[a]):Na(e[a]||[],c)}))}function ac(b,a){var c=b[eb],d=Sa[c];d&&(a?delete Sa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),bc(b)),delete Sa[c],b[eb]=r))}function la(b,a,c){var d=
b[eb],d=Sa[d||-1];if(B(c))d||(b[eb]=d=++Yc,d=Sa[d]={}),d[a]=c;else return d&&d[a]}function cc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];t(d,a)}else return d}function Cb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Db(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ba(a)+" "," ")))})}function Eb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function zb(b,a){if(a){a=a.nodeName||!B(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function dc(b,a){return fb(b,"$"+(a||"ngController")+"Controller")}function fb(b,a,c){b=A(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}function ec(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ea(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function fc(b,a){var c=gb[a.toLowerCase()];return c&&gc[b.nodeName]&&c}function Zc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||Q);if(z(c.defaultPrevented)){var g=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Tb(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=M?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Fa(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
r&&(c=b.$$hashKey=$a()):c=b;return a+":"+c}function Ta(b){q(b,this.put,this)}function hc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace($c,""),c=c.match(ad),q(c[1].split(bd),function(b){b.replace(cd,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function $b(b){function a(a){return function(b,c){if(X(b))q(b,Qb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(L(b)||K(b))b=n.instantiate(b);
if(!b.$get)throw Ua("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Va(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else L(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(s){throw K(a)&&(a=a[a.length-1]),s.message&&(s.stack&&-1==s.stack.indexOf(s.message))&&(s=s.message+"\n"+s.stack),
Ua("modulerr",a,s.stack||s.message||s);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ua("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],h=hc(a),f,k,m;k=0;for(f=h.length;k<f;k++){m=h[k];if("string"!==typeof m)throw Ua("itkn",m);g.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||L(e)?e:c},get:c,annotate:hc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",m=[],k=new Ta,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),
d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Ua("unpr",m.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||w)});return s}function dd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function g(){var b=
c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function ed(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(C--,0===C)for(;y.length;)try{y.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(E,function(a){a()});u=b(T,a)})()}function f(){v=null;R!=h.url()&&(R=h.url(),q(ha,
function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,y=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(E,function(a){a()});0===C?a():y.push(a)};var E=[],u;h.addPollFn=function(a){z(u)&&g(100,n);E.push(a);return a};var R=k.href,H=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(R!=a)return R=
a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),H.attr("href",H.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var ha=[],N=!1;h.onUrlChange=function(a){if(!N){if(d.history)A(b).on("popstate",f);if(d.hashchange)A(b).on("hashchange",f);else h.addPollFn(f);N=!0}ha.push(a);return a};h.baseHref=function(){var a=H.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var V={},J="",ca=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===
r?m.cookie=escape(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==J)for(J=m.cookie,d=J.split("; "),V={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),V[a]===r&&(V[a]=unescape(e.substring(h+1))));return V}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];
e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(w),!0):!1}}function fd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ed(b,d,a,c)}]}function gd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var f=0,h=t({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!z(b))return a in m||f++,m[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete l[a],delete m[a],f--)},removeAll:function(){m={};f=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return t({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function hd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){xa(a,"directive");D(a)?(ub(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);L(f)?f={compile:$(f)}:!f.compile&&f.link&&(f.compile=
$(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Qb(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,s,C,y,E,u,R,H){function v(a,b,c,d,e){a instanceof A||(a=A(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var g=N(a,b,a,c,d,e);ha(a,"ng-scope");return function(b,c,d){ub(b,"scope");var e=c?Ga.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var m=
e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ha(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,g){function f(a,c,d,e){var g,k,s,l,n,p,I;g=c.length;var C=Array(g);for(n=0;n<g;n++)C[n]=c[n];I=n=0;for(p=m.length;n<p;I++)k=C[I],c=m[n++],g=m[n++],s=A(k),c?(c.scope?(l=a.$new(),s.data("$scope",l)):l=a,(s=c.transclude)||!e&&b?c(g,l,k,d,V(a,s||b)):c(g,l,k,d,e)):g&&g(a,k.childNodes,r,e)}for(var m=[],k,s,l,n,p=0;p<a.length;p++)k=new Fb,s=J(a[p],[],k,0===
p?d:r,e),(g=s.length?ia(s,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ha(A(a[p]),"ng-scope"),k=g&&g.terminal||!(l=a[p].childNodes)||!l.length?null:N(l,g?g.transclude:b),m.push(g,k),n=n||g||k,g=null;return n?f:null}function V(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",cb(c,c.$destroy));return d}}function J(a,b,c,d,f){var k=c.$attr,m;switch(a.nodeType){case 1:T(b,ma(Ha(a).toLowerCase()),"E",d,f);var s,l,n;m=a.attributes;for(var p=0,C=m&&m.length;p<
C;p++){var y=!1,R=!1;s=m[p];if(!M||8<=M||s.specified){l=s.name;n=ma(l);W.test(n)&&(l=db(n.substr(6),"-"));var v=n.replace(/(Start|End)$/,"");n===v+"Start"&&(y=l,R=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));n=ma(l.toLowerCase());k[n]=l;c[n]=s=ba(s.value);fc(a,n)&&(c[n]=!0);S(a,b,s,n);T(b,n,"A",d,f,y,R)}}a=a.className;if(D(a)&&""!==a)for(;m=g.exec(a);)n=ma(m[2]),T(b,n,"C",d,f)&&(c[n]=ba(m[3])),a=a.substr(m.index+m[0].length);break;case 3:F(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))n=
ma(m[1]),T(b,n,"M",d,f)&&(c[n]=ba(m[2]))}catch(E){}}b.sort(z);return b}function ca(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function P(a,b,c){return function(d,e,g,f,m){e=ca(e[0],b,c);return a(d,e,g,f,m)}}function ia(a,c,d,e,g,f,m,n,p){function y(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=G.require;if(H===G||G.$$isolateScope)a=
kc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=P(b,c,d));b.require=G.require;if(H===G||G.$$isolateScope)b=kc(b,{isolateScope:!0});n.push(b)}}function R(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,da);}else K(a)&&(d=[],q(a,function(a){d.push(R(a,b,c))}));return d}function E(a,e,g,f,p){function y(a,b){var c;2>arguments.length&&(b=a,
a=r);z&&(c=ca);return p(a,b,c)}var I,v,N,u,P,J,ca={},hb;I=c===g?d:Tb(d,new Fb(A(g),d.$attr));v=I.$$element;if(H){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=A(g);J=e.$new(!0);ia&&ia===H.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);ha(f,"ng-isolate-scope");q(H.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){J[c]=a});I.$$observers[g].$$scope=e;I[g]&&(J[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;l=s(I[g]);p=l.literal?ua:function(a,b){return a===b};n=l.assign||function(){m=J[c]=l(e);throw ja("nonassign",I[g],H.name);};m=J[c]=l(e);J.$watch(function(){var a=l(e);p(a,J[c])||(p(a,m)?n(e,a=J[c]):J[c]=a);return m=a},null,l.literal);break;case "&":l=s(I[g]);J[c]=function(a){return l(e,a)};break;default:throw ja("iscp",H.name,c,a);}})}hb=p&&y;V&&q(V,function(a){var b={$scope:a===H||a.$$isolateScope?J:e,$element:v,$attrs:I,$transclude:hb},c;P=a.controller;"@"==P&&(P=
I[a.name]);c=C(P,b);ca[a.name]=c;z||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(N=m.length;f<N;f++)try{u=m[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ca),hb)}catch(G){l(G,ga(v))}f=e;H&&(H.template||null===H.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,p);for(f=n.length-1;0<=f;f--)try{u=n[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ca),hb)}catch(B){l(B,ga(v))}}p=p||{};var N=-Number.MAX_VALUE,u,V=p.controllerDirectives,H=p.newIsolateScopeDirective,
ia=p.templateDirective;p=p.nonTlbTranscludeDirective;for(var T=!1,z=!1,t=d.$$element=A(c),G,da,U,F=e,O,M=0,na=a.length;M<na;M++){G=a[M];var Wa=G.$$start,S=G.$$end;Wa&&(t=ca(c,Wa,S));U=r;if(N>G.priority)break;if(U=G.scope)u=u||G,G.templateUrl||(x("new/isolated scope",H,G,t),X(U)&&(H=G));da=G.name;!G.templateUrl&&G.controller&&(U=G.controller,V=V||{},x("'"+da+"' controller",V[da],G,t),V[da]=G);if(U=G.transclude)T=!0,G.$$tlb||(x("transclusion",p,G,t),p=G),"element"==U?(z=!0,N=G.priority,U=ca(c,Wa,S),
t=d.$$element=A(Q.createComment(" "+da+": "+d[da]+" ")),c=t[0],ib(g,A(va.call(U,0)),c),F=v(U,e,N,f&&f.name,{nonTlbTranscludeDirective:p})):(U=A(Ab(c)).contents(),t.empty(),F=v(U,e));if(G.template)if(x("template",ia,G,t),ia=G,U=L(G.template)?G.template(t,d):G.template,U=Y(U),G.replace){f=G;U=A("<div>"+ba(U)+"</div>").contents();c=U[0];if(1!=U.length||1!==c.nodeType)throw ja("tplrt",da,"");ib(g,t,c);na={$attr:{}};U=J(c,[],na);var W=a.splice(M+1,a.length-(M+1));H&&ic(U);a=a.concat(U).concat(W);B(d,na);
na=a.length}else t.html(U);if(G.templateUrl)x("template",ia,G,t),ia=G,G.replace&&(f=G),E=w(a.splice(M,a.length-M),t,d,g,F,m,n,{controllerDirectives:V,newIsolateScopeDirective:H,templateDirective:ia,nonTlbTranscludeDirective:p}),na=a.length;else if(G.compile)try{O=G.compile(t,d,F),L(O)?y(null,O,Wa,S):O&&y(O.pre,O.post,Wa,S)}catch(Z){l(Z,ga(t))}G.terminal&&(E.terminal=!0,N=Math.max(N,G.priority))}E.scope=u&&!0===u.scope;E.transclude=T&&F;return E}function ic(a){for(var b=0,c=a.length;b<c;b++)a[b]=Sb(a[b],
{$$isolateScope:!0})}function T(b,e,g,f,k,s,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var C=0,y=e.length;C<y;C++)try{p=e[C],(f===r||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(s&&(p=Sb(p,{$$start:s,$$end:n})),b.push(p),k=p)}catch(v){l(v)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ha(e,b),a["class"]=(a["class"]?a["class"]+
" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function w(a,b,c,d,e,g,f,m){var k=[],s,l,C=b[0],y=a.shift(),v=t({},y,{templateUrl:null,transclude:null,replace:null,$$originalDirective:y}),R=L(y.templateUrl)?y.templateUrl(b,c):y.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(R),{cache:p}).success(function(n){var p,E;n=Y(n);if(y.replace){n=A("<div>"+ba(n)+"</div>").contents();p=n[0];if(1!=
n.length||1!==p.nodeType)throw ja("tplrt",y.name,R);n={$attr:{}};ib(d,b,p);var u=J(p,[],n);X(y.scope)&&ic(u);a=u.concat(a);B(c,n)}else p=C,b.html(n);a.unshift(v);s=ia(a,p,c,e,b,y,g,f,m);q(d,function(a,c){a==p&&(d[c]=b[0])});for(l=N(b[0].childNodes,e);k.length;){n=k.shift();E=k.shift();var H=k.shift(),ha=k.shift(),u=b[0];E!==C&&(u=Ab(p),ib(H,A(E),u));E=s.transclude?V(n,s.transclude):ha;s(l,n,u,d,E)}k=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),
k.push(c),k.push(d),k.push(e)):s(l,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function x(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ga(d));}function F(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ha(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==b)return u.HTML;var c=Ha(a);if("xlinkHref"==
b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function S(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ha(a))throw ja("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(m[e],!0,O(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,
a)})}}}})}}function ib(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var k=a.length;f<k;f++,m++)m<k?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=Q.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)g=b[d],A(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function kc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=
a;this.$attr=b||{}};Fb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(lc(b,a));this.$addClass(lc(a,b))},$set:function(a,b,c,d){var e=fc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=db(a,"-"));e=Ha(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=
b=H(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);y.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var da=b.startSymbol(),na=b.endSymbol(),Y="{{"==da||"}}"==na?Ba:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,na)},W=/^ngAttr[A-Z]/;return v}]}function ma(b){return Ra(b.replace(id,
""))}function lc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function jd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");X(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,m;D(e)&&(f=e.match(a),h=f[1],m=f[3],e=b.hasOwnProperty(h)?b[h]:vb(g.$scope,h,!0)||vb(d,h,!0),Qa(e,h,!0));f=c.instantiate(e,g);
if(m){if(!g||"object"!=typeof g.$scope)throw F("$controller")("noscp",h||e.name,m);g.$scope[m]=f}return f}}]}function kd(){this.$get=["$window",function(b){return A(b.document)}]}function ld(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function mc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=x(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function nc(b){var a=X(b)?b:r;return function(c){a||
(a=mc(b));return c?a[x(c)]||null:a}}function oc(b,a,c){if(L(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function md(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Vb(d)));return d}],transformRequest:[function(a){return X(a)&&"[object File]"!==Ma.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:aa(d),
put:aa(d),patch:aa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=t({},a,{data:oc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,
d){L(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),g,f,c=t({},c.common,c[x(a.method)]);b(c);b(d);a:for(g in c){a=x(g);for(f in d)if(x(f)===a)continue a;d[g]=c[g]}return d}(a);t(d,a);d.headers=g;d.method=Ia(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=oc(a.data,nc(g),a.transformRequest);z(a.data)&&q(g,function(a,b){"content-type"===x(b)&&delete g[b]});z(a.withCredentials)&&
!z(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],h=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function C(b,
c,g){function f(a,b,c){u&&(200<=a&&300>a?u.put(r,[a,b,mc(c)]):u.remove(r));m(b,a,c);d.$$phase||d.$apply()}function m(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:nc(d),config:b})}function k(){var a=bb(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,u,q,r=y(b.url,b.params);s.pendingRequests.push(b);C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(u=X(b.cache)?b.cache:X(e.cache)?e.cache:E);if(u)if(q=u.get(r),
B(q)){if(q.then)return q.then(k,k),q;K(q)?m(q[1],q[0],aa(q[2])):m(q,200,{})}else u.put(r,C);z(q)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function y(a,b){if(!b)return a;var c=[];Pc(b,function(a,b){null===a||z(a)||(K(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(wa(b)+"="+wa(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var E=c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,
0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(t(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=e;return s}]}function nd(b){return 8>=M&&"patch"===x(b)?new ActiveXObject("Microsoft.XMLHTTP"):new Z.XMLHttpRequest}function od(){this.$get=
["$browser","$window","$document",function(b,a,c){return pd(b,nd,b.defer,a.angular.callbacks,c[0])}]}function pd(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;M&&8>=M?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,m,k,l,n,p,s,C){function y(){u=f;
H&&H();v&&v.abort()}function E(a,d,e,g){r&&c.cancel(r);H=v=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(w)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==x(e)){var R="_"+(d.counter++).toString(36);d[R]=function(a){d[R].data=a};var H=g(m.replace("JSON_CALLBACK","angular.callbacks."+R),function(){d[R].data?E(l,200,d[R].data):E(l,u||-2);d[R]=Ca.noop})}else{var v=a(e);v.open(e,m,!0);q(n,function(a,b){B(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=
function(){if(v&&4==v.readyState){var a=null,b=null;u!==f&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);E(l,u||v.status,b,a)}};s&&(v.withCredentials=!0);C&&(v.responseType=C);v.send(k||null)}if(0<p)var r=c(y,p);else p&&p.then&&p.then(y)}}function qd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,l){for(var n,p,s=0,C=[],
y=g.length,E=!1,u=[];s<y;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(E=g.substring(n+f,p))),s.exp=E,s=p+h,E=!0):(s!=y&&C.push(g.substring(s)),s=y);(y=C.length)||(C.push(""),y=1);if(l&&1<C.length)throw pc("noconcat",g);if(!k||E)return u.length=y,s=function(a){try{for(var b=0,c=y,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null===f||z(f)?f="":"string"!=typeof f&&(f=qa(f))),u[b]=f;return u.join("")}catch(h){a=pc("interr",
g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function rd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=B(m)&&!m;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),l(p.$$intervalId),delete e[p.$$intervalId]);C||b.$apply()},f);e[p.$$intervalId]=n;return p}
var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function sd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function qc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
tb(b[a]);return b.join("/")}function rc(b,a,c){b=ya(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||td[b.protocol]||null}function sc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ya(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Xb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Xa(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Xa(b).lastIndexOf("/")+1)}function tc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);rc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!D(e))throw Ib("ipthprfx",a,c);sc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Yb(this.$$search),b=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=oa(b,d))!==r)return d=e,(e=oa(a,e))!==r?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==r)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);rc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!D(e))throw Ib("ihshprfx",d,a);sc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Yb(this.$$search),e=this.$$hash?
"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Xa(b)==Xa(a))return a}}function uc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);this.$$rewrite=function(d){var e;if(b==Xa(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function jb(b){return function(){return this[b]}}function vc(b,a){return function(c){if(z(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ud(){var b=
"",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?tc:uc):(m=Xa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=
A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ya(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Z.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return l});return h}]}function vd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,
a){if("constructor"===b)throw za("isecfld",a);return b}function Ya(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw za("isecdom",a);}return b}function kb(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=ea(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ra(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=ea(a.shift(),d);return b[g]=c}function wc(b,a,c,d,e,g,f){ea(b,g);ea(a,g);ea(c,g);ea(d,g);ea(e,g);return f.unwrapPromises?function(f,m){var k=m&&m.hasOwnProperty(b)?m:f,l;if(null==k)return k;(k=k[b])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return r;(k=k[a])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return r;(k=k[c])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!d)return k;if(null==k)return r;(k=k[d])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return r;(k=k[e])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return r;k=k[a];if(!c)return k;if(null==k)return r;k=k[c];if(!d)return k;if(null==k)return r;k=k[d];return e?null==k?r:k=k[e]:k}}function wd(b,
a){ea(b,a);return function(a,d){return null==a?r:(d&&d.hasOwnProperty(b)?d:a)[b]}}function xd(b,a,c){ea(b,c);ea(a,c);return function(c,e){if(null==c)return r;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?r:c[a]}}function xc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?wc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=wc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);
return h};else{var f="var p;\n";q(d,function(b,d){ea(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=$(f);g=a.unwrapPromises?function(a,b){return h(a,b,ra)}:h}else g=xd(d[0],d[1],c);else g=
wd(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=g);return g}function yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ra=function(b){a.logPromiseWarnings&&!yc.hasOwnProperty(b)&&(yc[b]=!0,e.warn("[$parse] Promise found in the expression `"+
b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Za(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ad(function(a){b.$evalAsync(a)},a)}]}function Ad(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=
[],m,k;return k={resolve:function(a){if(h){var c=h;h=r;m=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,f){var k=e(),C=function(d){try{k.resolve((L(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},y=function(b){try{k.resolve((L(g)?g:d)(b))}catch(c){k.reject(c),a(c)}},E=function(b){try{k.notify((L(f)?
f:c)(b))}catch(d){a(d)}};h?h.push([C,y,E]):m.then(C,y,E);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&L(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&L(a.then)?a:{then:function(c){var d=
e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(g,f){var l=e();b(function(){try{l.resolve((L(f)?f:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:f,when:function(h,m,k,l){var n=e(),p,s=function(b){try{return(L(m)?m:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(L(k)?k:d)(b)}catch(c){return a(c),f(c)}},y=function(b){try{return(L(l)?l:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,
C,y)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(y(a))})});return n.promise},all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function Bd(){var b=10,a=F("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,
e,g,f){function h(){this.$id=$a();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&
delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=$a());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=
this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!L(b)){var h=k(b||w,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Na(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Na(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),m=[],k={},l=0;return this.$watch(function(){e=h(c);var a,b;if(X(e))if(rb(e))for(d!==
m&&(d=m,l=d.length=0,f++),a=e.length,l!==a&&(f++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==k&&(d=k={},l=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(l++,d[b]=e[b],f++));if(l>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,r=b,N,V=[],J,A,P;m("$digest");c=null;do{v=
!1;for(N=this;k.length;){try{P=k.shift(),P.scope.$eval(P.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=N.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(N))!==(g=d.last)&&!(d.eq?ua(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?aa(f):f,d.fn(f,g===n?f:g,N),5>r&&(J=4-r,V[J]||(V[J]=[]),A=L(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,A+="; newVal: "+qa(f)+"; oldVal: "+qa(g),V[J].push(A));else if(d===c){v=!1;break a}}catch(t){p.$$phase=
null,e(t)}if(!(h=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(h=N.$$nextSibling);)N=N.$parent}while(N=h);if((v||k.length)&&!r--)throw p.$$phase=null,a("infdig",b,qa(V));}while(v||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(z){e(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,cb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[bb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},m=[h].concat(va.call(arguments,1)),k,l;do{d=f.$$listeners[a]||c;h.currentScope=f;k=0;for(l=d.length;k<l;k++)if(d[k])try{d[k].apply(null,m)}catch(p){e(p)}else d.splice(k,1),k--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(va.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!M||8<=
M)if(g=ya(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Dd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw sa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(ab(b))return RegExp("^"+b.source+"$");throw sa("imatcher");}function zc(b){var a=[];B(b)&&q(b,function(b){a.push(Dd(b))});return a}function Ed(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=
function(a){arguments.length&&(b=zc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=zc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw sa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));
var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=ya(d.toString()),l,n,p=
!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw sa("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw sa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Fd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw sa("iequirks");
var e=aa(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=x(b);e[Ra("parse_as_"+c)]=function(b){return g(a,b)};e[Ra("get_trusted_"+c)]=function(b){return f(a,b)};e[Ra("trust_as_"+c)]=function(b){return h(a,
b)}});return e}]}function Gd(){this.$get=["$window","$document",function(b,a){var c={},d=S((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in
k);!d||l&&n||(l=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==M)return!1;if(z(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ub(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:M,msieDocumentMode:f}}]}function Hd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,
m){var k=c.defer(),l=k.promise,n=B(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;g[h]=k;return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ya(b,a){var c=b;M&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,
""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Gb(b){b=D(b)?ya(b):b;return b.protocol===Ac.protocol&&b.host===Ac.host}function Id(){this.$get=$(Z)}function Bc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Cc);a("date",Dc);a("filter",Jd);a("json",Kd);a("limitTo",Ld);a("lowercase",Md);a("number",Ec);a("orderBy",Fc);a("uppercase",Nd)}function Jd(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===
b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:
vb(c,b),a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Cc(b){var a=b.NUMBER_FORMATS;return function(b,d){z(d)&&(d=a.CURRENCY_SYM);return Gc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ec(b){var a=b.NUMBER_FORMATS;return function(b,d){return Gc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Gc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);
var f=b+"",h="",m=[],k=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Hc)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Hc);f=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=l;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),
h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);m.push(h);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function W(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function lb(b,a){return function(c,d){var e=c["get"+b](),g=Ia(a?"SHORT"+b:b);return d[g][e]}}function Dc(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&
(c=Od.test(c)?S(c):a(c));sb(c)&&(c=new Date(c));if(!La(c))return c;for(;e;)(m=Pd.exec(e))?(f=f.concat(va.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Qd[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Kd(){return function(b){return qa(b,!0)}}function Ld(){return function(b,a){if(!K(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,
e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Fc(b){return function(a,c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Rc(c,function(a){var c=!1,d=a||Ba;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),g=typeof c,f=typeof e;g==f?("string"==g&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=g<f?-1:1;return c},c)});for(var g=
[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ta(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Ic(b,a){function c(a,c){c=c?"-"+db(c,"-"):"";b.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}var d=this,e=b.parent().controller("form")||ob,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ja);c(!0);
d.$addControl=function(a){xa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Na(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Na(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=bb(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ja).addClass(pb);
d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(pb).addClass(Ja);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:r}function qb(b,a,c,d,e,g){if(!e.android){var f=!1;a.on("compositionstart",function(a){f=!0});a.on("compositionend",function(){f=!1})}var h=function(){if(!f){var e=a.val();Pa(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&(b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)}))}};
if(e.hasEvent("input"))a.on("input",h);else{var m,k=function(){m||(m=g.defer(function(){h();m=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern;l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||l.test(a),a)}):e=function(c){var e=b.$eval(l);if(!e||!e.test)throw F("ngPattern")("noregexp",
l,e,ga(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=S(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=n,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=S(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===
a||c.$index%2===a){var d=f(b||"");h?ua(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=aa(b)}function f(a){if(K(a))return a.join(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var x=function(b){return D(b)?b.toLowerCase():b},Ia=function(b){return D(b)?b.toUpperCase():
b},M,A,Da,va=[].slice,Rd=[].push,Ma=Object.prototype.toString,Oa=F("ng"),Ca=Z.angular||(Z.angular={}),Va,Ha,ka=["0","0","0"];M=S((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(M)&&(M=S((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));w.$inject=[];Ba.$inject=[];var ba=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ha=9>M?function(b){b=b.nodeName?b:b[0];return b.scopeName&&
"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Uc=/[A-Z]/g,Sd={full:"1.2.10",major:1,minor:2,dot:10,codeName:"augmented-serendipity"},Sa=O.cache={},eb=O.expando="ng-"+(new Date).getTime(),Yc=1,Jc=Z.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Bb=Z.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+
a,c)},Wc=/([\:\-\_]+(.))/g,Xc=/^moz([A-Z])/,yb=F("jqLite"),Ga=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Q.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(Z).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Rd,sort:[].sort,splice:[].splice},gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){gb[x(b)]=
b});var gc={};q("input select option textarea button form details".split(" "),function(b){gc[Ia(b)]=!0});q({data:cc,inheritedData:fb,scope:function(b){return A(b).data("$scope")||fb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A(b).data("$isolateScope")||A(b).data("$isolateScopeNoTemplate")},controller:dc,injector:function(b){return fb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Cb,css:function(b,a,c){a=Ra(a);if(B(c))b.style[a]=c;else{var d;
8>=M&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=M&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=x(a);if(gb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:r;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(z(d))return e?
b[e]:"";b[e]=d}var a=[];9>M?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(z(a)){if("SELECT"===Ha(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ea(d[c]);b.innerHTML=a},empty:ec},function(b,a){O.prototype[a]=function(a,d){var e,g;if(b!==ec&&(2==b.length&&b!==Cb&&b!==
dc?a:d)===r){if(X(a)){for(e=0;e<this.length;e++)if(b===cc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:ac,dealoc:Ea,on:function a(c,d,e,g){if(B(g))throw yb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=Zc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==
d||"mouseleave"==d){var l=Q.body.contains||Q.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Jc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},
off:bc,one:function(a,c,d){a=A(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ea(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=
a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ea(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Eb,removeClass:Db,toggleClass:function(a,c,d){z(d)&&(d=!Cb(a,c));(d?Eb:Db)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;
for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ab,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)z(f)?(f=a(this[h],c,e,g),B(f)&&(f=A(f))):zb(f,a(this[h],c,e,g));return B(f)?f:this};O.prototype.bind=O.prototype.on;
O.prototype.unbind=O.prototype.off});Ta.prototype={put:function(a,c){this[Fa(a)]=c},get:function(a){return this[Fa(a)]},remove:function(a){var c=this[a=Fa(a)];delete this[a];return c}};var ad=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,bd=/,/,cd=/^\s*(_?)(\S+?)\1\s*$/,$c=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ua=F("$injector"),Td=F("$animate"),Ud=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Td("notcsel",c);this.$$selectors[c.substr(1)]=
e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:K(e)?e.join(" "):"";q(d,function(a){Eb(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?
e:K(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},enabled:w}}]}],ja=F("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var id=/^(x[\:\-_]|data[\:\-_])/i,pc=F("$interpolate"),Vd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,td={http:80,https:443,ftp:21},Ib=F("$location");uc.prototype=Jb.prototype=tc.prototype={$$html5:!1,$$replace:!1,absUrl:jb("$$absUrl"),url:function(a,c){if(z(a))return this.$$url;var d=Vd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||
"");this.hash(d[5]||"",c);return this},protocol:jb("$$protocol"),host:jb("$$host"),port:jb("$$port"),path:vc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Xb(a);else if(X(a))this.$$search=a;else throw Ib("isrcharg");break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:vc("$$hash",Ba),replace:function(){this.$$replace=!0;return this}};
var za=F("$parse"),yc={},ra,Ka={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},
"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},
"!":function(a,c,d){return!d(a,c)}},Wd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&
("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ka[this.ch],f=Ka[d],h=Ka[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,
text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===
a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=
this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===
h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ka.hasOwnProperty(c))d.fn=Ka[c],d.json=Ka[c];else{var m=xc(c,this.options,this.text);d.fn=t(function(a,c){return m(a,c)},{assign:function(d,e){return kb(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+
1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Wd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});
return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=function(){return 0};Za.prototype={constructor:Za,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=xc(d,this.options,this.text);return t(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return kb(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return t(function(e,g){var f=a(e,g),h=d(e,g),m;if(!f)return r;(f=Ya(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=r,m.then(function(a){m.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Ya(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],m=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,m)||w;Ya(m,e.text);Ya(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Ya(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=
this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=
k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},sa=F("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=Q.createElement("a"),Ac=ya(Z.location.href,!0);Bc.$inject=["$provide"];Cc.$inject=["$locale"];Ec.$inject=["$locale"];var Hc=".",Qd={yyyy:W("FullYear",4),yy:W("FullYear",2,0,!0),y:W("FullYear",1),MMMM:lb("Month"),MMM:lb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",
1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:lb("Day"),EEE:lb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},Pd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Od=/^\-?\d+$/;Dc.$inject=["$locale"];var Md=$(x),Nd=$(Ia);Fc.$inject=["$parse"];var Xd=$({restrict:"E",
compile:function(a,c){8>=M&&(c.href||c.name||c.$set("href",""),a.append(Q.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===Ma.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),Ob={};q(gb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Ob[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=
ma("ng-"+a);Ob[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),M&&e.prop(a,g[a]))})}}}});var ob={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Ic.$inject=["$element","$attrs","$scope"];var Kc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Ic,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Jc(e[0],
"submit",h);e.on("$destroy",function(){c(function(){Bb(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=g.name||g.ngForm;k&&kb(a,k,f,k);if(m)e.on("$destroy",function(){m.$removeControl(f);k&&kb(a,k,r,k);t(f,ob)})}}}}}]},Yd=Kc(),Zd=Kc(!0),$d=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ae=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,be=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Lc={text:qb,number:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);
e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||be.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,
"number",e.$isEmpty(a)||sb(a),a)})},url:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||$d.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||ae.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){z(d.name)&&c.attr("name",$a());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:w,button:w,submit:w,reset:w},Mc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,g,f){f&&(Lc[x(g.type)]||Lc.text)(d,e,g,f,c,a)}}}],nb="ng-valid",mb="ng-invalid",Ja="ng-pristine",pb="ng-dirty",ce=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+db(c,"-"):"";e.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),
m=h.assign;if(!m)throw F("ngModel")("nonassign",d.ngModel,ga(e));this.$render=w;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||ob,l=0,n=this.$error={};e.addClass(Ja);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(pb).addClass(Ja)};
this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ja).addClass(pb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],de=function(){return{require:["ngModel",
"^?form"],controller:ce,link:function(a,c,d,e){var g=e[0],f=e[1]||ob;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ee=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Nc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",
function(){g(e.$viewValue)})}}}},fe=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!z(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ge=/^(true|false|\d+)$/,he=function(){return{priority:100,compile:function(a,c){return ge.test(c.ngValue)?function(a,c,g){g.$set("value",
a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ie=ta(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),je=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ke=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",
g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],le=Nb("",!0),me=Nb("Odd",0),ne=Nb("Even",1),oe=ta({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),pe=[function(){return{scope:!0,controller:"@",priority:500}}],Oc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+
a);Oc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(x(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var qe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,m;c.$watch(e.ngIf,function(g){Pa(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=Q.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(wb(h.clone)),
h=null))})}}}],re=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(f,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(f,h,q,r,y){var A=0,u,t,H=function(){u&&(u.$destroy(),u=null);t&&(e.leave(t),t=null)};f.$watch(g.parseAsResourceUrl(m),function(g){var m=function(){!B(l)||l&&!f.$eval(l)||d()},q=++A;g?(a.get(g,{cache:c}).success(function(a){if(q===
A){var c=f.$new();r.template=a;a=y(c,function(a){H();e.enter(a,null,h,m)});u=c;t=a;u.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===A&&H()}),f.$emit("$includeContentRequested")):(H(),r.template=null)})}}}}],se=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],te=ta({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ue=ta({terminal:!0,priority:1E3}),ve=["$locale",
"$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,m=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),s=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],
we=["$parse","$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,m){var k=f.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,s,r,y,t,u={$id:Fa};if(!l)throw d("iexp",k);f=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){t&&(u[t]=a);u[y]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Fa(c)},r=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",
f);y=l[3]||l[1];t=l[2];var B={};e.$watchCollection(h,function(a){var f,h,l=g[0],n,u={},z,P,D,x,T,w,F=[];if(rb(a))T=a,n=p||s;else{n=p||r;T=[];for(D in a)a.hasOwnProperty(D)&&"$"!=D.charAt(0)&&T.push(D);T.sort()}z=T.length;h=F.length=T.length;for(f=0;f<h;f++)if(D=a===T?f:T[f],x=a[D],x=n(D,x,f),xa(x,"`track by` id"),B.hasOwnProperty(x))w=B[x],delete B[x],u[x]=w,F[f]=w;else{if(u.hasOwnProperty(x))throw q(F,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,x);F[f]={id:x};u[x]=!1}for(D in B)B.hasOwnProperty(D)&&
(w=B[D],f=wb(w.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());f=0;for(h=T.length;f<h;f++){D=a===T?f:T[f];x=a[D];w=F[f];F[f-1]&&(l=F[f-1].clone[F[f-1].clone.length-1]);if(w.scope){P=w.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);w.clone[0]!=n&&c.move(wb(w.clone),null,A(l));l=w.clone[w.clone.length-1]}else P=e.$new();P[y]=x;t&&(P[t]=D);P.$index=f;P.$first=0===f;P.$last=f===z-1;P.$middle=!(P.$first||P.$last);P.$odd=!(P.$even=0===(f&1));w.scope||m(P,function(a){a[a.length++]=
Q.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,A(l));l=a;w.scope=P;w.clone=a;u[w.id]=w})}B=u})}}}],xe=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],ye=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ze=ta(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ae=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Be=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Ce=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),De=ta({controller:["$element","$transclude",function(a,c){if(!c)throw F("ngTransclude")("orphan",ga(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),Ee=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Fe=F("ngOptions"),Ge=$({terminal:!0}),He=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope",
"$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=
w})}],link:function(e,f,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):z(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ta(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=aa(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,t,v;t=g.$modelValue;v=A(e)||[];var C=n?Pb(v):v,F,I,z;I={};r=!1;var E,H;if(s)if(w&&K(t))for(r=new Ta([]),z=0;z<t.length;z++)I[m]=t[z],r.put(w(e,I),t[z]);else r=new Ta(t);for(z=0;F=C.length,z<F;z++){k=z;if(n){k=C[z];if("$"===k.charAt(0))continue;I[n]=k}I[m]=v[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=
[],c.push(d));s?d=B(r.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=w(e,d)===w(e,I)):d=t===q(e,I),r=r||d);E=l(e,I);E=B(E)?E:"";k.push({id:w?w(e,I):n?C[z]:z,label:E,selected:d})}s||(y||null===t?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(C=c.length;I<C;I++){d=c[I];k=a[d];x.length<=I?(t={element:D.clone().attr("label",d),label:k.label},v=[t],x.push(v),f.append(t.element)):(v=x[I],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;z=0;for(F=
k.length;z<F;z++)r=k[z],(d=v[z+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&y?H=y:(H=u.clone()).val(r.id).attr("selected",r.selected).text(r.label),v.push({element:H,label:r.label,id:r.id,selected:r.selected}),E?E.after(H):t.element.append(H),E=H);for(z++;v.length>z;)v.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Fe("iexp",
t,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},h,k,l,p,t,u,v;if(s)for(k=[],p=0,u=x.length;p<u;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),
"?"==h)k=r;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var s=h.multiple,t=h.ngOptions,y=!1,w,u=A(Q.createElement("option")),D=A(Q.createElement("optgroup")),x=u.clone();h=0;for(var v=f.children(),F=v.length;h<F;h++)if(""===v[h].value){w=y=v.eq(h);break}p.init(m,y,x);s&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):s?l(e,f,m):
k(e,f,m,p)}}}}],Ie=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],
Je=$({restrict:"E",terminal:!0});(Da=Z.jQuery)?(A=Da,t(Da.fn,{scope:Ga.scope,isolateScope:Ga.isolateScope,controller:Ga.controller,injector:Ga.injector,inheritedData:Ga.inheritedData}),xb("remove",!0,!0,!1),xb("empty",!1,!1,!1),xb("html",!1,!1,!0)):A=O;Ca.element=A;(function(a){t(a,{bootstrap:Zb,copy:aa,extend:t,equals:ua,element:A,forEach:q,injector:$b,noop:w,bind:cb,toJson:qa,fromJson:Vb,identity:Ba,isUndefined:z,isDefined:B,isString:D,isFunction:L,isObject:X,isNumber:sb,isElement:Qc,isArray:K,
version:Sd,isDate:La,lowercase:x,uppercase:Ia,callbacks:{counter:0},$$minErr:F,$$csp:Ub});Va=Vc(Z);try{Va("ngLocale")}catch(c){Va("ngLocale",[]).provider("$locale",sd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Cd});a.provider("$compile",jc).directive({a:Xd,input:Mc,textarea:Mc,form:Yd,script:Ee,select:He,style:Je,option:Ie,ngBind:ie,ngBindHtml:ke,ngBindTemplate:je,ngClass:le,ngClassEven:ne,ngClassOdd:me,ngCloak:oe,ngController:pe,ngForm:Zd,ngHide:ye,ngIf:qe,ngInclude:re,
ngInit:te,ngNonBindable:ue,ngPluralize:ve,ngRepeat:we,ngShow:xe,ngStyle:ze,ngSwitch:Ae,ngSwitchWhen:Be,ngSwitchDefault:Ce,ngOptions:Ge,ngTransclude:De,ngModel:de,ngList:fe,ngChange:ee,required:Nc,ngRequired:Nc,ngValue:he}).directive({ngInclude:se}).directive(Ob).directive(Oc);a.provider({$anchorScroll:dd,$animate:Ud,$browser:fd,$cacheFactory:gd,$controller:jd,$document:kd,$exceptionHandler:ld,$filter:Bc,$interpolate:qd,$interval:rd,$http:md,$httpBackend:od,$location:ud,$log:vd,$parse:yd,$rootScope:Bd,
$q:zd,$sce:Fd,$sceDelegate:Ed,$sniffer:Gd,$templateCache:hd,$timeout:Hd,$window:Id})}])})(Ca);A(Q).ready(function(){Tc(Q,Zb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

},{}],8:[function(require,module,exports){

},{}]},{},[1])