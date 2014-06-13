(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var ng = require('angular')
  , fs = require('fs')
  , vimeoJson = JSON.parse("{\"videos\":[{\"description\":\"Kathleen Weil-Garris Brandt traces the elusive sources of Michelangelo’s genius, having explored his artistic origins while cracking the mystery of a curious artwork. For decades, a small marble statue of a winged boy stood in the grand foyer of the French Cultural Services townhouse on New York’s Fifth Avenue. A well-known art professor at New York University, Brandt had seen it many times. But only after the Renaissance scholar viewed it in good light at a reception did she realize it could be a lost work of a teenage Michelangelo. Her claim set off a firestorm among art historians but convinced the Metropolitan Museum of Art, where The Little Archer is now on loan.\",\"duration\":4576,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97536029,\"mobile_url\":\"http://vimeo.com/m/97536029\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477948619_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477948619_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477948619_100x75.jpg\",\"title\":\"Kathleen Weil-Garris Brandt | Michelangelos Genius Nature vs Nurture\",\"upload_date\":\"2014-06-06 11:31:03\",\"url\":\"http://vimeo.com/97536029\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Emily Allchurch<br />\\nTokyo Story: Journey in the Footsteps of a Master<br />\\nMarch 13, 2014\",\"duration\":4423,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97445895,\"mobile_url\":\"http://vimeo.com/m/97445895\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477827151_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477827151_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477827151_100x75.jpg\",\"title\":\"Emily Allchurch | Tokyo Story\",\"upload_date\":\"2014-06-05 12:36:12\",\"url\":\"http://vimeo.com/97445895\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":594},{\"description\":\"Deborah Strebel Pierce<br />\\r\\nArt Theft and the FBI<br />\\r\\nFebruary 13, 2014\",\"duration\":4530,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97441563,\"mobile_url\":\"http://vimeo.com/m/97441563\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":3,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477824096_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477824096_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477824096_100x75.jpg\",\"title\":\"Deborah Strebel Pierce | Art Theft and the FBI\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441563\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":634},{\"description\":\"Eric Kandel, M.D.<br />\\r\\nThe Age of Insight: The Quest To Understand the Unconscious in Art, Mind, and Brain from Vienna 1900 to the Present<br />\\r\\nJanuary 9, 2014\",\"duration\":4849,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97441562,\"mobile_url\":\"http://vimeo.com/m/97441562\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477827033_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477827033_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477827033_100x75.jpg\",\"title\":\"Eric Kandel, M.D. | The Age of Insight\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441562\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"David Garrard Lowe<br />\\r\\nThe Artists of Montmartre<br />\\r\\nNovember 14, 2013\",\"duration\":3944,\"embed_privacy\":\"anywhere\",\"height\":478,\"id\":97441561,\"mobile_url\":\"http://vimeo.com/m/97441561\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823977_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823977_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823977_100x75.jpg\",\"title\":\"David Garrard Lowe | The Artists of Montmartre\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441561\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Alain Gruber<br />\\r\\nThe Splendour of Table Decoration in the Period of Louis XV and Madame de Pompadour<br />\\r\\nDecember 12, 2013\",\"duration\":4565,\"embed_privacy\":\"anywhere\",\"height\":478,\"id\":97441429,\"mobile_url\":\"http://vimeo.com/m/97441429\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823783_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823783_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823783_100x75.jpg\",\"title\":\"Alain Gruber | The Splendour of Table Decoration\",\"upload_date\":\"2014-06-05 11:47:11\",\"url\":\"http://vimeo.com/97441429\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Henry John Drewal<br />\\r\\nMaking Sense of African Art: Yoruba Arts and Culture<br />\\r\\nOctober 10, 2013\",\"duration\":4325,\"embed_privacy\":\"anywhere\",\"height\":476,\"id\":97370762,\"mobile_url\":\"http://vimeo.com/m/97370762\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823596_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823596_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823596_100x75.jpg\",\"title\":\"Henry John Drewal | Making Sense of African Art\",\"upload_date\":\"2014-06-04 17:02:28\",\"url\":\"http://vimeo.com/97370762\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Visual artist Nick Cave is a poet of sight, sound, motion and emotion, known for his larger-than-life “soundsuits,” mesmerizing hybrids of art and dance, made from scavenged and cast-off materials.  Since completing the MIA’s “Soundsuit” in 2010, Cave has achieved international prominence. One of Cave’s recent goals has been to nudge viewers from their work-a-day lethargy, lifting them to a place where they are free to dream again.\",\"duration\":4092,\"embed_privacy\":\"anywhere\",\"height\":464,\"id\":97370568,\"mobile_url\":\"http://vimeo.com/m/97370568\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823028_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823028_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823028_100x75.jpg\",\"title\":\"Nick Cave | Body Of Work\",\"upload_date\":\"2014-06-04 17:00:21\",\"url\":\"http://vimeo.com/97370568\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Stan Douglas is a photographer, filmmaker, and installation artist whose works have been exhibited internationally, including in three Venice Biennials and three dOCUMENTAs. Douglas's photographs examine how images and memory shape interpretations of history. To create his photographs, Douglas often assumes the role of a photojournalist who travels back in time to reinterpret key events in social and political history, such as the 1975 revolution in Angola and social riots in Canada during the 1930s and 1970s. After conducting intensive research, he restages these events using actors, costumes, props, and sets. These pictures are meticulously composed down to the slightest gestures and period styles.<br />\\r\\n<br />\\r\\nDouglas was awarded the prestigious Infinity Award for Art by the International Center for Photography in 2012.<br />\\r\\n<br />\\r\\nThe Arnold Neman Lecture Series is made possible thanks to a generous gift from the Arnold and Augusta Newman Foundation.<br />\\r\\n<br />\\r\\nGenerous support for New Pictures is provided by the W. Duncan and Nivin MacMillan Foundation.\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96937899,\"mobile_url\":\"http://vimeo.com/m/96937899\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":5,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures 7: Stan Douglas\",\"upload_date\":\"2014-05-30 15:05:34\",\"url\":\"http://vimeo.com/96937899\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jones gained notoriety for photographing psychoanalysts' therapy rooms in the late 1990s and has continued to explore this provocative subject. In Analyst (Couch) (I), 2008, she shows the therapist's viewpoint: a banal-looking couch covered with a red blanket bears the imprint of the patient who lay upon it during a session. Arrangement (Analyst) (I), 2007, focuses on the objects that have been carefully arranged by the analyst to create a soothing environment for the patient.<br />\\r\\n<br />\\r\\nTwo large-scale diptychs—one showing a horse and the other a rose bush—refer to early stereographic prints and explore the potential for photography to reveal uncanny perspectives. In The Rose Gardens (display: III / white) (II) and (III), of 2008, Jones photographed a rose bush from both front and back so viewers can contemplate both viewpoints simultaneously. In Horse (profile / black) (II) and (III), of 2012, she paired two images of a horse, whose majestic presence is compressed through the process of doubling.<br />\\r\\n<br />\\r\\nJones earned her master of fine arts degree at Goldsmith College in London and has been exhibiting internationally for over twenty years. She is represented by Maureen Paley, London, and Anton Kern Gallery, New York, and is also a tutor at The Royal College of Art in London. A new monograph published by Violette Editions, with contributions by David Campany, Brian Dillon, and A. M. Homes, is now available in bookshops.<br />\\r\\n<br />\\r\\nMusic credit: \\\"White Lotus\\\" by Kevin Macleod\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96710338,\"mobile_url\":\"http://vimeo.com/m/96710338\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":6,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/476841556_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/476841556_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/476841556_100x75.jpg\",\"title\":\"New Pictures 8: Sarah Jones\",\"upload_date\":\"2014-05-28 11:04:42\",\"url\":\"http://vimeo.com/96710338\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":12,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":46,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Marla Spivak of the University of Minnesota BeeSquad talks about the importance of having bees on the roof of the Minneapolis Institute of Arts\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93166314,\"mobile_url\":\"http://vimeo.com/m/93166314\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":11,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473141728_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473141728_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473141728_100x75.jpg\",\"title\":\"Beekeeping at Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:00:05\",\"url\":\"http://vimeo.com/93166314\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Creativity Academy is an educational program at the MIA. It fosters creative thinking skills and critical thinking skills in children at the 4th grade level.<br />\\r\\n<br />\\r\\nGenerous support for Creativity Academy is provided by Friends of the Institute\",\"duration\":128,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92166635,\"mobile_url\":\"http://vimeo.com/m/92166635\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":4,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471816383_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471816383_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471816383_100x75.jpg\",\"title\":\"Creativity Academy x MIA\",\"upload_date\":\"2014-04-16 14:03:54\",\"url\":\"http://vimeo.com/92166635\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of funds from Gayle Fuguitt and Tom Veitch and the Decorative Arts Miscellaneous Purchase Fund. 2013.61<br />\\r\\n<br />\\r\\nArtist: Kati Touminen-Niittylä. Sculpted  in Finland, Europe in 2010.<br />\\r\\n<br />\\r\\nPresented by Jennifer Komar Olivarez, the Associate Curator of Decorative Arts, Textiles, and Sculpture.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":111,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065797,\"mobile_url\":\"http://vimeo.com/m/92065797\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"object:118851\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Inverno II - from \\\"Winter\\\"\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065797\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of Jim Billings with 50 years of friendship. 2013. 59<br />\\r\\n<br />\\r\\nArtist of the scroll: Motīlāl Josī, painted in Chittorgarh, Rajasthan in early 20th Century.<br />\\r\\n<br />\\r\\nPresented by Risha Lee, Ph.D. Jane Emison Assistant Curator of South and Southeast Asian Art.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":130,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065796,\"mobile_url\":\"http://vimeo.com/m/92065796\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":4,\"tags\":\"object:116488\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665898_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665898_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665898_100x75.jpg\",\"title\":\"Scroll Painting Dedicated to Pabuji (India, Asia)\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065796\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift from the John R. Van Derlip Fund. 2013.56<br />\\r\\n<br />\\r\\nArtist: William Edmondson, Made in United States, 1938-1942.<br />\\r\\n<br />\\r\\nPresented by Karleen Gardner, the Director of Learning and Innovation. <br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":88,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065795,\"mobile_url\":\"http://vimeo.com/m/92065795\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":6,\"tags\":\"object:118808\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471664191_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471664191_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471664191_100x75.jpg\",\"title\":\"Ram\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065795\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A face montage of visitors and our collections.<br />\\n<br />\\nCome as you are.<br />\\nMinneapolis Institute of Arts\",\"duration\":15,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90909355,\"mobile_url\":\"http://vimeo.com/m/90909355\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":5,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/470247651_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/470247651_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/470247651_100x75.jpg\",\"title\":\"Come as you are\",\"upload_date\":\"2014-04-03 17:56:53\",\"url\":\"http://vimeo.com/90909355\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A video installation in the lobby of the MIA.<br />\\r\\n<br />\\r\\nMusic: Fragile, Do Not Drop by Podington Bear (http://podingtonbear.com/)\",\"duration\":185,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90909218,\"mobile_url\":\"http://vimeo.com/m/90909218\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":54,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/470381023_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/470381023_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/470381023_100x75.jpg\",\"title\":\"Dolly through the MIA\",\"upload_date\":\"2014-04-03 17:55:19\",\"url\":\"http://vimeo.com/90909218\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":960}],\"albums\":[{\"created_on\":\"2014-03-27 14:51:13\",\"description\":\"\",\"id\":2800016,\"last_modified\":\"2014-05-05 12:31:58\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"Featured\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2800016\",\"videos\":[{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":46,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Rinko Kawauchi's first museum exhibition in the United States shows why she's one of the most important and popular female photographers working in Japan today. Kawauchi's unique installation of photographs at the MIA capture ordinary, fleeting moments of light and daily life, the photographs evoking everything from wonderment to the grotesque. A picture of a child breastfeeding. Ants carrying a grain of sugar. A tiny chrysalis on a blade of grass. She views the world with a playful, thought-provoking, and critically detached curiosity.<br />\\r\\n<br />\\r\\nExhibition Dates: February 20 - August 10, 2014\",\"duration\":114,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90059652,\"mobile_url\":\"http://vimeo.com/m/90059652\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":277,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469047957_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469047957_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469047957_100x75.jpg\",\"title\":\"New Pictures 9: Rinko Kawauchi\",\"upload_date\":\"2014-03-25 16:37:53\",\"url\":\"http://vimeo.com/90059652\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Exhibition Dates: November 2, 2013 - August 31, 2014<br />\\r\\n<br />\\r\\nMartin Weinstein, a former trial attorney turned photography connoisseur, has given more than 500 photographs to the MIA, in addition to numerous prints, paintings, and sculptures. \\\"31 Years: Gifts from Martin Weinstein\\\" celebrates the depth and quality of his decades of art giving.<br />\\r\\n<br />\\r\\nThe photographs on view include a who's who in the history of photography, from Margaret Bourke-White and Ansel Adams to Robert Mapplethorpe and Alec Soth. Together these pictures highlight many stories—personal, institutional, and historic.\",\"duration\":223,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87681978,\"mobile_url\":\"http://vimeo.com/m/87681978\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":28,\"tags\":\"photography, museum, art, exhibition, minneapolis, starts:2013-11-02, ends:2014-08-31\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465837390_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465837390_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465837390_100x75.jpg\",\"title\":\"31 Years: Gifts from Martin Weinstein\",\"upload_date\":\"2014-02-26 11:32:01\",\"url\":\"http://vimeo.com/87681978\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-06-04 17:01:39\",\"description\":\"Sponsored by the Mary and Mark Fiterman Lecture Fund<br />\\r\\nPresented by Friends of the Institute<br />\\r\\nhttp://new.artsmia.org/discover/lecture-video-archive/\",\"id\":2905962,\"last_modified\":\"2014-06-11 13:23:34\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477948619_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477948619_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477948619_100x75.jpg\",\"title\":\"Lectures\",\"total_videos\":8,\"url\":\"http://vimeo.com/album/2905962\",\"videos\":[{\"description\":\"Kathleen Weil-Garris Brandt traces the elusive sources of Michelangelo’s genius, having explored his artistic origins while cracking the mystery of a curious artwork. For decades, a small marble statue of a winged boy stood in the grand foyer of the French Cultural Services townhouse on New York’s Fifth Avenue. A well-known art professor at New York University, Brandt had seen it many times. But only after the Renaissance scholar viewed it in good light at a reception did she realize it could be a lost work of a teenage Michelangelo. Her claim set off a firestorm among art historians but convinced the Metropolitan Museum of Art, where The Little Archer is now on loan.\",\"duration\":4576,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97536029,\"mobile_url\":\"http://vimeo.com/m/97536029\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477948619_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477948619_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477948619_100x75.jpg\",\"title\":\"Kathleen Weil-Garris Brandt | Michelangelos Genius Nature vs Nurture\",\"upload_date\":\"2014-06-06 11:31:03\",\"url\":\"http://vimeo.com/97536029\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Emily Allchurch<br />\\nTokyo Story: Journey in the Footsteps of a Master<br />\\nMarch 13, 2014\",\"duration\":4423,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97445895,\"mobile_url\":\"http://vimeo.com/m/97445895\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477827151_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477827151_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477827151_100x75.jpg\",\"title\":\"Emily Allchurch | Tokyo Story\",\"upload_date\":\"2014-06-05 12:36:12\",\"url\":\"http://vimeo.com/97445895\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":594},{\"description\":\"Deborah Strebel Pierce<br />\\r\\nArt Theft and the FBI<br />\\r\\nFebruary 13, 2014\",\"duration\":4530,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97441563,\"mobile_url\":\"http://vimeo.com/m/97441563\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":3,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477824096_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477824096_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477824096_100x75.jpg\",\"title\":\"Deborah Strebel Pierce | Art Theft and the FBI\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441563\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":634},{\"description\":\"Eric Kandel, M.D.<br />\\r\\nThe Age of Insight: The Quest To Understand the Unconscious in Art, Mind, and Brain from Vienna 1900 to the Present<br />\\r\\nJanuary 9, 2014\",\"duration\":4849,\"embed_privacy\":\"anywhere\",\"height\":480,\"id\":97441562,\"mobile_url\":\"http://vimeo.com/m/97441562\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477827033_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477827033_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477827033_100x75.jpg\",\"title\":\"Eric Kandel, M.D. | The Age of Insight\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441562\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Alain Gruber<br />\\r\\nThe Splendour of Table Decoration in the Period of Louis XV and Madame de Pompadour<br />\\r\\nDecember 12, 2013\",\"duration\":4565,\"embed_privacy\":\"anywhere\",\"height\":478,\"id\":97441429,\"mobile_url\":\"http://vimeo.com/m/97441429\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823783_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823783_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823783_100x75.jpg\",\"title\":\"Alain Gruber | The Splendour of Table Decoration\",\"upload_date\":\"2014-06-05 11:47:11\",\"url\":\"http://vimeo.com/97441429\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"David Garrard Lowe<br />\\r\\nThe Artists of Montmartre<br />\\r\\nNovember 14, 2013\",\"duration\":3944,\"embed_privacy\":\"anywhere\",\"height\":478,\"id\":97441561,\"mobile_url\":\"http://vimeo.com/m/97441561\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823977_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823977_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823977_100x75.jpg\",\"title\":\"David Garrard Lowe | The Artists of Montmartre\",\"upload_date\":\"2014-06-05 11:48:53\",\"url\":\"http://vimeo.com/97441561\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Henry John Drewal<br />\\r\\nMaking Sense of African Art: Yoruba Arts and Culture<br />\\r\\nOctober 10, 2013\",\"duration\":4325,\"embed_privacy\":\"anywhere\",\"height\":476,\"id\":97370762,\"mobile_url\":\"http://vimeo.com/m/97370762\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":0,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823596_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823596_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823596_100x75.jpg\",\"title\":\"Henry John Drewal | Making Sense of African Art\",\"upload_date\":\"2014-06-04 17:02:28\",\"url\":\"http://vimeo.com/97370762\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640},{\"description\":\"Visual artist Nick Cave is a poet of sight, sound, motion and emotion, known for his larger-than-life “soundsuits,” mesmerizing hybrids of art and dance, made from scavenged and cast-off materials.  Since completing the MIA’s “Soundsuit” in 2010, Cave has achieved international prominence. One of Cave’s recent goals has been to nudge viewers from their work-a-day lethargy, lifting them to a place where they are free to dream again.\",\"duration\":4092,\"embed_privacy\":\"anywhere\",\"height\":464,\"id\":97370568,\"mobile_url\":\"http://vimeo.com/m/97370568\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":2,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477823028_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477823028_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477823028_100x75.jpg\",\"title\":\"Nick Cave | Body Of Work\",\"upload_date\":\"2014-06-04 17:00:21\",\"url\":\"http://vimeo.com/97370568\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":640}]},{\"created_on\":\"2014-04-16 11:24:07\",\"description\":\"\",\"id\":2830866,\"last_modified\":\"2014-05-05 16:53:07\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Recent Acquisitions\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2830866\",\"videos\":[{\"description\":\"Gift of funds from Gayle Fuguitt and Tom Veitch and the Decorative Arts Miscellaneous Purchase Fund. 2013.61<br />\\r\\n<br />\\r\\nArtist: Kati Touminen-Niittylä. Sculpted  in Finland, Europe in 2010.<br />\\r\\n<br />\\r\\nPresented by Jennifer Komar Olivarez, the Associate Curator of Decorative Arts, Textiles, and Sculpture.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":111,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065797,\"mobile_url\":\"http://vimeo.com/m/92065797\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"object:118851\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665027_100x75.jpg\",\"title\":\"Inverno II - from \\\"Winter\\\"\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065797\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift of Jim Billings with 50 years of friendship. 2013. 59<br />\\r\\n<br />\\r\\nArtist of the scroll: Motīlāl Josī, painted in Chittorgarh, Rajasthan in early 20th Century.<br />\\r\\n<br />\\r\\nPresented by Risha Lee, Ph.D. Jane Emison Assistant Curator of South and Southeast Asian Art.<br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":130,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065796,\"mobile_url\":\"http://vimeo.com/m/92065796\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":4,\"tags\":\"object:116488\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471665898_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471665898_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471665898_100x75.jpg\",\"title\":\"Scroll Painting Dedicated to Pabuji (India, Asia)\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065796\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Gift from the John R. Van Derlip Fund. 2013.56<br />\\r\\n<br />\\r\\nArtist: William Edmondson, Made in United States, 1938-1942.<br />\\r\\n<br />\\r\\nPresented by Karleen Gardner, the Director of Learning and Innovation. <br />\\r\\n<br />\\r\\n© Minneapolis Institute of Arts 2014\",\"duration\":88,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":92065795,\"mobile_url\":\"http://vimeo.com/m/92065795\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":6,\"tags\":\"object:118808\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/471664191_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/471664191_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/471664191_100x75.jpg\",\"title\":\"Ram\",\"upload_date\":\"2014-04-15 14:35:35\",\"url\":\"http://vimeo.com/92065795\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-04-15 13:25:25\",\"description\":\"\",\"id\":2829415,\"last_modified\":\"2014-05-30 15:35:32\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Current Exhibitions\",\"total_videos\":4,\"url\":\"http://vimeo.com/album/2829415\",\"videos\":[{\"description\":\"Exhibition Dates: November 2, 2013 - August 31, 2014<br />\\r\\n<br />\\r\\nMartin Weinstein, a former trial attorney turned photography connoisseur, has given more than 500 photographs to the MIA, in addition to numerous prints, paintings, and sculptures. \\\"31 Years: Gifts from Martin Weinstein\\\" celebrates the depth and quality of his decades of art giving.<br />\\r\\n<br />\\r\\nThe photographs on view include a who's who in the history of photography, from Margaret Bourke-White and Ansel Adams to Robert Mapplethorpe and Alec Soth. Together these pictures highlight many stories—personal, institutional, and historic.\",\"duration\":223,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87681978,\"mobile_url\":\"http://vimeo.com/m/87681978\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":28,\"tags\":\"photography, museum, art, exhibition, minneapolis, starts:2013-11-02, ends:2014-08-31\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465837390_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465837390_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465837390_100x75.jpg\",\"title\":\"31 Years: Gifts from Martin Weinstein\",\"upload_date\":\"2014-02-26 11:32:01\",\"url\":\"http://vimeo.com/87681978\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"In this exhibition, simply titled \\\"Sacred,\\\" curators have assembled art from every corner of the world. Although these works span time, distance, and disparate cultures, they share an evolving sense of the sacred.<br />\\r\\n<br />\\r\\nEach of the ten galleries in the exhibition features an installation or \\\"mini-show\\\" designed around different themes or narratives inspired by the word \\\"sacred.\\\" Conventionally used to describe something or someone imbued with divinity, the word has evolved as societies have become more diverse and secular. What's sacred today? The word hinges on the speaker: what is sacred is often very personal.<br />\\r\\n<br />\\r\\nMany of the objects in these galleries were never intended for display in a museum. Taken out of their usual contexts, they ask to be seen differently, posing provocative questions about what is sacred. How does their presence here change our perception of them?<br />\\r\\n<br />\\r\\nIn these juxtapositions, you can explore historical and contemporary expressions of the divine, the spiritual, the essential, and the beloved while reflecting on the meaning of the word \\\"sacred.\\\" What does it mean to you?\",\"duration\":134,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":93167313,\"mobile_url\":\"http://vimeo.com/m/93167313\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":46,\"tags\":\"museum, art, exhibition, minneapolis\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/473142664_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/473142664_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/473142664_100x75.jpg\",\"title\":\"The Sacred -- Exhibition at the Minneapolis Institute of Arts\",\"upload_date\":\"2014-04-28 13:09:26\",\"url\":\"http://vimeo.com/93167313\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":12,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:23:40\",\"description\":\"The MIA’s Artist in Residence program (AIR) is designed to enhance and enliven the museum’s encyclopedic holdings of contemporary and historical art, resulting in projects that recontextualize or reinterpret art in the collection.<br />\\r\\n<br />\\r\\nResident artists create site-specific works, collaborate on projects with the community, and mine the museum’s collections to create installations that juxtapose artworks from a range of historical periods and aesthetic traditions.<br />\\r\\n<br />\\r\\nBringing their individual experiences and perspectives to the museum, AIR creative thinkers and makers provide the community with a fresh perspective on the meaning and power of art.\",\"id\":2799770,\"last_modified\":\"2014-03-27 12:23:40\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465842316_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465842316_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465842316_100x75.jpg\",\"title\":\"Artist in Residence\",\"total_videos\":1,\"url\":\"http://vimeo.com/album/2799770\",\"videos\":[{\"description\":\"Mark Dion is an American artist best known for his seductive and often fantastical cabinets of curiosity. Based on 17th-century Wunderkammern (\\\"chambers of wonder\\\"), his work explores the relationships among art, science, and history through pseudo-scientific methods of investigation and display. <br />\\r\\n<br />\\r\\nHis new installation, Curator's Office, commissioned for the exhibition \\\"More Real? Art in the Age of Truthiness,\\\" claims the artist rediscovered an office used in the 1950s by the first curator of modern art at the Minneapolis Institute of Arts. Within the context of a museum exhibition, however, Curator's Office also becomes a \\\"period room,\\\" an installation of objects, furnishings, and architecture meant to illustrate a historical moment by re-creating its interior domestic spaces. Period rooms are popular museum attractions that are both authentic (in their contents) and false (in their detachment from their original contexts.)\",\"duration\":131,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685777,\"mobile_url\":\"http://vimeo.com/m/87685777\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"mia:object=116294, mia:exhibition=more-real\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/465842316_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/465842316_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/465842316_100x75.jpg\",\"title\":\"MIA Artist in Residence: Mark Dion\",\"upload_date\":\"2014-02-26 12:10:36\",\"url\":\"http://vimeo.com/87685777\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:19:20\",\"description\":\"\",\"id\":2799756,\"last_modified\":\"2014-04-15 13:28:57\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469446016_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469446016_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469446016_100x75.jpg\",\"title\":\"Events\",\"total_videos\":3,\"url\":\"http://vimeo.com/album/2799756\",\"videos\":[{\"description\":\"The Minneapolis Institute of Arts, in collaboration with 89.3 The Current and Vita.mn, was proud to host a special concert featuring hip-hop artist Dessa of the Doomtree collective. Ticket sales from this performance seeded a new scholarship for under-served teens as part of the museum's continued commitment to youth programs.\",\"duration\":180,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90344285,\"mobile_url\":\"http://vimeo.com/m/90344285\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":24,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469446016_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469446016_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469446016_100x75.jpg\",\"title\":\"Dessa at the MIA\",\"upload_date\":\"2014-03-28 13:02:49\",\"url\":\"http://vimeo.com/90344285\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"On July 16, 2012, the MIA hosted presentations by top trend experts for its staff, Trustees, and colleagues from the Toledo Museum of Art, the Andy Warhol Museum, the Carnegie Museum of Art, the High Museum of Art, and The Nelson-Atkins Museum. <br />\\n<br />\\nCalled \\\"The Art of Ideas,\\\" this forum is part of a broader initiative to develop innovative approaches to some of the most pressing challenges faced by art museums today.\",\"duration\":310,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90330274,\"mobile_url\":\"http://vimeo.com/m/90330274\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469437723_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469437723_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469437723_100x75.jpg\",\"title\":\"Art of Ideas at the MIA\",\"upload_date\":\"2014-03-28 10:38:51\",\"url\":\"http://vimeo.com/90330274\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The MIA is proud to present Body/Head as the first installation of Sound.Art.MIA, a new contemporary music program at the museum that invites all your senses to experiment, create, and play.<br />\\r\\n<br />\\r\\nLocal virtuoso musician Paul Metzger kicked off the evening with haunting sounds from his 23-string banjo. <br />\\r\\nBody/Head performed against a backdrop of slow-motion film projection, which serves as a powerful and visionary dream narrative.\",\"duration\":71,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744587,\"mobile_url\":\"http://vimeo.com/m/89744587\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":11,\"tags\":\"event, thirdthursday, soundart\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468615027_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468615027_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468615027_100x75.jpg\",\"title\":\"Third Thursday 2/27 Sound Art MIA\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744587\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-27 12:17:52\",\"description\":\"The Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. Begun in 1975 as a creative partnership with the MIA, the MAEP was founded by a group of regional artists interested in creating an innovative exhibition and programming space. What began as a year-long agreement has been extended into an ongoing relationship between the Minnesota artist community and the MIA.<br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"id\":2799752,\"last_modified\":\"2014-05-30 15:44:14\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Minnesota Artists Exhibition Program [MAEP]\",\"total_videos\":4,\"url\":\"http://vimeo.com/album/2799752\",\"videos\":[{\"description\":\"Artist and bookmaker Chad Rutter explores American material and cultural geography through a wide range of media, including photography and sculpture. Floodplain is his first one-person show, carrying his interests forward while reflect his understanding of transcendentalist philosophy, which he links to American values of individualism, car culture, and exploration. Pond is a brand-new piece presenting a running text of Henry David Thoreau's Walden on a custom-programmed highway message board. By converting this classic meditation on the beauty of wilderness and creative isolation into tiny three-line bits of text, Rutter's installation conflates the private and slow-paced act of reading with the fast-lane drive through the natural landscape. Rutter is a recipient of the Minnesota State Arts Board Artist Initiative grant and is the publisher of Mystery Spot books. Thanks to Street Smart Rental of Lino Lakes for their support of Floodplain.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":117,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95885337,\"mobile_url\":\"http://vimeo.com/m/95885337\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":12,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475904975_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475904975_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475904975_100x75.jpg\",\"title\":\"Chad Rutter: FLOODPLAIN\",\"upload_date\":\"2014-05-20 13:33:23\",\"url\":\"http://vimeo.com/95885337\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The new sculptures in Amy Toscani's CHASTUSHKI exhibition have been carefully churned through her distinctly Midwestern aesthetic, which is to say she draws equally from thrift-store treasures, her wry sense of humor, and found sculptures that can also be described as \\\"suburban sublime.\\\" For those familiar with her work, these new pieces will show her important shift to working on a human scale and more quickly. Since her use of art-historical concepts such as ready-made and recycling are so elastic, she can develop forms that become endearingly awkward and self-effacing. Cuccu began as a found sad-eyed dog figurine, the top portion seamlessly transitioning into Toscani's sculpted, oversize lower body, a scale at once hilarious and pathetic. Toscani is a recent recipient of the McKnight Artist Fellowship and has had numerous one-person and group shows, most recently at Rosalux Gallery in Minneapolis.<br />\\r\\n<br />\\r\\nChad Rutter and Amy Toscani Exhibition Dates: April 18 - June 29, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/amy-toscani-and-chad-rutter/<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\n<br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":108,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":95755169,\"mobile_url\":\"http://vimeo.com/m/95755169\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":8,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/475732677_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/475732677_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/475732677_100x75.jpg\",\"title\":\"Amy Toscani: CHASTUSHKI\",\"upload_date\":\"2014-05-19 10:57:07\",\"url\":\"http://vimeo.com/95755169\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The driving principle of Williams's MAEP exhibition is to display the science and technology of vision. He creates fascinating sculptural installations that re-present digital and analog images and \\\"utilize photography as a technical and philosophical strategy.\\\" Most recently, he has been interested in ocular phenomena such as the persistence of vision, linear perspective, and the stereoscopic illusion. <br />\\r\\n<br />\\r\\nExhibition: Jaron Childs and Jonathan Bruce Williams Exhibition Dates: January 17 - March 30, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/jar...<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":93,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744586,\"mobile_url\":\"http://vimeo.com/m/89744586\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":14,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468620145_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468620145_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468620145_100x75.jpg\",\"title\":\"Jonathan Bruce Williams - Anti-Newton\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744586\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jaron Childs' exhibition presents a new series of hyper-realistic and finely detailed paintings, based on his own photographs, that are a rejoinder to contemporary attitudes about beauty in painting. He has done this by carefully choosing images that both test the limits of acceptable sentimentality for critical art and offer visual pleasures that also contain sensations of alienation and loss. With a relatively small number of works, \\\"How to make a world\\\" is meant to engage the various and contradicting claims made on painting regarding beauty, artistic merit, and its relevance as a medium.<br />\\r\\n<br />\\r\\nExhibition: Jaron Childs and Jonathan Bruce Williams Exhibition Dates: January 17 - March 30, 2014<br />\\r\\nhttp://new.artsmia.org/exhibition/jar...<br />\\r\\n<br />\\r\\nThe Minnesota Artists Exhibition Program (MAEP) is a curatorial program of the Minneapolis Institute of Arts (MIA) dedicated to exhibiting and supporting artists living and working in the state of Minnesota. <br />\\r\\nhttp://new.artsmia.org/exhibitions/maep/\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89744585,\"mobile_url\":\"http://vimeo.com/m/89744585\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":18,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/468615412_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/468615412_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/468615412_100x75.jpg\",\"title\":\"Jaron Childs - How to Make a World\",\"upload_date\":\"2014-03-21 16:28:02\",\"url\":\"http://vimeo.com/89744585\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-26 14:50:14\",\"description\":\"\",\"id\":2798271,\"last_modified\":\"2014-03-26 18:18:12\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204083_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204083_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204083_100x75.jpg\",\"title\":\"Voices of the Community\",\"total_videos\":8,\"url\":\"http://vimeo.com/album/2798271\",\"videos\":[{\"description\":\"Film director and producer and Professor of French and Director of the French and Francophone Studies program at Carleton College, on the topic of Mali.\",\"duration\":190,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161609,\"mobile_url\":\"http://vimeo.com/m/90161609\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":45,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204083_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204083_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204083_100x75.jpg\",\"title\":\"Voices of the Community: Chérif KeÏta, Mali\",\"upload_date\":\"2014-03-26 16:51:25\",\"url\":\"http://vimeo.com/90161609\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Regents Professor Emeritus of Medieval Studies and Cataloguer of Oriental Manuscripts at the Hill Museum and Manuscript Library at Saint John's University, on the topic of Ethiopian Manuscripts\",\"duration\":207,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161586,\"mobile_url\":\"http://vimeo.com/m/90161586\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":10,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469204121_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469204121_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469204121_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Getatchew Haile, Ethiopia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161586\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Assistant Professor of Sociology at the University of Minnesota, on the topic of Somalia\",\"duration\":195,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90161584,\"mobile_url\":\"http://vimeo.com/m/90161584\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":15,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469202141_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469202141_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469202141_100x75.jpg\",\"title\":\"Voices of the Community: Dr. Cawo Abdi, Somalia\",\"upload_date\":\"2014-03-26 16:51:12\",\"url\":\"http://vimeo.com/90161584\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Student Advisor of the African Nation Student Association at the University of St. Thomas, on the topic of Liberia<br />\\r\\ncredit: 2013 Minneapolis Institute of Arts\",\"duration\":260,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685191,\"mobile_url\":\"http://vimeo.com/m/87685191\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203658_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203658_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203658_100x75.jpg\",\"title\":\"Voices of the Community: Tarkor Zehn, Liberia\",\"upload_date\":\"2014-02-26 12:05:09\",\"url\":\"http://vimeo.com/87685191\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Ethnomusicologist, composer, master drummer; and director of African music ensembles at Macalester College, the University of Saint Thomas, and the University of Minnesota, on the topic of Ghana.\",\"duration\":292,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87685190,\"mobile_url\":\"http://vimeo.com/m/87685190\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":9,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203865_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203865_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203865_100x75.jpg\",\"title\":\"Voices of the Community: Sowah Mensah, Ghana\",\"upload_date\":\"2014-02-26 12:05:09\",\"url\":\"http://vimeo.com/87685190\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Founding member of the Igbo Women League of Minnesota, on the topic of Igbo.\",\"duration\":188,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":87684937,\"mobile_url\":\"http://vimeo.com/m/87684937\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":7,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469203947_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469203947_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469203947_100x75.jpg\",\"title\":\"Voices of the Community: Rositta Nwaokolo, Nigeria (Igbo)\",\"upload_date\":\"2014-02-26 12:02:41\",\"url\":\"http://vimeo.com/87684937\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]},{\"created_on\":\"2014-03-26 12:43:44\",\"description\":\"Presented each fall and spring, \\\"New Pictures\\\" highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nhttp://www2.artsmia.org/blogs/new-pictures/exhibition-archive/\",\"id\":2798066,\"last_modified\":\"2014-05-30 15:06:32\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures\",\"total_videos\":9,\"url\":\"http://vimeo.com/album/2798066\",\"videos\":[{\"description\":\"Noriko Furunishi's monumental landscape photographs inaugurate New Pictures, a semiannual series dedicated to innovative work by emerging artists from around the world. Presented each fall and spring, the series highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nFurunishi, who was born in Kobe, Japan, and lives in Los Angeles, uses a large-format 4 x 5 camera to make several film images of geographical sites in the United States. Each image represents a different point of view, typically including one with a span from the tip of the artists toes into the foreground and landscape. After selecting four to six images, Furunishi scans the negatives onto a computer and then digitally stitches them together with Adobe Photoshop to create seemingly continuous landscapes. A close look reveals that some images have been flipped upside down or rearranged within the composition. The vertical orientation of Furunishi's photographs recalls the complex formal compositions of historical Chinese and Japanese hanging scroll paintings, providing a contemporary perspective on the MIA's renowned Asian collection.<br />\\r\\n<br />\\r\\nFurunishi's photographs suggest the new visual conditions and technological possibilities of our own time through their subtly warped vistas, which upend preconceptions about the land beneath our feet and the skies overhead.\",\"duration\":241,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":89751956,\"mobile_url\":\"http://vimeo.com/m/89751956\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":79,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469158561_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469158561_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469158561_100x75.jpg\",\"title\":\"New Pictures 1: Noriko Furunishi\",\"upload_date\":\"2014-03-21 18:08:12\",\"url\":\"http://vimeo.com/89751956\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Abstract photographs by the German artist Marco Breuer (b. 1966) are featured in this \\\"New Pictures\\\" exhibition, the second in a semiannual series dedicated to innovative new work by artists from around the world. Presented each fall and spring, New Pictures highlights the vital experimentations in photography and new media undertaken by artists who grapple with making images that address today's culture.<br />\\r\\n<br />\\r\\nBreuer's works invite close inspection of their complex and delicate surfaces, colors, and forms. At the same time, they challenge our assumptions by raising the question \\\"What is a photograph?\\\" Breuer omits the two elements most commonly associated with photographs: the camera and a representational picture of the world. By sanding, scraping, burning, embossing, and cutting the light-sensitive surface of the photographic paper, he emphasizes the medium's fundamental elements: light-sensitive photographic paper, and light. In the end, Breuer's images are not just pictures, they are physical marks of the material world.<br />\\r\\n<br />\\r\\nTo capture the complexity of Breuer's approach to photography, a second edition of \\\"New Pictures 2: Marco Breuer\\\" will be on view starting March 12. At that time, the artist will alter the space to evoke a darkroom and will create a site-specific installation addressing the relationship between photography and drawing.\",\"duration\":87,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134383,\"mobile_url\":\"http://vimeo.com/m/90134383\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":58,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469154005_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469154005_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469154005_100x75.jpg\",\"title\":\"New Pictures 2: Marco Breuer\",\"upload_date\":\"2014-03-26 12:11:33\",\"url\":\"http://vimeo.com/90134383\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The third exhibition in the Minneapolis Institute of Arts' new photography series presents the innovative work of Los Angeles photographer James Welling.<br />\\r\\n<br />\\r\\n\\\"New Pictures 3: James Welling, Glass House\\\" showcases an elegant photographic series of Philip Johnson's modernist architectural masterpiece, Glass House (1949).<br />\\r\\n<br />\\r\\nUsing a digital camera and color filters, Welling experiments with new possibilities for architectural photography, capturing the luminous effects of Johnson's glass-skinned structure at different times and with changing light conditions over a three-year period (2006--2008.) These atmospheric works reveal the ambiguity between the interior built space and exterior natural space evoked by Johnson's home. These pictures suggest a physical experience of space and form that is unique in architectural photography.<br />\\r\\n<br />\\r\\nJames Welling has been producing groundbreaking work since the 1970s that possesses a rare combination of conceptual depth and technical skill. Through the last three decades, he continues to challenge himself as a photographer and offers viewers new discoveries through thoughtful and visually arresting photographs that suggest overlooked aspects of the medium.<br />\\r\\n<br />\\r\\nIn the last five years, he has taken on the challenge of architecture and produced a body of work that offers a new take on representations of architecture within a natural site. His experimental use of color and light to explore spatiality makes him a particularly important artist to feature in the MIA's 'New Pictures' series.<br />\\r\\n<br />\\r\\nWelling, a professor in the Department of Art at the University of California, Los Angeles, first gained national recognition in the 1970s and 1980s for his carefully staged black-and-white photographs employing such unconventional mediums as pastry dough, gelatin, and tinfoil. These early works spoke to the role of the photographer in staging the vision and narrative of each picture. Welling's work has been exhibited internationally and was the subject of a retrospective exhibition, \\\"James Welling Photographs, 1974--1999.\\\"\",\"duration\":259,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134384,\"mobile_url\":\"http://vimeo.com/m/90134384\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":85,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469155427_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469155427_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469155427_100x75.jpg\",\"title\":\"New Pictures 3: James Welling\",\"upload_date\":\"2014-03-26 12:11:34\",\"url\":\"http://vimeo.com/90134384\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"The fourth edition of \\\"New Pictures,\\\" a semi-annual series dedicated to showcasing vital experiments in photography and new media by artists from around the world, features a selection of photographs by Angela Strassheim from her series Evidence. These pictures draw on photography's historical association with images of death. In the late 19th century, families often took pictures of deceased children and loved ones to preserve their memories. At the same time, homicide detectives, lawyers, and journalists have long used photographs as evidence of murders and other crimes. Employing forensic techniques to record domestic interiors where murders have taken place in New York, Massachusetts, and Minneapolis, Strassheim merges these two deeply rooted themes of memory and crime in her images.<br />\\r\\n<br />\\r\\nA graduate of the Minneapolis College of Art and Design and the M.F.A. program at Yale University, Strassheim received training and a certificate in forensic photography. During a six-year period between her undergraduate and graduate studies, she earned a living as a forensic photographer, taking pictures of crime scenes and autopsies. Since 2009, she has applied this on-the-job experience to produce Evidence, a more nuanced and less scientific examination of domestic crime. These photographs reveal the eerie vestiges of past lives in homes that are now inhabited by new families. To contextualize the long history of photography with the genre of crime and murder, the exhibition also features a display of photographs from local historical collections.\",\"duration\":162,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134386,\"mobile_url\":\"http://vimeo.com/m/90134386\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":1,\"stats_number_of_plays\":66,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469155716_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469155716_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469155716_100x75.jpg\",\"title\":\"New Pictures 4: Angela Strassheim\",\"upload_date\":\"2014-03-26 12:11:34\",\"url\":\"http://vimeo.com/90134386\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"A few years ago, a friend gave artist Jason Fulford a manila envelope, found at a flea market. The envelope contained 80 photographs of mushrooms, each composed and annotated with the care of someone who just had to be a mushroom collector. These anonymous photographs inspired Fulford to create his own collection of photographs, publications, sculptures, and performances, all under the umbrella of the Soon Institute. Similar to the lifecycle of mushrooms, the project goes underground and periodically sprouts up in various artistic forms (including The Mushroom Collector, a book he published in 2010), in unexpected locations, such as New York, California, and Amsterdam.<br />\\r\\n<br />\\r\\nFulford's pictures appear to be unremarkable shots of commonplace objects, people, and places. Yet a closer look reveals humorous and subtle oddities. Fulford's images reveal themselves through repetition, sequences, and relationships between form and shadow, abstraction and reality. His work is now on view in \\\"New Pictures 5\\\" in Gallery 262.<br />\\r\\n<br />\\r\\nFulford is a photographer and co-founder of the publishing house J&L Books in Atlanta / New York, and the author of several titles. He has lectured widely, and is a contributing editor to Blind Spot magazine. Fulford's photographs have been featured in magazines and books.\",\"duration\":153,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134389,\"mobile_url\":\"http://vimeo.com/m/90134389\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":29,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156337_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156337_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156337_100x75.jpg\",\"title\":\"New Pictures 5: Jason Fulford\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134389\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Friday, April 20, 2012—Sunday, August 5, 2012<br />\\r\\nLinda and Lawrence Perlman Gallery (262)<br />\\r\\nFree Exhibition<br />\\r\\n<br />\\r\\nAs part of our \\\"New Pictures\\\" series devoted to innovation in contemporary photography, the Minneapolis Institute of Arts invited British photographer Martin Parr to cross the pond and shoot photos covering the wealth of winter activities in Minnesota, from pond hockey to ice fishing.<br />\\r\\n<br />\\r\\nThe results of his endeavor are on view in his exhibition, \\\"New Pictures 6: Martin Parr,\\\" opening April 20 in the Linda and Lawrence Perlman Gallery (262).<br />\\r\\n<br />\\r\\nA member of the esteemed Magnum Photos, an international photographers' cooperative, Parr is one of the most renowned and celebrated photographers working today. He is known for his innovative use of color photography and his humorous approach to documenting the daily rituals of life. Parr is also recognized for his work as an editor of photo-based publications, and is credited with more than twenty compilations of his own work. In 2008, he was awarded the Royal Photographic Society Centenary Medal and the Baume & Mercier award for his career contributions to contemporary photography.\",\"duration\":166,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90134391,\"mobile_url\":\"http://vimeo.com/m/90134391\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":23,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469156574_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469156574_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469156574_100x75.jpg\",\"title\":\"New Pictures 6: Martin Parr\",\"upload_date\":\"2014-03-26 12:11:35\",\"url\":\"http://vimeo.com/90134391\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Stan Douglas is a photographer, filmmaker, and installation artist whose works have been exhibited internationally, including in three Venice Biennials and three dOCUMENTAs. Douglas's photographs examine how images and memory shape interpretations of history. To create his photographs, Douglas often assumes the role of a photojournalist who travels back in time to reinterpret key events in social and political history, such as the 1975 revolution in Angola and social riots in Canada during the 1930s and 1970s. After conducting intensive research, he restages these events using actors, costumes, props, and sets. These pictures are meticulously composed down to the slightest gestures and period styles.<br />\\r\\n<br />\\r\\nDouglas was awarded the prestigious Infinity Award for Art by the International Center for Photography in 2012.<br />\\r\\n<br />\\r\\nThe Arnold Neman Lecture Series is made possible thanks to a generous gift from the Arnold and Augusta Newman Foundation.<br />\\r\\n<br />\\r\\nGenerous support for New Pictures is provided by the W. Duncan and Nivin MacMillan Foundation.\",\"duration\":118,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96937899,\"mobile_url\":\"http://vimeo.com/m/96937899\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":5,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/477144579_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/477144579_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/477144579_100x75.jpg\",\"title\":\"New Pictures 7: Stan Douglas\",\"upload_date\":\"2014-05-30 15:05:34\",\"url\":\"http://vimeo.com/96937899\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Jones gained notoriety for photographing psychoanalysts' therapy rooms in the late 1990s and has continued to explore this provocative subject. In Analyst (Couch) (I), 2008, she shows the therapist's viewpoint: a banal-looking couch covered with a red blanket bears the imprint of the patient who lay upon it during a session. Arrangement (Analyst) (I), 2007, focuses on the objects that have been carefully arranged by the analyst to create a soothing environment for the patient.<br />\\r\\n<br />\\r\\nTwo large-scale diptychs—one showing a horse and the other a rose bush—refer to early stereographic prints and explore the potential for photography to reveal uncanny perspectives. In The Rose Gardens (display: III / white) (II) and (III), of 2008, Jones photographed a rose bush from both front and back so viewers can contemplate both viewpoints simultaneously. In Horse (profile / black) (II) and (III), of 2012, she paired two images of a horse, whose majestic presence is compressed through the process of doubling.<br />\\r\\n<br />\\r\\nJones earned her master of fine arts degree at Goldsmith College in London and has been exhibiting internationally for over twenty years. She is represented by Maureen Paley, London, and Anton Kern Gallery, New York, and is also a tutor at The Royal College of Art in London. A new monograph published by Violette Editions, with contributions by David Campany, Brian Dillon, and A. M. Homes, is now available in bookshops.<br />\\r\\n<br />\\r\\nMusic credit: \\\"White Lotus\\\" by Kevin Macleod\",\"duration\":120,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":96710338,\"mobile_url\":\"http://vimeo.com/m/96710338\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":6,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/476841556_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/476841556_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/476841556_100x75.jpg\",\"title\":\"New Pictures 8: Sarah Jones\",\"upload_date\":\"2014-05-28 11:04:42\",\"url\":\"http://vimeo.com/96710338\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280},{\"description\":\"Rinko Kawauchi's first museum exhibition in the United States shows why she's one of the most important and popular female photographers working in Japan today. Kawauchi's unique installation of photographs at the MIA capture ordinary, fleeting moments of light and daily life, the photographs evoking everything from wonderment to the grotesque. A picture of a child breastfeeding. Ants carrying a grain of sugar. A tiny chrysalis on a blade of grass. She views the world with a playful, thought-provoking, and critically detached curiosity.<br />\\r\\n<br />\\r\\nExhibition Dates: February 20 - August 10, 2014\",\"duration\":114,\"embed_privacy\":\"anywhere\",\"height\":720,\"id\":90059652,\"mobile_url\":\"http://vimeo.com/m/90059652\",\"stats_number_of_comments\":0,\"stats_number_of_likes\":0,\"stats_number_of_plays\":277,\"tags\":\"\",\"thumbnail_large\":\"http://i.vimeocdn.com/video/469047957_640.jpg\",\"thumbnail_medium\":\"http://i.vimeocdn.com/video/469047957_200x150.jpg\",\"thumbnail_small\":\"http://i.vimeocdn.com/video/469047957_100x75.jpg\",\"title\":\"New Pictures 9: Rinko Kawauchi\",\"upload_date\":\"2014-03-25 16:37:53\",\"url\":\"http://vimeo.com/90059652\",\"user_id\":24860937,\"user_name\":\"Minneapolis Institute of Arts\",\"user_portrait_huge\":\"http://i.vimeocdn.com/portrait/7149390_300x300.jpg\",\"user_portrait_large\":\"http://i.vimeocdn.com/portrait/7149390_100x100.jpg\",\"user_portrait_medium\":\"http://i.vimeocdn.com/portrait/7149390_75x75.jpg\",\"user_portrait_small\":\"http://i.vimeocdn.com/portrait/7149390_30x30.jpg\",\"user_url\":\"http://vimeo.com/artsmia\",\"width\":1280}]}]}\n")
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
 * Swiper 2.6.1
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
 * Released on: May 6, 2014
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
            if (params['on' + callback]) _this.fireCallback(params['on' + callback], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
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
    _this.disableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = false;
        _this.h.removeEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

    _this.enableMousewheelControl = function () {
        if (!_this._wheelEvent) return false;
        params.mousewheelControl = true;
        _this.h.addEventListener(_this.container, _this._wheelEvent, handleMousewheel);
        return true;
    };

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
            if (params.onTouchStart) _this.fireCallback(params.onTouchStart, _this, event);
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
            if (params.onTouchMove) _this.fireCallback(params.onTouchMove, _this, event);

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
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
            _this.callPlugins('onTouchEnd');
            return;
        }
        if (!_this.isMoved || _this.positions.current > 0 || _this.positions.current < -maxPosition) {
            _this.swipeReset();
            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
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

            if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
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
        if (params.onTouchEnd) _this.fireCallback(params.onTouchEnd, _this, event);
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
                // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case
                transformMatrix = new WebKitCSSMatrix(curStyle.webkitTransform === 'none' ? '' : curStyle.webkitTransform);
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
 AngularJS v1.2.16
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,U,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.16/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function ab(b){if(null==b||Ca(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:w(b)||M(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(P(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(ab(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Qb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Qb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Rb(b){return function(a,c){b(c,a)}}function bb(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Sb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function D(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Sb(b,a);return b}function Y(b){return parseInt(b,
10)}function Tb(b,a){return D(new (D(function(){},{prototype:b})),a)}function C(){}function Da(b){return b}function aa(b){return function(){return b}}function E(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function w(b){return"string"===typeof b}function vb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function M(b){return"[object Array]"===wa.call(b)}function P(b){return"function"===typeof b}
function cb(b){return"[object RegExp]"===wa.call(b)}function Ca(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function db(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Oa(b,a){var c=db(b,a);0<=c&&b.splice(c,1);return a}function ba(b,a){if(Ca(b)||b&&b.$evalAsync&&b.$watch)throw Pa("cpws");
if(a){if(b===a)throw Pa("cpi");if(M(b))for(var c=a.length=0;c<b.length;c++)a.push(ba(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ba(b[d]);Sb(a,c)}}else(a=b)&&(M(b)?a=ba(b,[]):Na(b)?a=new Date(b.getTime()):cb(b)?a=RegExp(b.source):X(b)&&(a=ba(b,{})));return a}function Ub(b,a){a=a||{};for(var c in b)!b.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(M(b)){if(!M(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(cb(b)&&cb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ca(b)||Ca(a)||M(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!P(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!P(a[d]))return!1;
return!0}return!1}function Vb(){return U.securityPolicy&&U.securityPolicy.isActive||U.querySelector&&!(!U.querySelector("[ng-csp]")&&!U.querySelector("[data-ng-csp]"))}function eb(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!P(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
s:Ca(a)?c="$WINDOW":a&&U===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function Wb(b){return w(b)?JSON.parse(b):b}function Qa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=K(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=y(b).clone();try{b.empty()}catch(a){}var c=y("<div>").append(b).html();try{return 3===b[0].nodeType?K(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+K(b)})}catch(d){return K(c)}}function Xb(b){try{return decodeURIComponent(b)}catch(a){}}function Yb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Xb(c[0]),B(d)&&(b=B(c[1])?Xb(c[1]):!0,a[d]?M(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Zb(b){var a=[];q(b,function(b,d){M(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function wb(b){return za(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(U.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function $b(b,a){var c=function(){b=y(b);if(b.injector()){var c=b[0]===U?"document":ha(b);throw Pa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ac(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(O&&!d.test(O.name))return c();O.name=O.name.replace(d,"");Ea.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function fb(b,a){a=a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function xb(b,a,c){if(!b)throw Pa("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&M(b)&&(b=b[b.length-1]);xb(P(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Pa("badname",a);}function bc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&P(b)?eb(e,b):b}function yb(b){var a=b[0];b=b[b.length-1];if(a===b)return y(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return y(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Zc(b){D(b,{bootstrap:$b,copy:ba,extend:D,equals:xa,element:y,forEach:q,injector:ac,noop:C,bind:eb,toJson:qa,fromJson:Wb,identity:Da,isUndefined:E,isDefined:B,isString:w,isFunction:P,isObject:X,isNumber:vb,isElement:Tc,isArray:M,
version:$c,isDate:Na,lowercase:K,uppercase:Fa,callbacks:{counter:0},$$minErr:t,$$csp:Vb});Sa=Yc(O);try{Sa("ngLocale")}catch(a){Sa("ngLocale",[]).provider("$locale",ad)}Sa("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",cc).directive({a:cd,input:dc,textarea:dc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,
ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ec,ngRequired:ec,ngValue:Id}).directive({ngInclude:Jd}).directive(zb).directive(fc);a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:gc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,
$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Ta(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Ab(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,r,z;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=y(k[m]),l?p.triggerHandler("$destroy"):l=!l,r=0,p=(z=p.children()).length;r<p;r++)e.push(Ga(z[r]));return g.apply(this,arguments)}
var g=Ga.fn[b],g=g.$original||g;e.$original=g;Ga.fn[b]=e}function N(b){if(b instanceof N)return b;w(b)&&(b=ca(b));if(!(this instanceof N)){if(w(b)&&"<"!=b.charAt(0))throw Bb("nosel");return new N(b)}if(w(b)){var a=b;b=U;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();c=[];if(Cb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=ea[e]||ea._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];
d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Db(this,b);y(U.createDocumentFragment()).append(this)}else Db(this,b)}function Eb(b){return b.cloneNode(!0)}function Ha(b){hc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ha(b[a])}function ic(b,a,c,d){if(B(d))throw Bb("offargs");var e=la(b,"events");la(b,"handle")&&(E(a)?q(e,
function(a,c){Fb(b,c,a);delete e[c]}):q(a.split(" "),function(a){E(c)?(Fb(b,a,e[a]),delete e[a]):Oa(e[a]||[],c)}))}function hc(b,a){var c=b[gb],d=Ua[c];d&&(a?delete Ua[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),ic(b)),delete Ua[c],b[gb]=s))}function la(b,a,c){var d=b[gb],d=Ua[d||-1];if(B(c))d||(b[gb]=d=++me,d=Ua[d]={}),d[a]=c;else return d&&d[a]}function jc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];
D(d,a)}else return d}function Gb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function hb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ca((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ca(a)+" "," ")))})}function ib(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ca(a);-1===c.indexOf(" "+a+" ")&&
(c+=a+" ")});b.setAttribute("class",ca(c))}}function Db(b,a){if(a){a=a.nodeName||!B(a.length)||Ca(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function kc(b,a){return jb(b,"$"+(a||"ngController")+"Controller")}function jb(b,a,c){b=y(b);9==b[0].nodeType&&(b=b.find("html"));for(a=M(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<g;e++)if((c=b.data(a[e]))!==s)return c;b=y(d.parentNode||11===d.nodeType&&d.host)}}function lc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ha(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}
function mc(b,a){var c=kb[a.toLowerCase()];return c&&nc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||U);if(E(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Ub(a[e||
c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ia(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===s&&(c=b.$$hashKey=bb()):c=b;return a+":"+c}function Va(b){q(b,this.put,this)}function oc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,
""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):M(b)?(c=b.length-1,Ra(b[c],"fn"),a=b.slice(0,c)):Ra(b,"fn",!0);return a}function ac(b){function a(a){return function(b,c){if(X(b))q(b,Rb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(P(b)||M(b))b=n.instantiate(b);if(!b.$get)throw Wa("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(w(a))for(c=
Sa(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else P(a)?b.push(n.invoke(a)):M(a)?b.push(n.invoke(a)):Ra(a,"module")}catch(m){throw M(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Wa("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Wa("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),
a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{l.shift()}}function d(a,b,e){var g=[],h=oc(a),f,l,k;l=0;for(f=h.length;l<f;l++){k=h[l];if("string"!==typeof k)throw Wa("itkn",k);g.push(e&&e.hasOwnProperty(k)?e[k]:c(k))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(M(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||P(e)?e:c},get:c,annotate:oc,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}
var f={},h="Provider",l=[],k=new Va,m={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,b){Aa(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Wa("unpr",l.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+
h);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||C)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==K(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},
function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(z--,0===z)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(F,function(a){a()});v=b(T,a)})()}function f(){x=null;J!=h.url()&&(J=h.url(),q(ma,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,
n=b.setTimeout,p=b.clearTimeout,r={};h.isMock=!1;var z=0,u=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){z++};h.notifyWhenNoOutstandingRequests=function(a){q(F,function(a){a()});0===z?a():u.push(a)};var F=[],v;h.addPollFn=function(a){E(v)&&g(100,n);F.push(a);return a};var J=k.href,A=a.find("base"),x=null;h.url=function(a,c){k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){if(J!=a)return J=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",
a),A.attr("href",A.attr("href"))):(x=a,c?k.replace(a):k.href=a),h}else return x||k.href.replace(/%27/g,"'")};var ma=[],L=!1;h.onUrlChange=function(a){if(!L){if(d.history)y(b).on("popstate",f);if(d.hashchange)y(b).on("hashchange",f);else h.addPollFn(f);L=!0}ma.push(a);return a};h.baseHref=function(){var a=A.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var Q={},da="",H=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===s?l.cookie=escape(a)+"=;path="+H+";expires=Thu, 01 Jan 1970 00:00:00 GMT":
w(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+H).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==da)for(da=l.cookie,d=da.split("; "),Q={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),Q[a]===s&&(Q[a]=unescape(e.substring(h+1))));return Q}};h.defer=function(a,b){var c;z++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};h.defer.cancel=function(a){return r[a]?(delete r[a],
p(a),e(C),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw t("$cacheFactory")("iid",b);var f=0,h=D({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}if(!E(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete m[a]}delete l[a];f--},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return D({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function cc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){Aa(a,"directive");w(a)?(xb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);P(f)?f={compile:aa(f)}:!f.compile&&f.link&&(f.compile=
aa(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Rb(l));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,r,z,u,F,v,J,A){function x(a,b,c,d,e){a instanceof y||(a=y(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=y(b).wrap("<span></span>").parent()[0])});var g=L(a,b,a,c,d,e);ma(a,"ng-scope");return function(b,c,d){xb(b,"scope");var e=c?Ja.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var l=
e[d].nodeType;1!==l&&9!==l||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ma(a,b){try{a.addClass(b)}catch(c){}}function L(a,b,c,d,e,g){function f(a,c,d,e){var g,k,m,r,n,p,z;g=c.length;var I=Array(g);for(n=0;n<g;n++)I[n]=c[n];z=n=0;for(p=l.length;n<p;z++)k=I[z],c=l[n++],g=l[n++],m=y(k),c?(c.scope?(r=a.$new(),m.data("$scope",r)):r=a,(m=c.transclude)||!e&&b?c(g,r,k,d,Q(a,m||b)):c(g,r,k,d,e)):g&&g(a,k.childNodes,s,e)}for(var l=[],k,m,r,n,p=0;p<a.length;p++)k=new Hb,m=da(a[p],[],k,
0===p?d:s,e),(g=m.length?ia(m,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ma(y(a[p]),"ng-scope"),k=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:L(r,g?g.transclude:b),l.push(g,k),n=n||g||k,g=null;return n?f:null}function Q(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",eb(c,c.$destroy));return d}}function da(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:T(b,na(Ka(a).toLowerCase()),"E",d,f);var m,r,n;l=a.attributes;for(var p=0,z=
l&&l.length;p<z;p++){var u=!1,F=!1;m=l[p];if(!S||8<=S||m.specified){r=m.name;n=na(r);W.test(n)&&(r=fb(n.substr(6),"-"));var J=n.replace(/(Start|End)$/,"");n===J+"Start"&&(u=r,F=r.substr(0,r.length-5)+"end",r=r.substr(0,r.length-6));n=na(r.toLowerCase());k[n]=r;c[n]=m=ca(m.value);mc(a,n)&&(c[n]=!0);N(a,b,m,n);T(b,n,"A",d,f,u,F)}}a=a.className;if(w(a)&&""!==a)for(;l=g.exec(a);)n=na(l[2]),T(b,n,"C",d,f)&&(c[n]=ca(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=
e.exec(a.nodeValue))n=na(l[1]),T(b,n,"M",d,f)&&(c[n]=ca(l[2]))}catch(x){}}b.sort(E);return b}function H(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return y(d)}function R(a,b,c){return function(d,e,g,f,l){e=H(e[0],b,c);return a(d,e,g,f,l)}}function ia(a,c,d,e,g,f,l,n,p){function u(a,b,c,d){if(a){c&&(a=R(a,c,d));a.require=G.require;if(Q===
G||G.$$isolateScope)a=qc(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=R(b,c,d));b.require=G.require;if(Q===G||G.$$isolateScope)b=qc(b,{isolateScope:!0});n.push(b)}}function F(a,b,c){var d,e="data",g=!1;if(w(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,t);}else M(a)&&(d=[],q(a,function(a){d.push(F(a,b,c))}));return d}function J(a,e,g,f,p){function u(a,b){var c;2>arguments.length&&
(b=a,a=s);D&&(c=lb);return p(a,b,c)}var I,x,v,A,R,H,lb={},da;I=c===g?d:Ub(d,new Hb(y(g),d.$attr));x=I.$$element;if(Q){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=y(g);H=e.$new(!0);ia&&ia===Q.$$originalDirective?f.data("$isolateScope",H):f.data("$isolateScopeNoTemplate",H);ma(f,"ng-isolate-scope");q(Q.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,n,p;H.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){H[c]=a});I.$$observers[g].$$scope=e;I[g]&&(H[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;m=r(I[g]);p=m.literal?xa:function(a,b){return a===b};n=m.assign||function(){l=H[c]=m(e);throw ja("nonassign",I[g],Q.name);};l=H[c]=m(e);H.$watch(function(){var a=m(e);p(a,H[c])||(p(a,l)?n(e,a=H[c]):H[c]=a);return l=a},null,m.literal);break;case "&":m=r(I[g]);H[c]=function(a){return m(e,a)};break;default:throw ja("iscp",Q.name,c,a);}})}da=p&&u;L&&q(L,function(a){var b={$scope:a===Q||a.$$isolateScope?H:e,$element:x,$attrs:I,$transclude:da},c;R=a.controller;"@"==R&&(R=
I[a.name]);c=z(R,b);lb[a.name]=c;D||x.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(v=l.length;f<v;f++)try{A=l[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(G){m(G,ha(x))}f=e;Q&&(Q.template||null===Q.templateUrl)&&(f=H);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{A=n[f],A(A.isolateScope?H:e,x,I,A.require&&F(A.require,x,lb),da)}catch(B){m(B,ha(x))}}p=p||{};for(var v=-Number.MAX_VALUE,A,L=p.controllerDirectives,Q=p.newIsolateScopeDirective,
ia=p.templateDirective,T=p.nonTlbTranscludeDirective,E=!1,D=p.hasElementTranscludeDirective,Z=d.$$element=y(c),G,t,V,Xa=e,O,N=0,S=a.length;N<S;N++){G=a[N];var ra=G.$$start,W=G.$$end;ra&&(Z=H(c,ra,W));V=s;if(v>G.priority)break;if(V=G.scope)A=A||G,G.templateUrl||(K("new/isolated scope",Q,G,Z),X(V)&&(Q=G));t=G.name;!G.templateUrl&&G.controller&&(V=G.controller,L=L||{},K("'"+t+"' controller",L[t],G,Z),L[t]=G);if(V=G.transclude)E=!0,G.$$tlb||(K("transclusion",T,G,Z),T=G),"element"==V?(D=!0,v=G.priority,
V=H(c,ra,W),Z=d.$$element=y(U.createComment(" "+t+": "+d[t]+" ")),c=Z[0],mb(g,y(ya.call(V,0)),c),Xa=x(V,e,v,f&&f.name,{nonTlbTranscludeDirective:T})):(V=y(Eb(c)).contents(),Z.empty(),Xa=x(V,e));if(G.template)if(K("template",ia,G,Z),ia=G,V=P(G.template)?G.template(Z,d):G.template,V=Y(V),G.replace){f=G;V=Cb.test(V)?y(V):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",t,"");mb(g,Z,c);S={$attr:{}};V=da(c,[],S);var $=a.splice(N+1,a.length-(N+1));Q&&pc(V);a=a.concat(V).concat($);B(d,S);S=a.length}else Z.html(V);
if(G.templateUrl)K("template",ia,G,Z),ia=G,G.replace&&(f=G),J=C(a.splice(N,a.length-N),Z,d,g,Xa,l,n,{controllerDirectives:L,newIsolateScopeDirective:Q,templateDirective:ia,nonTlbTranscludeDirective:T}),S=a.length;else if(G.compile)try{O=G.compile(Z,d,Xa),P(O)?u(null,O,ra,W):O&&u(O.pre,O.post,ra,W)}catch(aa){m(aa,ha(Z))}G.terminal&&(J.terminal=!0,v=Math.max(v,G.priority))}J.scope=A&&!0===A.scope;J.transclude=E&&Xa;p.hasElementTranscludeDirective=D;return J}function pc(a){for(var b=0,c=a.length;b<c;b++)a[b]=
Tb(a[b],{$$isolateScope:!0})}function T(b,e,g,f,k,n,r){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var z=0,u=e.length;z<u;z++)try{p=e[z],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(n&&(p=Tb(p,{$$start:n,$$end:r})),b.push(p),k=p)}catch(F){m(F)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ma(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function C(a,b,c,d,e,g,f,l){var k=[],m,r,z=b[0],u=a.shift(),F=D({},u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),x=P(u.templateUrl)?u.templateUrl(b,c):u.templateUrl;b.empty();n.get(v.getTrustedResourceUrl(x),{cache:p}).success(function(n){var p,J;n=Y(n);if(u.replace){n=Cb.test(n)?y(n):[];p=n[0];if(1!=n.length||
1!==p.nodeType)throw ja("tplrt",u.name,x);n={$attr:{}};mb(d,b,p);var v=da(p,[],n);X(u.scope)&&pc(v);a=v.concat(a);B(c,n)}else p=z,b.html(n);a.unshift(F);m=ia(a,p,c,e,b,u,g,f,l);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=L(b[0].childNodes,e);k.length;){n=k.shift();J=k.shift();var A=k.shift(),R=k.shift(),v=b[0];if(J!==z){var H=J.className;l.hasElementTranscludeDirective&&u.replace||(v=Eb(p));mb(A,y(J),v);ma(y(v),H)}J=m.transclude?Q(n,m.transclude):R;m(r,n,v,d,J)}k=null}).error(function(a,b,c,d){throw ja("tpload",
d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(r,b,c,d,e)}}function E(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function K(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:aa(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ma(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==
b)return v.HTML;var c=Ka(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return v.RESOURCE_URL}function N(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ka(a))throw ja("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(l[e],!0,O(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===
e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function mb(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=U.createDocumentFragment();a.appendChild(d);c[y.expando]=d[y.expando];d=1;for(e=b.length;d<e;d++)g=b[d],y(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function qc(a,b){return D(function(){return a.apply(null,arguments)},
a,b)}var Hb=function(a,b){this.$$element=a;this.$attr=b||{}};Hb.prototype={$normalize:na,$addClass:function(a){a&&0<a.length&&J.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&J.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=rc(a,b),d=rc(b,a);0===c.length?J.removeClass(this.$$element,d):0===d.length?J.addClass(this.$$element,c):J.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=mc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=
d:(d=this.$attr[a])||(this.$attr[a]=d=fb(a,"-"));e=Ka(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=A(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);u.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Z=b.startSymbol(),ra=b.endSymbol(),Y="{{"==Z||"}}"==ra?
Da:function(a){return a.replace(/\{\{/g,Z).replace(/}}/g,ra)},W=/^ngAttr[A-Z]/;return x}]}function na(b){return Ta(b.replace(te,""))}function rc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");X(a)?D(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,
h,l;w(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:bc(g.$scope,h,!0)||bc(d,h,!0),Ra(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return y(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function sc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=K(ca(b.substr(0,
e)));d=ca(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function tc(b){var a=X(b)?b:s;return function(c){a||(a=sc(b));return c?a[K(c)]||null:a}}function uc(b,a,c){if(P(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){w(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Wb(d)));return d}],transformRequest:[function(a){return X(a)&&
"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ba(d),put:ba(d),patch:ba(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function r(a){function c(a){var b=D({},a,{data:uc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){P(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=D({},a.headers),g,f,c=D({},c.common,c[K(a.method)]);b(c);b(d);a:for(g in c){a=K(g);for(f in d)if(K(f)===a)continue a;d[g]=c[g]}return d}(a);D(d,a);d.headers=g;d.method=Fa(d.method);(a=Ib(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:s)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=
a);var f=[function(a){g=a.headers;var b=uc(a.data,tc(g),a.transformRequest);E(a.data)&&q(g,function(a,b){"content-type"===K(b)&&delete g[b]});E(a.withCredentials)&&!E(e.withCredentials)&&(a.withCredentials=e.withCredentials);return z(a,b,g).then(c,c)},s],h=n.when(d);for(q(v,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,
b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function z(b,c,g){function f(a,b,c,e){v&&(200<=a&&300>a?v.put(s,[a,b,sc(c),e]):v.remove(s));l(b,a,c,e);d.$$phase||d.$apply()}function l(a,c,d,e){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:tc(d),config:b,statusText:e})}function k(){var a=db(r.pendingRequests,b);-1!==a&&r.pendingRequests.splice(a,1)}var p=n.defer(),z=p.promise,v,q,s=u(b.url,
b.params);r.pendingRequests.push(b);z.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(v=X(b.cache)?b.cache:X(e.cache)?e.cache:F);if(v)if(q=v.get(s),B(q)){if(q.then)return q.then(k,k),q;M(q)?l(q[1],q[0],ba(q[2]),q[3]):l(q,200,{},"OK")}else v.put(s,z);E(q)&&a(b.method,s,c,f,g,b.timeout,b.withCredentials,b.responseType);return z}function u(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||E(a)||(M(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(za(b)+"="+za(a))}))});0<c.length&&
(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var F=c("$http"),v=[];q(g,function(a){v.unshift(w(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=w(a)?p.get(a):p.invoke(a);v.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];(function(a){q(arguments,function(a){r[a]=function(b,c){return r(D(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(D(d||
{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ue(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!O.XMLHttpRequest))return new O.ActiveXObject("Microsoft.XMLHTTP");if(O.XMLHttpRequest)return new O.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ve(b,ue,b.defer,a.angular.callbacks,c[0])}]}function ve(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=
c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;S&&8>=S?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,l,k,m,n,p,r,z){function u(){v=f;A&&A();x&&x.abort()}function F(a,d,e,g,f){L&&c.cancel(L);A=x=null;0===d&&(d=e?200:"file"==sa(l).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(C)}var v;b.$$incOutstandingRequestCount();
l=l||b.url();if("jsonp"==K(e)){var J="_"+(d.counter++).toString(36);d[J]=function(a){d[J].data=a};var A=g(l.replace("JSON_CALLBACK","angular.callbacks."+J),function(){d[J].data?F(m,200,d[J].data):F(m,v||-2);d[J]=Ea.noop})}else{var x=a(e);x.open(e,l,!0);q(n,function(a,b){B(a)&&x.setRequestHeader(b,a)});x.onreadystatechange=function(){if(x&&4==x.readyState){var a=null,b=null;v!==f&&(a=x.getAllResponseHeaders(),b="response"in x?x.response:x.responseText);F(m,v||x.status,b,a,x.statusText||"")}};r&&(x.withCredentials=
!0);if(z)try{x.responseType=z}catch(s){if("json"!==z)throw s;}x.send(k||null)}if(0<p)var L=c(u,p);else p&&p.then&&p.then(u)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,m){for(var n,p,r=0,z=[],u=g.length,F=!1,v=[];r<u;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&z.push(g.substring(r,n)),z.push(r=c(F=g.substring(n+f,p))),
r.exp=F,r=p+h,F=!0):(r!=u&&z.push(g.substring(r)),r=u);(u=z.length)||(z.push(""),u=1);if(m&&1<z.length)throw vc("noconcat",g);if(!k||F)return v.length=u,r=function(a){try{for(var b=0,c=u,f;b<c;b++)"function"==typeof(f=z[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||E(f)?f="":"string"!=typeof f&&(f=qa(f))),v[b]=f;return v.join("")}catch(h){a=vc("interr",g,h.toString()),d(a)}},r.exp=g,r.parts=z,r}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};
return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,r=0,z=B(l)&&!l;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(r++);0<h&&r>=h&&(n.resolve(r),m(p.$$intervalId),delete e[p.$$intervalId]);z||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],
!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function wc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=wb(b[a]);return b.join("/")}function xc(b,a,c){b=sa(b,c);a.$$protocol=
b.protocol;a.$$host=b.hostname;a.$$port=Y(b.port)||we[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Yb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ya(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Jb(b){return b.substr(0,
Ya(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Jb(b);xc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!w(e))throw Kb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Zb(this.$$search),b=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=oa(b,d))!==s)return d=e,(e=oa(a,e))!==s?c+(oa("/",e)||e):b+d;if((e=oa(c,
d))!==s)return c+e;if(c==d+"/")return c}}function Lb(b,a){var c=Jb(b);xc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!w(e))throw Kb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Zb(this.$$search),e=this.$$hash?"#"+wb(this.$$hash):"";this.$$url=wc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=
b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Ya(b)==Ya(a))return a}}function Ac(b,a){this.$$html5=!0;Lb.apply(this,arguments);var c=Jb(b);this.$$rewrite=function(d){var e;if(b==Ya(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function nb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(E(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=
function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?zc:Ac):(l=Ya(k),e=Lb);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=y(a.target);"a"!==K(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;
var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=sa(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),O.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||
c.$digest())});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:
a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function fa(b,a){if("constructor"===b)throw Ba("isecfld",a);return b}function Za(b,
a){if(b){if(b.constructor===b)throw Ba("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Ba("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw Ba("isecdom",a);}return b}function ob(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=fa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=fa(a.shift(),d);return b[g]=c}function Cc(b,
a,c,d,e,g,f){fa(b,g);fa(a,g);fa(c,g);fa(d,g);fa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null==k)return k;(k=k[b])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return s;(k=k[a])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return s;(k=k[c])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!d)return k;if(null==
k)return s;(k=k[d])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return s;(k=k[e])&&k.then&&(ta(g),"$$v"in k||(m=k,m.$$v=s,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return s;k=k[a];if(!c)return k;if(null==k)return s;k=k[c];if(!d)return k;if(null==k)return s;k=k[d];return e?null==k?s:k=k[e]:k}}function xe(b,a){fa(b,a);return function(a,
d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ye(b,a,c){fa(b,c);fa(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?s:c[a]}}function Dc(b,a,c){if(Mb.hasOwnProperty(b))return Mb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Cc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=Cc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=h;while(f<e);return h};else{var f="var p;\n";
q(d,function(b,d){fa(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=aa(f);g=a.unwrapPromises?function(a,b){return h(a,b,ta)}:h}else g=ye(d[0],d[1],c);else g=xe(d[0],c);"hasOwnProperty"!==
b&&(Mb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Ec.hasOwnProperty(b)&&(Ec[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};
return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Nb(a);e=(new $a(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return C}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return ze(function(a){b.$evalAsync(a)},a)}]}function ze(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],k,m;return m={resolve:function(a){if(f){var c=f;f=s;k=g(a);c.length&&b(function(){for(var a,
b=0,d=c.length;b<d;b++)a=c[b],k.then(a[0],a[1],a[2])})}},reject:function(a){m.resolve(h(a))},notify:function(a){if(f){var c=f;f.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,h){var m=e(),u=function(d){try{m.resolve((P(b)?b:c)(d))}catch(e){m.reject(e),a(e)}},F=function(b){try{m.resolve((P(g)?g:d)(b))}catch(c){m.reject(c),a(c)}},v=function(b){try{m.notify((P(h)?h:c)(b))}catch(d){a(d)}};f?f.push([u,F,v]):k.then(u,F,v);return m.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&P(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&P(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(g,
f){var h=e();b(function(){try{h.resolve((P(f)?f:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:f,when:function(h,k,m,n){var p=e(),r,z=function(b){try{return(P(k)?k:c)(b)}catch(d){return a(d),f(d)}},u=function(b){try{return(P(m)?m:d)(b)}catch(c){return a(c),f(c)}},F=function(b){try{return(P(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){r||(r=!0,p.resolve(g(a).then(z,u,F)))},function(a){r||(r=!0,p.resolve(u(a)))},function(a){r||p.notify(F(a))})});return p.promise},
all:function(a){var b=e(),c=0,d=M(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?
function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=bb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;
this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function l(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Ra(c,b);return c}function m(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=
this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=bb());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!P(b)){var h=k(b||C,"listener");f.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var l=f.fn;f.fn=function(a,b,c){l.call(this,a,b,c);Oa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Oa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,h=1<b.length,l=0,k=g(a),m=[],n={},p=!0,q=0;return this.$watch(function(){d=k(c);var a,b;if(X(d))if(ab(d))for(e!==m&&(e=m,q=e.length=0,l++),a=d.length,q!==a&&(l++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==d[b]||e[b]===d[b]||(l++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,l++);a=
0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(l++,e[b]=d[b]):(q++,e[b]=d[b],l++));if(q>a)for(b in l++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,l++);return l},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(h)if(X(d))if(ab(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)Fc.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,h,k=this.$$asyncQueue,m=this.$$postDigestQueue,q,x,s=b,L,Q=[],y,H,R;l("$digest");
c=null;do{x=!1;for(L=this;k.length;){try{R=k.shift(),R.scope.$eval(R.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=L.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((g=d.get(L))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))x=!0,c=d,d.last=d.eq?ba(g):g,d.fn(g,f===n?g:f,L),5>s&&(y=4-s,Q[y]||(Q[y]=[]),H=P(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,H+="; newVal: "+qa(g)+"; oldVal: "+qa(f),Q[y].push(H));else if(d===c){x=!1;break a}}catch(w){p.$$phase=
null,e(w)}if(!(h=L.$$childHead||L!==this&&L.$$nextSibling))for(;L!==this&&!(h=L.$$nextSibling);)L=L.$parent}while(L=h);if((x||k.length)&&!s--)throw p.$$phase=null,a("infdig",b,qa(Q));}while(x||k.length);for(p.$$phase=null;m.length;)try{m.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,eb(null,m,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=C,this.$on=this.$watch=function(){return C})}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||
p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);
var e=this;return function(){c[db(c,b)]=null;m(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,h={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=[h].concat(ya.call(arguments,1)),k,m;do{d=g.$$listeners[a]||c;h.currentScope=g;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(n){e(n)}else d.splice(k,1),k--,m--;if(f)break;g=g.$parent}while(g);return h},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,
targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),h,k;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new h;return p}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;
this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Ae(b){if("self"===b)return b;if(w(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+
b+"$")}if(cb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Gc(b){var a=[];B(b)&&q(b,function(b){a.push(Ae(b))});return a}function ae(){this.SCE_CONTEXTS=ga;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Gc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Gc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=
function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[ga.HTML]=d(g);f[ga.CSS]=d(g);f[ga.URL]=d(g);f[ga.JS]=d(g);f[ga.RESOURCE_URL]=d(f[ga.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},
getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===ga.RESOURCE_URL){var g=sa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Ib(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<n;m++)if("self"===a[m]?Ib(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===ga.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ba(ga);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Da);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,
d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(ga,function(a,b){var c=K(b);e[Ta("parse_as_"+c)]=function(b){return g(a,b)};e[Ta("get_trusted_"+c)]=function(b){return f(a,b)};e[Ta("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Y((/android (\d+)/.exec(K((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,
m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=w(g.body.style.webkitTransition),n=w(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(E(c[a])){var b=g.createElement("div");c[a]="on"+
a in b}return c[a]},csp:Vb(),vendorPrefix:h,transitions:m,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=B(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),
delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ib(b){b=w(b)?sa(b):b;return b.protocol===Hc.protocol&&b.host===Hc.host}
function ee(){this.$get=aa(O)}function gc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Ic);a("date",Jc);a("filter",Be);a("json",Ce);a("limitTo",De);a("lowercase",Ee);a("number",Kc);a("orderBy",Lc);a("uppercase",Fe)}function Be(){return function(b,a,c){if(!M(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;
return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ea.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&Fc.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Ic(b){var a=
b.NUMBER_FORMATS;return function(b,d){E(d)&&(d=a.CURRENCY_SYM);return Mc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Kc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Mc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Mc(b,a,c,d,e){if(null==b||!isFinite(b)||X(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));
else{f=(f.split(Nc)[1]||"").length;E(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Nc);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Ob(b,
a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ob(e,a,d)}}function pb(b,a){return function(c,d){var e=c["get"+b](),g=Fa(a?"SHORT"+b:b);return d[g][e]}}function Jc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Y(b[9]+b[10]),f=Y(b[9]+b[11]));
h.call(a,Y(b[1]),Y(b[2])-1,Y(b[3]));g=Y(b[4]||0)-g;f=Y(b[5]||0)-f;h=Y(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;w(c)&&(c=Ge.test(c)?Y(c):a(c));vb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(l=He.exec(e))?(f=f.concat(ya.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=
Ie[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ce(){return function(b){return qa(b,!0)}}function De(){return function(b,a){if(!M(b)&&!w(b))return b;a=Y(a);if(w(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Lc(b){return function(a,c,d){function e(a,b){return Qa(b)?function(b,c){return a(c,b)}:a}
function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!M(a)||!c)return a;c=M(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Da;if(w(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),d(b))},c)});for(var f=[],h=0;h<a.length;h++)f.push(a[h]);return f.sort(e(function(a,b){for(var d=
0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){P(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Oc(b,a,c,d){function e(a,c){c=c?"-"+fb(c,"-"):"";d.removeClass(b,(a?qb:rb)+c);d.addClass(b,(a?rb:qb)+c)}var g=this,f=b.parent().controller("form")||sb,h=0,l=g.$error={},k=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);b.addClass(La);e(!0);g.$addControl=function(a){Aa(a.$name,"input");k.push(a);a.$name&&
(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(l,function(b,c){g.$setValidity(c,!0,a)});Oa(k,a)};g.$setValidity=function(a,b,c){var d=l[a];if(b)d&&(Oa(d,c),d.length||(h--,h||(e(b),g.$valid=!0,g.$invalid=!1),l[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{h||e(b);if(d){if(-1!=db(d,c))return}else l[a]=d=[],h++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=!0}};g.$setDirty=function(){d.removeClass(b,La);d.addClass(b,tb);g.$dirty=!0;g.$pristine=
!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,tb);d.addClass(b,La);g.$dirty=!1;g.$pristine=!0;q(k,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Je(b,a,c){var d=c.prop("validity");X(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function ub(b,a,c,d,e,g){var f=a.prop("validity");if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});
a.on("compositionend",function(){h=!1;l()})}var l=function(){if(!h){var e=a.val();Qa(c.ngTrim||"T")&&(e=ca(e));if(d.$viewValue!==e||f&&""===e&&!f.valueMissing)b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(){k||(k=g.defer(function(){l();k=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||m()});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?
"":d.$viewValue)};var n=c.ngPattern;n&&((e=n.match(/^\/(.*)\/([gim]*)$/))?(n=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||n.test(a),a)}):e=function(c){var e=b.$eval(n);if(!e||!e.test)throw t("ngPattern")("noregexp",n,e,ha(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=Y(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=p,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var r=
Y(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=r,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Pb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){if(!M(a)){if(w(a))return a.split(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b}}return a}return{restrict:"AC",link:function(g,f,h){function l(a,b){var c=
f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||g.$index%2===a){var k=e(b||[]);if(!m){var r=l(k,1);h.$addClass(r)}else if(!xa(b,m)){var q=e(m),r=d(k,q),k=d(q,k),k=l(k,-1),r=l(r,1);0===r.length?c.removeClass(f,k):0===k.length?c.addClass(f,r):c.setClass(f,r,k)}}m=ba(b)}var m;g.$watch(h[b],k,!0);h.$observe("class",function(a){k(g.$eval(h[b]))});"ngClass"!==b&&g.$watch("$index",
function(c,d){var f=c&1;if(f!==d&1){var k=e(g.$eval(h[b]));f===a?(f=l(k,1),h.$addClass(f)):(f=l(k,-1),h.$removeClass(f))}})}}}]}var K=function(b){return w(b)?b.toLowerCase():b},Fc=Object.prototype.hasOwnProperty,Fa=function(b){return w(b)?b.toUpperCase():b},S,y,Ga,ya=[].slice,Ke=[].push,wa=Object.prototype.toString,Pa=t("ng"),Ea=O.angular||(O.angular={}),Sa,Ka,ka=["0","0","0"];S=Y((/msie (\d+)/.exec(K(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Y((/trident\/.*; rv:(\d+)/.exec(K(navigator.userAgent))||
[])[1]));C.$inject=[];Da.$inject=[];var ca=function(){return String.prototype.trim?function(b){return w(b)?b.trim():b}:function(b){return w(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ka=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Fa(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.16",major:1,minor:2,dot:16,codeName:"badger-enumeration"},Ua=N.cache={},gb=N.expando="ng-"+(new Date).getTime(),
me=1,Pc=O.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Fb=O.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};N._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Bb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Cb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ea=
{option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ea.optgroup=ea.option;ea.tbody=ea.tfoot=ea.colgroup=ea.caption=ea.thead;ea.th=ea.td;var Ja=N.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===U.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),N(O).on("load",a))},toString:function(){var b=
[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?y(this[b]):y(this[this.length+b])},length:0,push:Ke,sort:[].sort,splice:[].splice},kb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){kb[K(b)]=b});var nc={};q("input select option textarea button form details".split(" "),function(b){nc[Fa(b)]=!0});q({data:jc,inheritedData:jb,scope:function(b){return y(b).data("$scope")||jb(b.parentNode||b,["$isolateScope","$scope"])},
isolateScope:function(b){return y(b).data("$isolateScope")||y(b).data("$isolateScopeNoTemplate")},controller:kc,injector:function(b){return jb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Gb,css:function(b,a,c){a=Ta(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=K(a);if(kb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));
else return b[a]||(b.attributes.getNamedItem(a)||C).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(E(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(E(a)){if("SELECT"===Ka(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&
c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(E(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ha(d[c]);b.innerHTML=a},empty:lc},function(b,a){N.prototype[a]=function(a,d){var e,g;if(b!==lc&&(2==b.length&&b!==Gb&&b!==kc?a:d)===s){if(X(a)){for(e=0;e<this.length;e++)if(b===jc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===s?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=
e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:hc,dealoc:Ha,on:function a(c,d,e,g){if(B(g))throw Bb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var m=U.body.contains||U.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):
a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Pc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:ic,one:function(a,c,d){a=y(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ha(a);q(new N(c),function(c){d?e.insertBefore(c,d.nextSibling):
e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){q(new N(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new N(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=y(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ha(a);
var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new N(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:ib,removeClass:hb,toggleClass:function(a,c,d){c&&q(c.split(" "),function(c){var g=d;E(g)&&(g=!Gb(a,c));(g?ib:hb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?
a.getElementsByTagName(c):[]},clone:Eb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:C,stopPropagation:C}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){N.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)E(f)?(f=a(this[h],c,e,g),B(f)&&(f=y(f))):Db(f,a(this[h],c,e,g));return B(f)?f:this};N.prototype.bind=N.prototype.on;N.prototype.unbind=N.prototype.off});Va.prototype={put:function(a,c){this[Ia(a)]=c},get:function(a){return this[Ia(a)]},
remove:function(a){var c=this[a=Ia(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Wa=t("$injector"),Le=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Le("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?
a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,h){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){ib(a,c)});f&&d(f)},removeClass:function(a,c,f){c=w(c)?c:M(c)?c.join(" "):"";q(a,function(a){hb(a,c)});f&&d(f)},setClass:function(a,c,f,h){q(a,function(a){ib(a,c);hb(a,
f)});h&&d(h)},enabled:C}}]}],ja=t("$compile");cc.$inject=["$provide","$$sanitizeUriProvider"];var te=/^(x[\:\-_]|data[\:\-_])/i,vc=t("$interpolate"),Me=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,we={http:80,https:443,ftp:21},Kb=t("$location");Ac.prototype=Lb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:nb("$$absUrl"),url:function(a,c){if(E(a))return this.$$url;var d=Me.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:nb("$$protocol"),
host:nb("$$host"),port:nb("$$port"),path:Bc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(w(a))this.$$search=Yb(a);else if(X(a))this.$$search=a;else throw Kb("isrcharg");break;default:E(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",Da),replace:function(){this.$$replace=!0;return this}};var Ba=t("$parse"),Ec={},ta,Ma={"null":function(){return null},"true":function(){return!0},
"false":function(){return!1},undefined:C,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":C,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,
c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ne={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},
Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ma[this.ch],f=Ma[d],h=Ma[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,
text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Ba("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=K(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=
d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;
this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ma.hasOwnProperty(c))d.fn=Ma[c],d.json=Ma[c];else{var l=Dc(c,this.options,this.text);d.fn=D(function(a,c){return l(a,c)},{assign:function(d,e){return ob(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},
readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Ne[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=
f}this.index++}this.throwError("Unterminated quote",c)}};var $a=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};$a.ZERO=D(function(){return 0},{constant:!0});$a.prototype={constructor:$a,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?
(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw Ba("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Ba("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,
e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return D(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return D(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return D(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},
statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=
function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn($a.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return D(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return ob(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return D(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return s;(f=Za(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=s,l.then(function(a){l.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Za(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||C;Za(l,e.text);Za(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Za(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;
var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return D(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return D(function(c,d){for(var e={},l=0;l<
a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Mb={},ua=t("$sce"),ga={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},W=U.createElement("a"),Hc=sa(O.location.href,!0);gc.$inject=["$provide"];Ic.$inject=["$locale"];Kc.$inject=["$locale"];var Nc=".",Ie={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:pb("Month"),MMM:pb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",
1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:pb("Day"),EEE:pb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))}},He=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ge=/^\-?\d+$/;Jc.$inject=["$locale"];var Ee=aa(K),Fe=aa(Fa);Lc.$inject=
["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(U.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),zb={};q(kb,function(a,c){if("multiple"!=a){var d=na("ng-"+c);zb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src",
"srcset","href"],function(a){var c=na("ng-"+a);zb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,h=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&(h="xlinkHref",g.$attr[h]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(h,a),S&&f&&e.prop(f,g[h]))})}}}});var sb={$addControl:C,$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C};Oc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",
restrict:a?"EAC":"E",controller:Oc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Pc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Fb(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ob(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ob(a,k,s,k);D(f,sb)})}}}}}]},dd=Qc(),qd=Qc(!0),Oe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Pe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Qe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:ub,number:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Qe.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Je(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),
e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,"number",e.$isEmpty(a)||vb(a),a)})},url:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||Oe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ub(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);
e.$parsers.push(a)},radio:function(a,c,d,e){E(d.name)&&c.attr("name",bb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;w(g)||(g=!0);w(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};
e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:C,button:C,submit:C,reset:C,file:C},dc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Rc[K(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],rb="ng-valid",qb="ng-invalid",La="ng-pristine",tb="ng-dirty",Re=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function h(a,c){c=c?"-"+fb(c,"-"):"";f.removeClass(e,(a?qb:rb)+c);
f.addClass(e,(a?rb:qb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var l=g(d.ngModel),k=l.assign;if(!k)throw t("ngModel")("nonassign",d.ngModel,ha(e));this.$render=C;this.$isEmpty=function(a){return E(a)||""===a||null===a||a!==a};var m=e.inheritedData("$formController")||sb,n=0,p=this.$error={};e.addClass(La);h(!0);this.$setValidity=function(a,c){p[a]!==
!c&&(c?(p[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,h(c,a),m.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;f.removeClass(e,tb);f.addClass(e,La)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,La),f.addClass(e,tb),m.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,k(a,d),q(this.$viewChangeListeners,
function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=l(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Re,link:function(a,c,d,e){var g=e[0],f=e[1]||sb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
ec=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!E(a)){var c=[];a&&q(a.split(g),function(a){a&&
c.push(ca(a))});return c}});e.$formatters.push(function(a){return M(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Se=/^(true|false|\d+)$/,Id=function(){return{priority:100,compile:function(a,c){return Se.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==s?"":a)})}),kd=["$interpolate",
function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Pb("",!0),nd=Pb("Odd",0),md=Pb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),
pd=[function(){return{scope:!0,controller:"@",priority:500}}],fc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=na("ng-"+a);fc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(K(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",
$$tlb:!0,link:function(c,d,e,g,f){var h,l,k;c.$watch(e.ngIf,function(g){Qa(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=U.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=yb(h.clone),a.leave(k,function(){k=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ea.noop,compile:function(f,
h){var l=h.ngInclude||h.src,k=h.onload||"",m=h.autoscroll;return function(f,h,q,s,u){var F=0,v,y,A,x=function(){y&&(y.remove(),y=null);v&&(v.$destroy(),v=null);A&&(e.leave(A,function(){y=null}),y=A,A=null)};f.$watch(g.parseAsResourceUrl(l),function(g){var l=function(){!B(m)||m&&!f.$eval(m)||d()},q=++F;g?(a.get(g,{cache:c}).success(function(a){if(q===F){var c=f.$new();s.template=a;a=u(c,function(a){x();e.enter(a,null,h,l)});v=c;A=a;v.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===
F&&x()}),f.$emit("$includeContentRequested")):(x(),s.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||
0,m=e.$eval(l)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(m[K(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+r))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,
link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,u,F,v={$id:Ia};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[3])?(n=a(m),p=function(a,c,d){F&&(v[F]=a);v[u]=c;v.$index=d;return n(e,v)}):(r=function(a,c){return Ia(c)},s=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);u=m[3]||m[1];F=m[2];var B={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,v={},H,R,w,C,T,t,
E=[];if(ab(a))T=a,n=p||r;else{n=p||s;T=[];for(w in a)a.hasOwnProperty(w)&&"$"!=w.charAt(0)&&T.push(w);T.sort()}H=T.length;h=E.length=T.length;for(f=0;f<h;f++)if(w=a===T?f:T[f],C=a[w],C=n(w,C,f),Aa(C,"`track by` id"),B.hasOwnProperty(C))t=B[C],delete B[C],v[C]=t,E[f]=t;else{if(v.hasOwnProperty(C))throw q(E,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,C);E[f]={id:C};v[C]=!1}for(w in B)B.hasOwnProperty(w)&&(t=B[w],f=yb(t.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),t.scope.$destroy());
f=0;for(h=T.length;f<h;f++){w=a===T?f:T[f];C=a[w];t=E[f];E[f-1]&&(m=E[f-1].clone[E[f-1].clone.length-1]);if(t.scope){R=t.scope;n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);t.clone[0]!=n&&c.move(yb(t.clone),null,y(m));m=t.clone[t.clone.length-1]}else R=e.$new();R[u]=C;F&&(R[F]=w);R.$index=f;R.$first=0===f;R.$last=f===H-1;R.$middle=!(R.$first||R.$last);R.$odd=!(R.$even=0===(f&1));t.scope||l(R,function(a){a[a.length++]=U.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,y(m));m=a;t.scope=R;t.clone=
a;v[t.id]=t})}B=v})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Qa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Qa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(c,d,e,g){var f,h,l,k=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p=k.length;if(0<p){if(l){for(n=0;n<p;n++)l[n].remove();l=null}l=[];for(n=0;n<p;n++){var r=h[n];k[n].$destroy();l[n]=r;a.leave(r,function(){l.splice(n,1);0===l.length&&(l=null)})}}h=[];k=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();k.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",
link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ha(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,
d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Te=t("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:C};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=
d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){Aa(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Ia(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=C})}],link:function(e,f,h,l){function k(a,
c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(A.parent()&&A.remove(),c.val(a),""===a&&w.prop("selected",!0)):E(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){A.parent()&&A.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Va(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ba(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=
[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,s,t,z;t=g.$modelValue;z=y(e)||[];var E=n?Qb(z):z,F,I,A;I={};s=!1;var D,H;if(r)if(w&&M(t))for(s=new Va([]),A=0;A<t.length;A++)I[m]=t[A],s.put(w(e,I),t[A]);else s=new Va(t);for(A=0;F=E.length,A<F;A++){k=A;if(n){k=E[A];if("$"===k.charAt(0))continue;I[n]=k}I[m]=z[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=[],c.push(d));r?d=B(s.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=
w(e,d)===w(e,I)):d=t===q(e,I),s=s||d);D=l(e,I);D=B(D)?D:"";k.push({id:w?w(e,I):n?E[A]:A,label:D,selected:d})}r||(u||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(E=c.length;I<E;I++){d=c[I];k=a[d];x.length<=I?(t={element:C.clone().attr("label",d),label:k.label},z=[t],x.push(z),f.append(t.element)):(z=x[I],t=z[0],t.label!=d&&t.element.attr("label",t.label=d));D=null;A=0;for(F=k.length;A<F;A++)s=k[A],(d=z[A+1])?(D=d.element,d.label!==s.label&&
D.text(d.label=s.label),d.id!==s.id&&D.val(d.id=s.id),d.selected!==s.selected&&D.prop("selected",d.selected=s.selected)):(""===s.id&&u?H=u:(H=v.clone()).val(s.id).attr("selected",s.selected).text(s.label),z.push({element:H,label:s.label,id:s.id,selected:s.selected}),D?D.after(H):t.element.append(H),D=H);for(A++;z.length>A;)z.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Te("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=
c(k[2]?k[1]:m),y=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];u&&(a(u)(e),u.removeClass("ng-scope"),u.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=y(e)||[],d={},h,k,l,p,t,v,u;if(r)for(k=[],p=0,v=x.length;p<v;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(u=0;u<c.length&&(d[m]=c[u],w(e,d)!=h);u++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(w)for(u=0;u<c.length;u++){if(d[m]=
c[u],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<x[0].length&&x[0][1].id!==h&&(x[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0];l=l[1];var r=h.multiple,t=h.ngOptions,u=!1,w,v=y(U.createElement("option")),C=y(U.createElement("optgroup")),A=v.clone();h=0;for(var x=f.children(),D=x.length;h<D;h++)if(""===x[h].value){w=u=x.eq(h);break}p.init(l,u,A);r&&(l.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,l):r?m(e,f,l):k(e,f,l,p)}}}}],hd=["$interpolate",
function(a){var c={addOption:C,removeOption:C};return{restrict:"E",priority:100,compile:function(d,e){if(E(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],gd=aa({restrict:"E",
terminal:!0});O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ga=O.jQuery)?(y=Ga,D(Ga.fn,{scope:Ja.scope,isolateScope:Ja.isolateScope,controller:Ja.controller,injector:Ja.injector,inheritedData:Ja.inheritedData}),Ab("remove",!0,!0,!1),Ab("empty",!1,!1,!1),Ab("html",!1,!1,!0)):y=N,Ea.element=y,Zc(Ea),y(U).ready(function(){Wc(U,$b)}))})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}</style>');
//# sourceMappingURL=angular.min.js.map

},{}],8:[function(require,module,exports){

},{}]},{},[1])