// EXPORTING contentful data via the npm contentful-cli package
//
// Listing all spaces on contentful
// contentful space list
//
// Switching to contentful space:
// contentful space use qiq9w8fj2md5
//
// command for exporting data in JSON File from contentful via the npm contentful-cli package:
// contentful space export 
//
// command for exporting data INCLUDING ASSETS AS FILES:
// contentful space export --space-id "qiq9w8fj2md5"   --content-only --download-assets


import pool from '../db.js'

const entries = [
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3KaNY7cLhyQTB0xkLy0bjq",
      "type": "Entry",
      "createdAt": "2022-10-08T12:18:45.733Z",
      "updatedAt": "2022-10-18T10:08:58.833Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 36,
      "publishedAt": "2022-10-18T10:08:57.997Z",
      "firstPublishedAt": "2022-10-08T12:33:25.144Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 7,
      "version": 38,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Egypt"
      },
      "body": {
        "en-US": "General Information\n\nEgypt's official name is the Arab Republic of Egypt. The country is situated in the north-east part of Africa, although the Sinai Peninsula forms a land bridge with south-west Asia, and so Egypt is also called a Middle East country. Therefore it's a transcontinental country, which helps it in being a major power in Africa, the Middle-East, the Mediterranean, and the Muslim world.\n\nIn Arabic, Egypt is called مصر, or Miṣr,  and in ancient times the country was known as Kemet, or the black land, due to the alluvial soil deposited during the Nile's annual flooding. This yearly event gave Egypt the fertile land that enabled it to expand along the length of the river, especially in the delta where many various crops were, and still are, harvested.\n\nEgypt covers an area of approximately 1,001,450km2  (386,662 miles²) and is bordered by Israel and the Gaza Strip in the north-east; the Red Sea in the east; Sudan in the south; Libya in the west; and the Mediterranean Sea in the north. It is the 3rd most populous country in Africa and the most populous in the Middle-East with the majority of its estimated 98 million people living on, or near, the banks of the Nile. Only 5.5% of the total land area is actually used by the population, the area that borders the River Nile as well as a few cases, the other 94.5% being an uninhabitable desert.\n\nThe Nile River runs vertically through the Sahara Desert and the area to the west is known as the Western Desert, or the Libyan Desert, with the area to the East, as far as the Red Sea, being called the Eastern Desert. The desert itself is very sparsely inhabited with relatively small population centers growing up around oases such as the Fayoum, Siwa, Bahariya, Farafra, Dakhla, and Kharga to the west and any areas of habitation being restricted to the many wadis (or valleys) to the east.\n\nThe Libyan Desert is home to an enormous area of sand known as the Great Sand Sea, and located within this area are several depressions that fall below sea level. These include the Qattara Depression, which covers an area of approximately 18,000km2 (7,000 miles2) and reaches a depth of approximately 133m (436 ft) below sea level: the lowest point in Africa.\n\nMost of the Eastern Desert lies on a plateau that gradually rises from the Nile Valley to heights of approximately 600m (2,000 ft) in the east. Along the Red Sea coast are many jagged peaks that reach as high as 2,100m (7,000 ft) above sea level. The Nubian Desert lies to the extreme south of the Eastern Desert, along the border with Sudan, and it is an extensive area of dunes and sandy plains.\n\nThe Sinai Peninsula primarily consists of sandy desert in the north with rugged mountains in the south; the summits here towering more than 2,100m (7,000 ft) above the Red Sea. Mount Catherine, or Gebel Katherina, at 2,629m (8,625 ft) high, is the highest point in Egypt, slightly dwarfing the nearby Mount Sinai, or Moses Mountain (Gabal Musa), at 2,285m (7,497 ft). According to Islamic, Christian and Jewish beliefs, the biblical Mount Sinai was the place where Moses received the Ten Commandments, though not everyone agrees that this particular mountain is actually the biblical one.\n\nToday, the Nile is considered as the longest river in the world, and it enters Egypt from Sudan and flows north for about 1,545km (960 miles) until it exits into the Mediterranean Sea. From the Sudanese border to Cairo, the Nile flows through a narrow cliff-lined valley, which, south of Edfu, is hardly more than 3km (2 miles) wide. From Edfu to Cairo, it is about 23km (14 miles) in width, with most of the arable land lying on the western side. Just north of Cairo, the valley merges with the Delta before the River Nile joins the Mediterranean Sea.\n\nThe Delta is a triangular plain bordering the Mediterranean coastline for approximately 250km (155 miles). Silt has been deposited here by the many tributaries of the Nile river Rosetta knewn or the city of Rashid] and Damietta or Dumyat and others) and this has made the Delta the most fertile area of Egypt. The Aswan High Dam, however, has reduced the flow of the Nile, putting an end to the annual flooding, and this has caused the salty waters of the Mediterranean Sea to erode most of the land along the coast. Nowadays a series of four shallow, salty, lakes extend along the seaward extremity of the delta.\n\nLake Nasser, the world's largest man-made reservoir, was formed by the building of the Aswan High Dam in 1970. It is approximately 480km (300 miles) long and 16km (10 miles) across at its widest point. Almost two-thirds of this lake is situated in Egypt, and it extends southwards across the Sudanese border.\n\nFrom ancient times, right through to the modern era, the Nile Valley has been divided into two separate regions, Lower Egypt and Upper Egypt. Lower Egypt, where the Pharaohs wore the red crown, is the area of the Delta, whilst Upper Egypt, where the Pharaohs wore the white crown, is the entire valley south of Cairo (or Memphis during the Pharaonic period).\n\nThe land boundaries, which Egypt shares with other countries, are 2,665 km in total and comprise of: Gaza Strip 11 km, Israel 266 km, Libya 1,115 km and Sudan 1,273 km. Its coastline is 2,450 km long which includes the Mediterranean Sea, the Red Sea, the Suez Canal and the Gulf of Aqaba, though any indentations, which are suitable as harbors, are confined to the delta.\n\nEgypt has one of the most diverse economies in North-Africa and the Middle-East with the various sectors employing the following amounts of people: agriculture 32%; industry 17%; services 39%; and tourism 12%.\n\nA predominantly Sunni Muslim country, Egypt's state religion is Islam. A genuine estimate of the percentages of the various religions is a controversial topic in Egypt, and no two sets of figures appear to match, but it is generally accepted that 80-90% of the population is Muslim. Five times a day the \"Adhan\", the Islamic call to prayer, can be heard being broadcast from the loudspeakers on Cairo's many minarets. There are so many Mosques in the Egyptian capital that it was once dubbed \"The City of 1,000 Minarets\".\n\nCairo also hosts a considerable number of church towers due to the Christian minority in Egypt, which makes up about 8-18% of the population. Of these, 90% belong to the native Coptic Orthodox Church of Alexandria with the other 10% comprising of the Coptic Catholic Church; the Evangelical Church of Egypt; and various other Protestant denominations.\n\nThe remaining 2% of the population are Jews, with a number of synagogues being sited around Cairo. Islam, Christianity, and Judaism are the only three religions that Egypt officially recognizes.\n\nHere are 10 interesting facts about Egypt.\n\n1. The country is ethnically homogeneous, with Egyptians comprising more than 99% of the population.\n\n2. The country's population is estimated to be 90% Muslim (primarily Sunni) and various Christian denominations make up the remaining 10%.\n\n3. Cairo has served as Egypt's capital for more than 1,000 years, but the government is building a new capital some 45 kilometers (28 miles) to the east to help ease congestion in Cairo. Plans call for the yet-to-be-named city to host the main government departments and ministries, as well as foreign embassies.\n\n4. One of the most famous figures tied to Egypt, Cleopatra VII, was Greek.\n\n5. Ancient Egypt produced one of history's earliest peace treaties, the Kadesh Peace Treaty, negotiated in 1259 B.C. with the Hittite Empire. In 1970 the government of Turkey gave a copy of the treaty to the United Nations, where it can be seen at the entrance of the Security Council chambers.\n\n6. Egypt is home to seven UNESCO-designated World Heritage sites: Abu Mena; ancient Thebes with its Necropolis; Historic Cairo; Memphis and its Necropolis; Nubian monuments from Abu Simbel to Philae; the Saint Catherine area; and Wadi Al-Hitan, or Whale Valley, home to fossil remains of the earliest and now extinct form of whales.\n\n7. Various international rights groups, including Amnesty International, Freedom House and Human Rights Watch, criticize the country for low levels of personal freedom and the arrests and jailing of peaceful activists who are critical of the government.\n\n8. Social media accounts with more than 5,000 followers are subject to the country's media laws and can be monitored by authorities and must be licensed by the government.\n\n9. Ancient Egypt produced the world's first prosthetic limb, a toe composed of leather, wood and thread and dated between 950 and 710 B.C.\n\n10. The 365-day calendar that is divided into 12 months was invented in Egypt.\n"
      },
      "location": {
        "en-US": {
          "lon": 30.80249,
          "lat": 26.82055
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "VGweZFjjjDU2cfX9PPSR5"
          }
        }
      },
      "destinationImage": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "xvfBoVJoQTs5FyESrlNEX"
            }
          }
        ]
      },
      "entryId": {
        "en-US": 3
      },
      "travelRegion": {
        "en-US": "Africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4iODT15wEJ11bG9azXciJq",
      "type": "Entry",
      "createdAt": "2022-10-10T21:17:03.004Z",
      "updatedAt": "2022-10-16T08:50:55.977Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 77,
      "publishedAt": "2022-10-16T08:50:55.977Z",
      "firstPublishedAt": "2022-10-10T21:44:15.551Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 9,
      "version": 78,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "3PHf4B6wI9zyVPH5IqspMO"
          }
        }
      },
      "header": {
        "en-US": "North America"
      },
      "descriptionText": {
        "en-US": "## Overview\n\nNorth America travel guide, including map of North America\n\nIf you want epic, you’ve come to the right place. The vast territory that makes up the US and Canada is a place of mythic journeys, eye-boggling scenery, and – beyond those headline-grabbing, culture-dominating cities – raw wilderness.\n\nThe US National Parks Service oversees nearly 400 protected areas, including Yellowstone (the oldest) and Alaska’s Wrangell St-Elias (the biggest; larger than Switzerland). And north of the 49th parallel, Canada has endless emptiness, home to wolf, bear and moose, much of which can only be accessed by floatplane.\n\nSo, given the scale of the place, your first thought should be how to get around. Domestic flights are extensive and affordable (particularly if you buy an air pass), but for romance and views stick at ground level. Hire a car or a campervan, ride the Greyhound bus or take the Amtrak railway (in the US) or VIA Rail (in Canada) for a days-long trundle between cities.\n\nSome of the best journeys are offshore, too: the ferry journey through Alaska’s Inside Passage is a gold-rush history lesson and whale-watching extravaganza rolled into one.\n\nOnce you’ve got your transport sorted, pick your highlights. You’d need months to scratch the surface of the whole continent, so instead focus on a big trip (coast to coast, Route 66, California’s Pacific Coast Highway) or a region (the Great Lakes; the ‘Four Corners’ region of the Southwest; Vancouver and the Canadian West). North America may be all about big journeys, but don’t forget to stop and linger too.\n\nFinally, try to meet some of North America’s indigenous people. In the southern US, Native American traditions are alive and well (try New Mexico). In Canada, there’s an increasing variety of First Nations experiences from homestays to Inuit-led wildlife cruises. Their insights prove there’s far more to North American culture than Hollywood and Broadway.\n\nSo what are you waiting for? Start planning your trip to North America today...\n\n## Further Reading\n\n### Top 10 North American travel experiences\n\nIt would take a lifetime to do proper justice to the variety of experiences on offer in North America, but here are a few ideas for starters\n\n__1. Take a great rail journey__ – rail travel is one of the best ways to see great swaths of North America breezing past (many of the trains even have special transparent-roofed viewing carriages for better sightseeing): you're only limited by the amount of time you have. Try an Amtrak or VIA Rail pass for the best value. \\\n__2. Watch polar bears, Churchill, Manitoba__ – in the remote, frozen town of Churchill, Canada, nestled on the shores of Hudson Bay, having a good bear story to tell counts for a lot. The good news is it is pretty hard to leave without one of your own. Take to the tundra in a big-wheeled buggy in October/November for the best chance of a sighting. \\\n__3. Hike the gold-rush trail, Yukon__ – hike along the Klondike River near Dawson City, Yukon, Canada. About 390 tons of the yellow stuff have been taken from the Klondike area in the century since its discovery – it's worth having a go and panning for some of your own. \\\n__4. Experience New York State__ – hike or climb in the Catskills; canoe, kayak, raft and camp as you explore the Finger Lakes; nip into the wineries – there's more to the state than that big city. Though a stop-off in the Big Apple is fun too! \\\n__5. Ride Alaska’s Marine Highway__ – Alaska's Marine Highway is a lifeline for remote coastal communities – luckily, it is also the best way to see Alaska's rugged wilderness, scenic beauty and abundant wildlife as the ferries run up the Inside Passage and out to the Aleutian Islands. \\\n__6. Cycle Canada’s Gulf Islands__ – try pedal-powered island-hopping on the southern, Canadian section of the bohemian Gulf Islands archipelago: Saltspring, Pender, Saturna, Mayne and Galiano islands await. \\\n__7. Explore Arctic wilderness, Nunavut, Canada__ – Nunavut is a land so vast and harsh that few people have even dared to explore it. Visit Nunavut and witness how the Inuit have thrived for centuries in harmony with the extreme conditions and rugged landscape. \\\n__8. Gawp at the Grand Canyon, Arizona__ – stare, open-mouthed as nearly two billion years of geological history lays exposed at your feet. Stand on the rim for great vistas, or hike down into the canyon, camp at the bottom and hike out the next day. Perhaps the ultimate trip: raft the length of the Colorado River for the true insider's view. \\\n__9. Camp with wolves, Isle Royale NP__ – one of the USA's remote national parks is a great place to camp out and listen for wolves at night as they call to each other across the island. \\\n__10. Discover wild Hawaii__ – the USA's Pacific-marooned state is more than themed aloha-luaus: hike lava fields and volcanos, and spot dolphins, whales and sea turtles, wild deer and boar when you get off the beaten track. \\"
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1hCYQmBehkNU2wwYpAMhgn"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5IszPtpaoAy0EX8WqXVHFn"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1cYLAyl0neZBzV4GOPMHBA"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6nS1W1S4CemuHDhFAnXSzq"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5QmnUQOkEoe8KI9dcbvKC3"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6yXunA0Eqd2iPTGfMFvzlX"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "52jRVinpT7YIvcxqhW2Fdt"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "503gXUgWlaJkmaHGyepQYT"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5vYJ5QSp3hsoOqaM4AwCFr"
            }
          }
        ]
      },
      "contId": {
        "en-US": "namerica"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1d8SVANZhQoH49wYUZgtGa",
      "type": "Entry",
      "createdAt": "2022-10-10T21:44:38.221Z",
      "updatedAt": "2022-10-16T08:49:44.512Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 52,
      "publishedAt": "2022-10-16T08:49:44.512Z",
      "firstPublishedAt": "2022-10-10T21:52:49.885Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 4,
      "version": 53,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "7mtQrf6TR1BWUowQX63Gri"
          }
        }
      },
      "header": {
        "en-US": "Europe"
      },
      "descriptionText": {
        "en-US": "   ## Overview\n\nEurope travel advice, including top 10 European travel tips, map of Europe, guide to European city breaks, rail journeys in Europe and where to stay in Europe.\n\nFrom the classical rubble of Athens and Rome to the castles of southern Spain, the pomp of Victorian London to the vineyards of Champagne, the ideas and institutions of Europe have spread to every corner of the world.\n\nNowhere has such a density of iconic, art-and-architecture-packed cities. Barcelona, Granada, Venice, Palermo, Paris, Avignon… between them Spain, France and Italy could easily fill a year of weekend breaks. And for longer stays, there are numerous historic regions to explore at leisure: the Moorish towns of Andalucia in Spain; the Renaissance cities of northern Italy; the Loire Valley chateaux in France.\n\nBut Europe has its wild side too. The great mountain chain of the Alps is the birthplace of world climbing, and Switzerland and Austria lay claim to breathtaking scenery criss-crossed by hiking trails. Norway’s fjords are truly epic and (outside the peak summer cruising season) remarkably quiet. North of the Artic Circle, Lapland offers husky sledding, Sami culture and the much-imitated Ice Hotel. Scotland’s Highlands and Islands has vast sweeps of moor, forest and crag; Iceland and southern Italy are dominated by volcanoes; Almeria in southern Spain even has a desert.\n\nSouthern Europe is defined by the balmy Mediterranean Sea, and its coastal towns and islands are where package tourism made some of its biggest mistakes – and started to learn from them. Islands like Tenerife, Malta, Ibiza, Mallorca, Corfu and Cyprus all have interesting hinterlands away from the resort strips, and reward exploration.\n\nThe former Soviet countries of Eastern Europe are catching up fast with the neighbours – and, outside the Euro currency, benefiting from lower prices. With its plethora of Adriatic islands, Croatia is already well-established as an alternative to Greece. Romania, Poland, Belarus and Ukraine harbour bears, wolves and untrammelled rural landscapes; the Baltic states of Estonia, Latvia and Lithuania have historic cities (and great saunas). On the Soviet front line, Germany’s capital Berlin has now been reunited for 20 years, and repeatedly tops ‘favourite city’ lists.\n\nPerhaps the best way to explore Europe is by rail. This is a continent of relatively small countries, and you can whisk from big city to mountain to coast – and on to a whole new country – in a few hours. Inter-rail (for European citizens only) and Eurail passes (for others) give access to 30 countries, and have kick-started many great travelling lives. For UK residents, Rail Europe has fares, routes and passes.\n\nSo what are you waiting for? Start planning your European adventure today…\n\n## Further Reading\n\n### Top 10 Europe travel experiences\n\nFrom mountain ranges to turquoise seas, from really old ruins to throbbing modern cities, Europe has enough to keep every traveller entertained for a lifetime\n\n1. __Explore volcanic landscapes, Iceland__ – Iceland is a hotbed of geothermal activity: geysers spew, volcanoes erupt, hot pools steam. You can see a lot from capital Reykjavik – take a dip in the Blue Lagoon, then a day trip to Geysir and Gulfoss. Longer treks will unearth innumerable volcanic treasures.\n2. __Marvel at the Alhambra, Granada, Spain__ – the Moorish palace and fortress complex that dominates the Andalucian city is a delight of courtyards, pools and ornate chambers. It gets busy though – a good guide will steer you away from the crowds.\n3. __Cruise Norway’s fjords__ – the Unesco-listed inlets of the Norwegian coast are as dramatic as they are far-reaching, stretching way up into the Arctic Circle. Board the Hurtigruten ferry, which runs from north to south and back again year round, to see the lot.\n4. __Island hop, Greece__ – there are over 6,000 Greek islands, which is a lot of hopping. Try Santorini for romance, Crete for ruins and gorges, the Ionian Islands for learning to sail, and all of them for breezy taverna lounging.\n5. __Roaming the Highlands, Scotland__ – head to the UK's far north for the country's wildest wilderness and profuse wildlife: take binoculars to look out for puffins (try the Stacks of Duncansby), golden eagles, otters in the rivers, dolphins offshore (head to Moray Firth) and red squirrels in the woods.\n6. __Cycling in France__ – the perfect place for pedalers of all abilities: pros can tackle stretches of the Tour de France (the slog up Mont Ventoux, perhaps) while more casual cyclists can ride along the Loire or Brittany's coast, stopping off for plenty of vin rouge en route.\n7. __Meet bears and wolves, Romania__ – the Carpathian Mountains are one of the best spots for big mammals on the continent. Trek across this little-populated region with a local guide to maximise your chances of a sighting.\n8. __Hike round the Eiger, Switzerland__ – you don't need to summit this mighty mountain; for the best views of all its faces, walk around it instead, stopping in Heidi-cute hamlets and wildflower meadows. The excellent and efficient Swiss transport system makes access a doddle.\n9. __See Old Europe, Sicily, Italy__ – combine an active volcano, craggy coves, sunny beaches, top nosh and a surplus of ancient ruins on this Italian island, which has a distinctly differently feel to the mainland. Just avoid August, when all of Italy goes on holiday.\n10. __Walk the South West Coast Path, England__ – 1,000km of undulating, sea-hugging, seal-dotted, pasty-serving loveliness: England's longest walking trail is a beauty. In summer look out for basking sharks passing by."
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6agkBk621FGqNb00roMkEh"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6am4wZcT4YA2bVBl5rxnNY"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "ZtQiky5wDVRim8HXHzUNz"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4DKdtTkAsSHwNO0dtin4Hr"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4mNrXHNv9KW7n94A8Wuo8O"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "36a6thuXDzZMWOfZXIjnMX"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "27mXVPAwI3weVUcRnnztOY"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "46JYbOyjtgAnTlI81Yu9vi"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "6qqmVC0KuPoKGdvoppCEJr"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "13b8brqsiCbJtEV1D6VWvy"
            }
          }
        ]
      },
      "contId": {
        "en-US": "europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4Q5kDJHDn7Bw1AlyHtKaTS",
      "type": "Entry",
      "createdAt": "2022-10-11T13:39:07.948Z",
      "updatedAt": "2022-10-16T08:50:16.456Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 55,
      "publishedAt": "2022-10-16T08:50:16.456Z",
      "firstPublishedAt": "2022-10-11T14:03:01.323Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 4,
      "version": 56,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5vLONAzKflUkG9kNAYkiG9"
          }
        }
      },
      "header": {
        "en-US": "Latin America"
      },
      "descriptionText": {
        "en-US": "\n# Overview\n\n### Latin America travel advice, including top 10 Latin America travel tips, map of Latin America, guide to Latin America city breaks, rail journeys in Latin Americ\n\nBut though the Amazon Basin accounts for over a third of South America, it’s far from the whole picture.\n\nLatin America – which includes Central America and Mexico – is a geography lesson brought to life: Chile has fjords, Argentina has pampas, Bolivia has salt flats, Mexico has desert, and Ecuador and Central America are strung with volcanoes. The mighty Andes support the world’s highest capital city (La Paz), as well as the highest mountain (6,962m Aconcagua) and highest railway (from Lima to Huancayo) outside Asia.\n\nFor culture vultures Mexico and the compact countries of Central America are the heartlands of the Maya and Aztec civilisations, and Maya sites such as Chichen Itza (Mexico), Tikal (Guatemala) and Copan (Honduras) retain the power to thrill – despite high tourist numbers.\n\nFurther south there are also myriad opportunities to meet today’s tribal groups in Amazon ecolodges, offering a fascinating insight into the rainforest, an often surprising level of comfort, and, when well-managed, a viable economic future for marginalised people.\n\nFor walkers, Peru and Patagonia are classic destinations. The trek to the Inca city of Machu Picchu (Latin America’s biggest tourist draw) heads a long list of Peruvian trails combining stunning scenery and ancient cultures. In Chile, the jagged peaks of Torres Del Paine are the iconic image of Patagonia, the southern wilderness shared with Argentina.\n\nFor wildlife enthusiasts, the most bio-diverse area of the planet awaits, with Brazil, Peru, Ecuador and Colombia all offering access to the mighty Amazon. But many other parks or areas best the Amazon for actual sightings: try Brazil’s Pantanal or Guyana’s Iwokrama for jaguar; Mexico’s Baja peninsula for whales and whale sharks; Central America for birds; the Galapagos Islands for, well, extremely close encounters.\n\nIf you’ve got a few months to spare, Latin America is a thrilling region to explore overland. Travellers on the ‘gringo trail’ frequently start in the sophisticated cities of Rio or Buenos Aires, or work their way south from Mexico City.\n\nLocal transport is variable: the overcrowded ‘chicken bus’ and ramshackle pickups remain stalwarts; trains are few but spectacular. Flights are an increasingly popular way of handling some of the huge distances involved (Brazil alone is 35 times bigger than the UK), but remain expensive.\n\nWherever you’re going, two useful resources are the Latin American Travel Association (LATA) – whose members comprise the UK’s leading Latin American tour operators – and the South American Explorers Club, which offers independent travel advice and friendly clubhouses in Lima, Cusco, Quito and Buenos Aires.\n\nSo what are you waiting for? Start planning your Latin American adventure today…\n\n# Further Reading\n### Top 10 Latin America experiences\n\nGreat treks to lost cities, wildlife that nibbles your shoelaces, the world's biggest raiinforest (by far) and colourfully crumbling colonial splendour – Latin America has something to suit everyone\n\n1. __Inca Trail to Machu Picchu, Peru__ – Latin America’s biggest draw is over-visited but still overwhelming. Book early to ensure you get a place on the classic Inca Trail, or consider one of the quieter alternative routes.\n2. __Explore the Galapagos, Ecuador__ – Darwin’s wildlife wonderland shows evolution in action, and offers extremely up-close wildlife encounters with frollicking sea lions, scaly iguanas, giant tortoises and a range of curious birds (don't miss the courtship dances of both the albatross and the blue-footed booby).\n3. __Go jaguar-spotting, Brazil__ – the Pantanal wetland is simply the cat’s whiskers: it's one of very few places where jaguar are regularly spotted, along with a whole host of other wildlife. August and September are the peak months for big cat sightings.\n4. __Hike the wilds of Patagonia__ – a travel word to conjure with, Patagonia is a sweeping land of lakes, rock spires and wilderness, offering fantastic trekking. The Torres del Paine Circuit is a classic, though other options abound. Try northern Patagonia to escape the crowds.\n5. __Riding the rails, South America__ – the Devil’s Nose, the Train to the Clouds – the names of the continent's rail routes say it all. The trains here are more scenic spectaculars than a means to get around: there are few services, but those that do exist offer world-class experiences.\n6. __Whale-watch in Baja California, Mexico__ – a bounty of marine riches: in winter the Pacific coast of this peninsula is home to pretty much the entire population of grey whales, while the Sea of Cortez, on Baja's east, is a sheltered calving ground for fin, sperm, humpback and even blue whales; the best time for blues is January to March.\n7. __Follow the Maya Route, Guatemala__ – a museum in the rainforest: trek into the jungle of Guatemala for an Indiana Jones adventure. Pyramids such as Tikal are well excavated; for a more rugged adventure head for little-visited and rainforest-hidden El Mirador.\n8. __Experience Carnival, Brazil__ – Rio gets the headlines, but the February/March street parades in Salvador and Recife get the connoisseurs: expect samba moves, exuberant costumes and a real locals' party.\n9. __Fall for Cartagena, Colombia__ – this Unesco-listed, coastal gem of a city has deservedly put Colombia back on the map; wander the pastel-coloured streets and soak up the ambiance. Visit in January for the Hay Literary Festival.\n10. __Salar de Uyuni salt flats, Bolivia__ – this high-altitude, incredibly flat and vastly spreading salt pan is one of the world's weirdest places. Stay at a hotel made of salt blocks, meet the resident flamingoes and go on a (long) drive to appreciate the scale."
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "3Xg89wOKieX0peAmCiVGLz"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5P14o3jWd3gvWQZmaAviyi"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "mNlNTLfiiVcpEMdYvb4Ma"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "53d7rWxez2KPu8eLP9KEFH"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "zAQUheQpUjtuQ2Mh5mWpv"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "19ieKJFxVNAJpfPzjDC9GD"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "7A8Qy4wB06aHYL144zSO9G"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "73J269W3JmHjkOKc8ILSbN"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "w1Jg7d1RT7mzWS5jJF0uA"
            }
          }
        ]
      },
      "contId": {
        "en-US": "lamerica"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4ck4ZOsmjkAJJ7vTMXUSnq",
      "type": "Entry",
      "createdAt": "2022-10-12T14:16:21.635Z",
      "updatedAt": "2022-10-16T08:34:53.004Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 46,
      "publishedAt": "2022-10-16T08:34:53.004Z",
      "firstPublishedAt": "2022-10-13T06:33:27.139Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 6,
      "version": 47,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "1N3JU2FBsi6F01merecjgu"
          }
        }
      },
      "header": {
        "en-US": "Oceania"
      },
      "descriptionText": {
        "en-US": "\n# Overview\n\n### Your full Wanderlust guide to Australia, New Zealand and South Pacific\n\nLong viewed by snooty Europeans as cultural backwaters, in the last decade Australia and New Zealand have been rocketed to the top of travellers’ wishlists by two spectacular global events: the 2000 Sydney Olympics, and the NZ-set Lord of the Rings film trilogy. So now the world knows what visitors knew all along – that these two little-and-large neighbours pack in more adventure, natural wonder and (breathe it) cultural wallop than almost anywhere else on earth. Add in the 7,500 beguiling isles of the South Pacific – from the enigmatic big heads of Easter Island to the land-divers of Vanuatu – and you have a traveller-friendly region with enormous depth and variety. The classic first-timer’s tour of Australia – ‘Sydney, Rock and Reef’ – ticks off its world icons: the feelgood harbour city, the jaw-dropping desert monolith of Uluru (Ayers Rock), and the divers’ paradise of the Great Barrier Reef. Many equally rewarding experiences lie further afield. though. Western Australia offers true wilderness adventures in the outback; Arnhem Land, in the Northern Territory, is perhaps the best place to learn about Aboriginal culture; and Tasmania boasts world class rafting, hiking and rainforest. New Zealanders like to call their home ‘God’s Own Country’, and for anyone with a taste for outdoors, they’re probably right. The larger, craggier South Island often grabs the headlines, but the North Island is quieter and no less beautiful. Take your pick from fjord-lined Milford Sound, the coastal Abel Tasman and Queen Charlotte tracks, the volcanic Tongariro Crossing – and dozens more hiking gems. Want to go faster? Queenstown is a mecca for adrenaline sports – the bungee jump and many more lunatic endeavours were invented here. New Zealand’s Maori culture is also fascinating and easily accessible through museums, cultural tours and homestays. This part of the world is often called Oceania, and for good reason: the South Pacific defines everything from Bondi Beach’s surfers to New Zealand’s yachties. And strung out to the north and east of New Zealand, the far-flung islands of Polynesia – settled by pioneering sailors – retain a strong seafaring culture. Most visited is Fiji, the hub of South Pacific air travel. Here there are luxury resorts a-plenty, but also many chances to experience traditional, conservative Polynesian village life. Nearby(ish) Samoa is emerging as a less-developed alternative. Tonga has world-class humpback whale-watching and the Solomon Islands and Vanuatu have great diving and are home to remarkable tribal cultures. Further afield, paradise islands like Rarotonga, Tahiti and Bora Bora are firmly in luxury honeymoon territory. However, the passenger-carrying freighter Aranui is still the way to visit the remote Marquesas Islands on one of the world’s greatest and remotest boat journeys. So what are you waiting for? Start planning your Australasian adventure today…\n\n### Top 10 Australia, NZ and South Pacific travel experiences\n\nMarvel at big heads, dive with big fish, wander round big rocks – you can do it all and more down under\n\n1. __Aboriginal Arnhem Land, Australia__ – venture into this rarely visited expanse of the Northern Territory for close cultural encounters with the Aboriginal owners.\n2. __Marvel at the moai, Easter Island__ – the stone heads on this far-flung outpost of Chile are as mysterious as they are massive. Trek around the island to see the various statues: some guard the coast, others lay fallen in the massive quarry from which they were hewn.\n3. __Meet a kiwi, Stewart Island, New Zealand__ – the nocturnal and shy kiwi can be hard to spot; for your best chance head out at night with a naturalist guide on New Zealand's little-visited southern island.\n4. __Watch the land-divers, Vanuatu__ – the original bungy jump: between April and June every year some of the men of Vanuatu jump from precariously high platforms with just vines to (hopefully) break their fall.\n5. __See Sydney Harbour, Australia__ – the world's most beautiful city? Take the ferry from Circular Quay to Manly to best appreciate the marriage of bridge, opera house and ocean.\n6. __Swim with whale sharks, Western Australia__ – from March to June large numbers of pelagics visit WA's Ningaloo Reef. Dive in with whale sharks, rays and a host of other marine life.\n7. __Explore Milford Sound, New Zealand__ – the headline act of New Zealand's Fjordland, Milford is a picturesque glacier-gouged inlet, dotted with waterfalls and wildlife. Drive from Te Anau, fly in for views over the mountains en route, or walk the Milford Track to arrive on foot.\n8. __Admire Uluru (Ayers Rock), Northern Territory, Australia__ – Australia's big red rock is the big draw, but while you're in the area don't miss King's Canyon and the Olgas too; for a true-blue bush experience, camp out in a swag under the stars. \n9. __Raft the Franklin River, Tasmania, Australia__ – nearly ruined by a dam, the Franklin is a wild and wonderful waterway, best explored on a multi-day rafting trip; look out for the local wildlife as you camp by the riverbank.\n10. __Dive the Great Barrier Reef, Queensland, Australia__ – stretching for more than 2,600km along the east coast of Oz, this vast wall of coral offers great snorkelling and diving as well as island hopping (try the Whitsundays). Head to the outer reef for the best dive sites."
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "4voEiRIglxtxrNT6acP7De"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5UDouiC5ILSBsl7UvjFlJb"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2gfuuIiyiuhFFGo3h09cXB"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "57eliXX1B8iLjOu6xoB711"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5N64YqqJDi3brfJHod5FhK"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5b1uZATwT9yxbvrvusII30"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "1ruP9XgZ8LHhdM3EXVXSpg"
            }
          }
        ]
      },
      "contId": {
        "en-US": "oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "europe"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2Z8B1LhNuBCdOpu9EpVDrq",
      "type": "Entry",
      "createdAt": "2022-10-12T14:16:35.628Z",
      "updatedAt": "2022-10-18T10:13:58.753Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 91,
      "publishedAt": "2022-10-18T10:13:58.753Z",
      "firstPublishedAt": "2022-10-12T14:24:32.444Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 15,
      "version": 92,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Iceland"
      },
      "body": {
        "en-US": "Iceland is, though, wild – outside the buzzing, artistic capital, Reykjavík, it’s the natural wonders and sweeping empty landscapes that captivate.\n\nIceland’s ‘Golden Circle’ captures most visitors’ attention, and no wonder: the steaming thermal waters of the Blue Lagoon, thundering waterfall of Gullfoss and spouting geyser of, well, Geysir are pretty awe-inspiring.\n\nBut there’s much more to do in Iceland: whalewatching from Reykjavík or Húsavík; exploring the volcanic landscapes of the Snaefellsnes Peninsula; discovering the puffin-speckled Westmann Islands; striking out across the vast Vatnajökull icecap; and sailing around the isolated, silent Westfjords, home to seals, seabirds and Arctic foxes.\n\nReykjavík itself is a colourful little town, with great bars, museums and hot springs to souse yourself in.\n\n### Recommendations\n\n1. Explore the remote __Hornstrandir nature reserve__ - Sail Iceland’s Westfjords region.\n2. __Take the kids to Iceland__ – Land of the little folk\n3. Join the annual __horse roundup__\n4. Gird your loins for the weekly Runtur bar crawl around __Reykjavík’s pubs__\n5. Go __whalewatching from Husavík__\n6. Venture onto the vast __Vatnajökull icecap__\n\n### Tips\n\nLook out for music festivals – the big names (Björk, Sigur Rós) may play Reykjavík’s Airwaves Festival (October), but consider heading to Isafjor∂ur in the Westfjords for the unique Aldrei Fór Ég Suður (‘Never Went South’), where the likes of Mugison and up-and-coming bands play.\n\nTaking a sleeping bag can save you good chunks of money – bargain sleeping-bag accommodation is available in many guesthouses, not just in hostels.\n\n## Further Reading\n\n### Travel in Iceland: Vital stats\n\nCapital of Iceland: Reykjavík\nPopulation of Iceland: 310,000\nLanguages in Iceland: Icelandic. English is almost universally spoken\nTime in Iceland: GMT\nInternational dialling code for Iceland: +354\nVoltage in Iceland: 220V 50Hz AC\nVisas for Iceland: Visas\nMoney in Iceland: Icelandic króna (JD), ATMs are widely available. Tipping isn’t common; service charges are usually included in rates.\nIceland travel advice: Foreign and Commonwealth Office\nIceland tourism board: Iceland\n\n### When to go to Iceland\n\nSummer (June-August) is warm and pleasant, with long days; the main tourist sites can be crowded.\n\nMay and September are still pleasant, though some accommodation may be closed.\n\nWinter (October-February) is cold and, particularly around January, dark; many hotels and attractions are closed, though Reykjavík is still a great choice for a city break – and winter’s also the time to see the northern lights.\n\n### International airports\n\nKeflavík International Airport (KEF) is 48km west of Reykjavîk. \nGetting around in Iceland\n\nInternal flights are convenient ways of accessing the Westfjords, Westmann Islands, Akureyri (for the north coast and Lake Myvatn) and Egilsta∂ir for the eastern region.\n\nComfortable buses serve Iceland’s main towns in summer, though services are sparse September-May. Car hire, though pricey, is a good way to explore; there’s really only one major road running a circuit around Iceland.\n\n### Iceland accommodation\n\nIceland has the full range of accommodation, from campsites, farmhouses, mountain huts and hostels through family-run guesthouses to hotels. Campsites, and some other options, are usually only open in summer, when some schools and colleges offer accommodation.\n\n### Iceland food & drink\n\nFresh fish and lamb are delicious, as is skyr, a yoghurt-like dessert. Hotdogs (pylsur) are ubiquitous, cheap snacks. Traditional dishes such as svi∂ (singed sheep’s head) and hákarl (buried, fermented shark meat) take a strong stomach. Coffee and beer are everywhere, though the latter is expensive. The national firewater is brennivin, schnapps flavoured with caraway seeds.\n\n### Health & safety in Iceland\n\nIceland is extremely safe – you can drink water from the tap, serious diseases are rare, no poisonous animals. However, you should take account of highly changeable weather – always be prepared when out in the wilds, with weatherproof and warm clothing, and be extremely careful when walking on glaciers."
      },
      "location": {
        "en-US": {
          "lon": -19.0208,
          "lat": 64.96305
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5YKTPlbMBRiIzBvxQ05UGp"
          }
        }
      },
      "destinationImage": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5YKTPlbMBRiIzBvxQ05UGp"
            }
          }
        ]
      },
      "entryId": {
        "en-US": 2
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "europe"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7C01nZyMNU0MVaKkhPpUBS",
      "type": "Entry",
      "createdAt": "2022-10-12T17:05:57.489Z",
      "updatedAt": "2022-10-18T10:08:00.985Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 51,
      "publishedAt": "2022-10-18T10:08:00.985Z",
      "firstPublishedAt": "2022-10-12T17:18:13.282Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 7,
      "version": 52,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Norway"
      },
      "body": {
        "en-US": "Stretching from a temperate European latitude right up into the Arctic Circle, Norway has a vast landmass but a population of under five million – Mother Nature is mistress here, and has been a bit of a show-off.\n\nNorway’s west coast is over 25,000km long, ragged, island-dotted and spectacular: the fjords of Geirangerfjord and Nærøyfjord have even been declared Unesco World Heritage sites\n\nAway from the coast Norway’s landscape is mountainous and wild, pocked with surprisingly vibrant towns and traditional rural villages. In the far north of Norway the Sami still herd reindeer, while intrepid travellers flock to mush husky-sleds and marvel at the northern lights.\n\nUnless they go further north still – Norway’s outlaying Svalbard archipelago offers the chance to see polar bears under the midnight sun.\n\n### recommendations\n\n1. __Kayak around the small fishing communities of Sommarøy__, high up in the Arctic Circle, during the midnight sun\n2. __Snorkel with killer whales__ (yes, really), or watch them from the warmth of a boat, at Tysfjord, north Norway\n3. __Delve into Sognefjord and the surrounding__, rugged west coast, some of Norway’s most stunning landscapes\n4. __Learn ancient myths and legends__ on the remote and beautiful island of Selja, a 15-minute boat journey from Selje, south of Ålesund\n5. __Camp – for free – around Preikestolen__ (Pulpit Rock), the dramatic ledge overlooking lovely Lysefjord\n6. __Look for polar bears__ and walrus from the deck of an expedition ship while cruising around Spitsbergen\n7. Scan the skies for the __northern lights__ in Norway’s far north\n8. Find free things to do (__museums, parks, forest hikes…__) in Oslo, Norway’s cool capital\nWanderlust tips\n\nIn Norway, make the most of your hotel breakfast buffet so you only need a snack lunch – this will keep costs down. Look out for city-bike schemes, where you can hire bikes for low prices (available in Oslo, Trondheim and beyond). If travelling in summer, when the sun barely sets, bring an eye mask.\n\n### I wish I'd known...\n\nDaisy Cropper reveals the things she wished she'd known before taking her first trip:\n\n\"To leave room for the belly-bulging buffets. Many Norwegian hotels have buffets in place of set menus, which are often much, much cheaper. After the starter (which I had assumed was the main meal), I was ordered to go back up to the bar... twice!\"\n\n\"The trek to Mount Skåla's summit is a hard slog. I wouldn't have taken so much stuff in my day pack, if I'd known. The views from the top are worth every step though!\"\n\n## Further Reading\n\n### Travel in Norway: Vital stats\n\nCapital of Norway: Oslo\nPopulation of Norway: 4.9 million\nLanguages in Norway: Norwegian. The official written languages are Bokmål, Nynorsk and Sami. English is widely spoken.\nTime in Norway: GMT+1 (GMT+2 Mar-Oct)\nInternational dialling code in Norway: +47\nVoltage in Norway: 230 V, 50 Hz\nVisas for Norway: Not required by UK nationals\nMoney in Norway: Norwegian krone (Nkr). ATMs are widespread and credit cards widely accepted. Service charges are generally added to the bill.\nNorway travel advice: Foreign and Commonwealth Office\nNorway tourism board: Norway\nWhen to go to Norway\n\nThe climate varies greatly from north to south in Norway. Summer in Norway is June to September; temperatures in Oslo reach around 20-25°C, in Tromsø around 15-20°C.\n\nMore northerly latitudes experience 24-hour daylight in high summer, and many festivals occur at this time.\n\nWinter in Norway (Dec-Feb) is very cold and permanently dark above the Arctic Circle; however, this is a great time to see the northern lights and try activities such as husky-sledding and snow-shoeing.\n\nSpot orca at Tysfjord from mid-October to January. Spring and autumn can be warm and pleasant, and less busy than peak season.\n\n### Norway international airports\n\nOslo (OSL) 48km from Oslo; Bergen (BGO) 12km from Bergen; Stavanger (SVG) 11km from Stavanger\n\n### Getting around in Norway\n\nInternal flights connect over 50 Norwegian airports, including the outlaying Svalbard archipelago, and can cut journey times considerably; if you plan to travel a lot consider an airpass.\n\nNorway has a good network of boats. The Hurtigruten coastal ferry takes six days to sail from Bergen to Kirkenes; it is a vital lifeline for Norwegians living in remote seaside communities, and an incredible travel experience. Other boats delve into Norway’s spectacular fjords.\n\nNorway’s buses are good, comfortable and punctual. Trains are also a good wat to travel; invest in a rail pass if you plan to cover a lot of ground.\n\nA hire car will give you maximum flexibility and allow you to drive some of the specially designated scenic tourist roads.\n\n### Norway accommodation\n\nThe cheapest accommodation option in Norway is wild camping, which is legal as long as you’re more than 150m from a dwelling. There are also plenty of campsites. There is a network of mountain huts across Norway’s wilderness areas, often conveniently spaced a day’s hike apart.\n\nNorway has some good hostels, and the full range of B&Bs, guesthouses and hotels; you generally get what you pay for.\n\n### Norway food and drink\n\nSucculent seafood is a Norwegian speciality; try delicious salmon (smoked or grilled), cod (often dried), trout and herring (for all meals, sometimes pickled). Fish soups are a common feature on Norwegian menus.\n\nFish tends to be cheaper than meat in Norway, though look out for gamey reindeer steaks plus good beef and venison. Potatoes are a staple carb; other common vegetables in Norway include cabbage, swede and turnip. Pølse (hot dogs) are a quick, cheap snack.\n\nVegetarianism isn’t that common in Norway. You’ll have no trouble going meat-free in big towns; cheese salads are a common option.\n\nAlcohol is expensive in Norway. That said, Norwegians are keen beer drinkers; local brands include Ringses and Mack. Buy your supplies from a Vinmonopolet (state-run off-licence) to keep costs down. Wine is pricey. Aquavit, Norwegian firewater made from potatoes, is an acquired taste.\n\n### Health and safety in Norway\n\nNo specific jabs are required for Norway. Check yourself for tick bites after walking in long grass/forests. Mosquitoes and blackflies can irritate in summer – pack repellent.\n\nIf hiking out in the Norwegian countryside, be prepared for all weathers and let someone know where you are going."
      },
      "location": {
        "en-US": {
          "lon": 8.468945,
          "lat": 60.47202
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "Tpd6OEoJRCCTIWyTxu3GV"
          }
        }
      },
      "entryId": {
        "en-US": 1
      },
      "travelRegion": {
        "en-US": "Europe"
      },
      "parentId": {
        "en-US": "europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2XajMyMxkyY4wWOhaUEVbO",
      "type": "Entry",
      "createdAt": "2022-10-12T19:32:03.284Z",
      "updatedAt": "2022-10-16T08:48:27.924Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 14,
      "publishedAt": "2022-10-16T08:48:27.924Z",
      "firstPublishedAt": "2022-10-13T05:22:57.329Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 3,
      "version": 15,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "3M626SsvG3oRsOcfpWrDOQ"
          }
        }
      },
      "header": {
        "en-US": "Africa"
      },
      "descriptionText": {
        "en-US": "## Overview\n\nFor many visitors, Africa means one thing – safari – and the pursuit of iconic wildlife encounters can easily become a lifelong passion. But there’s far more to the continent than the nature documentary view, and different African regions have their own particular appeal...\n\nHow long to spend in Africa\nIf you’ve got time on your hands, you can’t beat a top-to-bottom odyssey. Cairo to Cape Town is the classic overlanding route, which takes about twenty weeks, but there are all sorts of variations.\n\nA month allows you to get a feel for the African way of life, and explore two or three countries – perhaps combine some wildlife viewing with trekking and coastal downtime. If time is really tight, focus your sights on one destination and don’t try to pack too much in: weather conditions, accessibility and laid-back attitudes can play havoc with gruelling schedules."
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "5OWjp1FtrJVnmXMycZe8Vs"
            }
          }
        ]
      },
      "contId": {
        "en-US": "africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3nviMtnmQQWMxT39YTlSBB",
      "type": "Entry",
      "createdAt": "2022-10-12T19:38:21.470Z",
      "updatedAt": "2022-10-16T08:48:55.498Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 10,
      "publishedAt": "2022-10-16T08:48:55.498Z",
      "firstPublishedAt": "2022-10-13T05:23:07.087Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 3,
      "version": 11,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "continentTravelInfo"
        }
      }
    },
    "fields": {
      "continentImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "724MWLra9VKHWQfQpSjRsC"
          }
        }
      },
      "header": {
        "en-US": "Asia"
      },
      "descriptionText": {
        "en-US": "Overview\nAsia travel advice, including top 10 Asia travel experiences, map of Asia, guide to travel in Asia, what to do in Asia and when to go to Asia\n\nLow living costs, fascinating Buddhist cultures and easy-going rural lifestyles make Southeast Asia and India classic destinations for independent travellers, and the recent boom in regional airlines make travelling around these regions increasingly swift. The neighbouring countries of Vietnam, Laos and Cambodia are often visited on one itinerary, frequently combined with traveller-friendly Thailand.\n\nFor walkers, the mighty Himalaya mountains arc through Asia, sheltering little-visited mountain kingdoms and providing world-class treks in Nepal, Bhutan, Tibet (China), Pakistan, and northern India.\n\nFor wildlife enthusiasts, Asia offers the chance to see three of the world’s most iconic threatened species: the tiger, the panda and the orang utan. Beyond these flagship species, the teeming rainforests of Malaysia, Indonesia, Papua New Guinea and the island of Borneo harbour species still unknown to science, as well as opportunities to meet and stay with Asia’s hunter-gatherer tribes.\n\nCulture vultures are spoiled for choice too, with two of the world’s oldest civilisations – China and Japan – showcasing their rich pasts but also, in their buzzing, 24-hour cities, pointing to the future. It is hard to pick from Asia's architectural marvels: the Taj Mahal and Angkor Wat are just two.\n\nLooking for downtime? Asia also boasts more than its fair share of tropical beaches – ideal for snorkelling and diving. Pricey but postcard-perfect, the Indian Ocean islands of The Maldives are a classic honeymoon destination, while nearby Sri Lanka offers greater diversity and better value. Further east, take your pick from the thousands of beach-fringed islands of Thailand, Indonesia and the Philippines.\n\nMany first-time visitors to Asia worry about health issues, but in reality, providing you take reasonable sensible precautions, few travellers suffer more than an upset stomach. And for many, good health is the very reason for a visit: throughout Asia, natural healing techniques and Buddhist philosophies are combined in some of the world’s most relaxing and rejuvenating body and soul experiences.\n\nSo what are you waiting for? Start planning your Asian adventure today…\n\n__Further Reading__\nTop 10 Asia travel experiences\nA mesmerising mix of religions, cuisines and cultures, Asia has something to offer every traveller. Try these for starters\n\n1. Ride the Trans Siberian Railway, Russia – this epic, six-day train ride from Moscow to Beijing or Vladivostok is the best way to see Siberia. Pack a good book and prepare to drink a lot of tea and vodka with your carriage-mates: outside your window Europe turns into Asia.\n2. Visit Luang Prabang, Laos – this laidback town on the banks of the Mekong River is travellers' heaven: see orange-robed monks wandering amid the temples, shop for local crafts, take a cookey class and then eat the spoils with a cold Beer Lao.\n3. Stay in a tribal longhouse, Borneo – gain an insight into tribal life by bedding down with a local family in their traditional home; a stay will likely include homecooking, jungle walks and a bit of a sing song.\n4. Take a city break in Istanbul, Turkey – East meets West, Europe meets Asia: the Bosphorus, which runs through Istanbul, divides the continents in this most fascinating of places.\n5. Trek to Everest Base Camp, Nepal – the summit might be for only a few hardy (and wealthy) mountaineers, but anyone with an ounce of fitness can tackle the spectacular trek to the base of the world's highest mountain.\n6. See the Taj Mahal, India – true love sculpted in marble, this impossibly romantic mausoleum is a travel great: get up pre-dawn to see it before the crowds arrive.\n7. Cruise the backwaters, Kerala – take to an old rice barge and float along the languid waterways of southern India. Dine on divine veggie food, watch fishermen cast their nets and generally let life pass you by.\n8. Meet a panda, China – though increasingly rare, you can still spot pandas: for guaranteed sightings, head to the research centre in Chengdu; for more adventure (and the chance of a wild encounter) trek into Sichuan's Qinling Mountains.\n9. Explore Angkor, Cambodia – this temple complex is vast. Do wander the central structures of Angkor Wat and see the big stone heads of the Bayon temple, but allow time to explore the outer (and less-visited) sites to add adventure.\n10. Cruise Halong Bay, Vietnam – board a traditional junk boat and float amid the karst islands and fishing communities of northern Vietnam. Adrenalin junkies can try a range of activities too, including world-class rock climbing."
      },
      "carouselImages": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "62ltuE6ObOgR7f4pFqlOuy"
            }
          }
        ]
      },
      "contId": {
        "en-US": "asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1O7579O8zci5nWuaQtR5d6",
      "type": "Entry",
      "createdAt": "2022-10-13T04:25:15.942Z",
      "updatedAt": "2022-10-18T10:09:23.908Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 11,
      "publishedAt": "2022-10-18T10:09:22.302Z",
      "firstPublishedAt": "2022-10-13T05:27:59.599Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 13,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Morocco"
      },
      "body": {
        "en-US": "Barely 20 miles from Europe, Morocco is a world apart. Fast ferries from Spain link a country that is part Arab, part African, with a character all of its own.\n\nMorocco’s cities are the obvious draws. Marrakech and Fez are the places to explore the medieval alleys of ancient medinas, packed with donkeys, traders and the scents of Africa. Casablanca and Rabat are modern with elegant boulevards and a Gallic café culture, while Tangier and Agadir are sophisticated cities where the beach takes centre stage. \n\nDrill down to the smaller towns and Morocco’s heritage is more distinct and accessible. Visit Chefchouan, in the north, where cornflower-blue houses sprawl on a fertile hillside, or the fortified coastal town of Essaouira, once a Portuguese outpost on Atlantic Africa. Inexpensive taxi rides reach stunning highlights, Roman columns preserved by the desert at Volubilis and mud-built forts towering over folding mountain landscapes.\n\nZoom in closer and be welcomed into village life: ride the waves in surf communities on the sunsoaked southern coast near Agadir, trek to Berber villages huddled against adobe castle walls in the Atlas Mountains and join nomads on camels to cross Saharan dunes. \n\nAt every level Moroccans are exceptionally hospitable: this is one country where you are likely to be invited into private homes and plied with sweet tea. Relax and complete your experience with a taste of Morocco; slow-cooked tagine, pastilla (pigeon pastry) or couscous are specialities. \n\nWanderlust recommends\nGo Trek. The best views are mountainous, in the northern Rif or Atlas ranges. Donkeys generally carry your gear, but camels are best in the desert and to climb Mount Toubkal it’s wise to upgrade to a mule\nHit the Beach. Kite-surf in the breeze off the fortified city of Essaouira or head south to Agadir for the best surf and the strongest sun\nPlay Lawrence of Arabia. Orson Welles’ classic was filmed at the Unesco registered fort at Ait Benhaddou, while more recently scenes in Gladiator were shot in oases close by\nStep Back in Time. The medinas of Fez and Marrakech belong to a different era, where cottage industries – tanneries, potteries and textile factories – co-exist with daily life\nEnjoy the Theatre. As night falls, book a ringside seat at Marrakech’s Djemaa el-Fna. Musicians, snake-charmers, jugglers and acrobats are spectacular side-shows amongst food stalls and street vendors\nRelax in a Riad. The classic Moorish home sets the rooms in galleries around a central courtyard. Many have been restored, providing little oases of tranquillity in the busiest city centres\nRide a Camel. You don’t have to go far to do this, as freelance camel-owners ply most city beaches and tourist sites, but for a taste of the Sahara on a ‘ship of the desert’ choose M’Hamid or Merzouga\nDrive South. Bandit activity further west make Morocco’s road to Mauritania the favoured route to sub-Saharan Africa. Most of the Moroccan route is tarmac\nWanderlust tips\nYou will spend at least some time undergoing a hard sell, probably in a carpet shop. Take the time to enjoy your mint tea, watch a carpet being woven and simply play along with the haggling charade. You probably won’t get a bargain, but you just might pick up a rug you really like.\n\nIn Fez, hire an official guide for at least one day. They will keep pestering freelance guides and bay and vastly enhance your insight into their World Heritage-listed medina.\n\nFurther Reading\nTravel in Morocco: vital statistics\n\nCapital of Morocco: Rabat\nPopulation of Morocco: 34.9 million\nLanguages in Morocco: Moroccan Arabic. French, Berber and Spanish (in northern parts) are also spoken\nTime in Morocco: GMT (GMT+1 June-September)\nInternational dialling code for Morocco: +212\nVoltage in Morocco: 127/220V 50Hz AC\nVisas for Morocco: Morocco visa\nMoney in Morocco: Morocco Dirham (Dh). ATMs are widely available. Tipping and haggling are important parts of Moroccan culture.\nMorocco travel advice: Foreign & Commonwealth Office\nMorocco tourist board: Moroccan National Tourist Office\n\nWhen to go to Morocco\nSpring (March-May) and autumn (September-November) are the most pleasant times to visit, with warm days and cool nights. Summer (June-August) is stiflingly hot, except in the high mountains, while winter can be chilly everywhere. Ramadan sees many restaurants close during the day and transport options can be limited.\n\nInternational airports\nMarrackech Menara Airport (RAK) is 6km south-west of the city. Mohammed V International Airport (CMN) is 30km south-east of Casablanca. Agadir Al Massira Airport (AGA) is 28km east of the city.\n\nGetting around in Morocco\nDomestic flights link the main cities, usually via the Casablanca hub. Trains connect Tangier, Fez, Meknes, Rabat, Casablanca and Marrakech.\n\nBuses and coaches link most towns; grand taxis (share taxis) are quick and convenient for shorter inter-town journeys. Car hire is possible, though driving in cities can be fraught.\n\nMorocco accommodation\nMorocco has some fine accommodation options. Campsites are available, especially near national parks, and camping is necessary on many treks and in the desert. Hostels are also widespread, as are comfortable and reasonably priced hotels. Many riads (now a generic name for medina houses converted into hotels) offer stylish rooms around a central courtyard.\n\nMorocco food & drink\nMoroccan food is a highlight of any visit. Small cafes and stalls serve harira soup, brochettes (kebabs) and simple couscous while swanky ‘palace’ restaurants dish up elaborate tagines (casseroles) and pastilla (flaky pigeon pastry). Mint tea is the ubiquitous drink, forced on you by carpet-shop owners but generally offered out of a genuine sense of simple hospitality. It’s a refreshing tipple on a hot day. Alcohol is rarely served outside upmarket hotels and occasional (sometimes dubious) city bars.\n\nHealth & safety in Morocco\nConsult your GP or a travel health clinic for advice on inoculations. Drink only bottled or filtered water, and be wary of salads or unpeeled fruit.\n\nDogs in the countryside – especially shepherds’ dogs – can be aggressive. Carry a stick if possible or be ready to grab a stone to throw if one gets too close.\n\nPickpocketing does happen in busy spots, though violent crime is rare. Tourists are often hassled or pressured to visit shops in medinas – respond with a good-natured ‘no’ ('la shoukran' in Arabic) and you’ll be fine."
      },
      "location": {
        "en-US": {
          "lon": -7.09261,
          "lat": 31.7917
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4EBSDZs00qckGqaGlFELN6"
          }
        }
      },
      "entryId": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7fr1htYux484W5dXJYCRTA",
      "type": "Entry",
      "createdAt": "2022-10-13T04:29:01.834Z",
      "updatedAt": "2022-10-18T10:15:35.286Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 22,
      "publishedAt": "2022-10-18T10:15:35.286Z",
      "firstPublishedAt": "2022-10-13T05:27:44.249Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 23,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Ethiopia"
      },
      "body": {
        "en-US": "Ethiopia is as colourful as it is diverse. While camels might stroll into town in Dire Dawa, Ethiopian wolves roam the countryside at Bale Mountains national park. Rock-hewn churches at Lalibela, underground tombs at Aksum and well-preserved castles in Gondar give testimony to Ethiopia’s heritage on the aptly named ‘historical circuit”.\n\nThe Danakil Depression is one of the most other-worldly sights in Ethiopia, with its lava lakes and colourful sulphurous pools, but high temperatures and a drop to -116m below sea level, make it one of the most strenuous places to visit. The wilderness of the Awash national park gives way to bustling market towns, while cars still haven’t replaced horse-drawn carts in the cities.\n\nIt is believed that coffee originated in Ethiopia, and to this day the preparation and consumption of coffee is an integral part of Ethiopian society.\n\n## Recommendations\n\nVisit Aksum with its palace ruins, underground tombs and stelae; the city houses Ethiopia’s holiest shrine\nGet trekking in the Simien Mountains national park, which offers routes for casual strolls and weeks-long hiking. The park has a large variety of wildlife, and is the access to Africa’s forth-highest peak Ras Dashen (4620m).\nWander among the 11 churches of Lalibela, which were cut straight from the rock at an altitude of 2630m.\nHarar’s walled old town invites travellers to get lost in its maze of 362 alleyways. At night, the last remaining hyena men feed the animals just outside the city walls, and brave visitors can have a go too.\nDelve into the Danakil Depression, the lowest place in Africa (-116m) and among the most inhospitable places on earth.\nTake a bath in the hot spring pools at Wondo Genet or hike through the forest for a glimpse of the Rift Valley and spotting various bids as well as baboons and hyenas.\nStroll around the city of Gondar, nicknamed 'Africa’s Camelot' with its slightly surreal cluster of African castles and Italian cafés\nWanderlust tips\n\nHead towards the city of Bahar Dar and Lake Tana. It is Ethiopia’s largest lake and the source of the Blue Nile. There are 20 centuries-old monasteries on Lake Tana’s islands, and some such as Ura Kidane Meret, allow female visitors.\n\nJust a few kilometres down the road, the river plunges down the impressive Tis Isat waterfall, which is a particularly captivating sight during the wet season. Both the lake, and the walk around the waterfall make for good bird-watching excursions.\n\n# Further Reading\n\nTravel in Ethiopia: vital statistics\nCapital of Ethiopia: Addis Ababa\nPopulation of Ethiopia: 85.2 million\nLanguages in Ethiopia: Amharic plus 70 other local dialects, but English is the most taught foreign language in schools.\nTime in Ethiopia: GMT+3 Note: Ethiopians use the 12-hour clock. Sunrise is at 12 o’clock (6am our time) and an hour later it’s 1 o’clock (7am).\nInternational dialling code for Ethiopia: +251\nVoltage in Ethiopia: 220V 50Hz AC\nVisas for Ethiopia: Ethiopia visa\nMoney in Ethiopia: Ethiopian Birr (ETB). Credit cards are not widely accepted and banks difficult to locate outside of major towns. Take small dollar bills and change these into one birr notes.\nEthiopia travel advice: Foreign & Commonwealth Office\nEthiopia tourist board: Ethiopia Embassy\nWhen to go to Ethiopia\nEthiopia’s rainy season lasts from mid-June to mid-September. The best trekking weather is the dry season between October and March, with the country turning lush green just after the rains.\n\nConsider coinciding your trip with one of Ethiopia’s colourful festivals such as Timkat (Epiphany, 19 January) or Meskel (the Finding of the True Cross, 27 September).\n\n## International airports\n\nBole International airport (ADD) in Addis Ababa.\n\n## Getting around in Ethiopia\n\nThere is a regular domestic air service from Addis Ababa to other cities such as Aksum, Arba Minch, Bahar Dar, Dire Dawa, Gondar and Lalibela. The “historical circuit” is linked by the flight equivalent of a hop-on and off service.\n\nBuses operate between all the major towns, but they are slow. For shorter routes and access to small villages, consider minibuses, shared taxis and truck services. Take a garis (horse-drawn cart) to get around town.\n\nThe Addis Ababa-Djibouti train stops at Dire Dawa and travels overnight, but the bus is swifter, and the scenery more varied.\n\n## Ethiopia accommodation\n\nEthiopia offers many small but clean pensions and large mid-range hotels for travellers to stay at. Some hotels also allow camping on their grounds.\n\n## Ethiopia food & drink\n\nEthiopia’s cuisine is generally spicy. Injera (a slightly bitter, pale pancake or wrap) is the base for most meals, and goes well with spicy food. The best known dishes include wat (stew) with either bege (lamb), bure (beef), figal (goat) or doroalicha wat is the slightly milder version. Kifto (lean mince) is a treat in Ethiopia, and comes either warm or cooked with lots of sauce.\n\nWednesday and Friday are traditional fasting days, and vegetarian meals such as messer (lentil curry) and shiro (chickpea purée) are easily prepared.\n\n## Health & safety in Ethiopia\n\nAltitude acclimatisation is essential. Travellers are also required to have a yellow fever certificate. The risk of catching malaria is high below 2,000m and HIV/Aids is widespread in Ethiopia. Swimming in Lake Tana is not recommended due to waterborne diseases.\n"
      },
      "location": {
        "en-US": {
          "lon": 40.48967,
          "lat": 9.145
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "7dksekPr3mRb22iBMIeVK4"
          }
        }
      },
      "entryId": {
        "en-US": 4
      },
      "travelRegion": {
        "en-US": "Africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2M6vNNWacZoKuuTojneUMX",
      "type": "Entry",
      "createdAt": "2022-10-13T04:33:10.401Z",
      "updatedAt": "2022-10-18T10:09:57.567Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 11,
      "publishedAt": "2022-10-18T10:09:55.412Z",
      "firstPublishedAt": "2022-10-13T05:27:30.445Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 13,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "South Africa"
      },
      "body": {
        "en-US": "There are many different sides to the rainbow nation.\n\nExplore vibrant cities like Cape Town or Johannesburg, sip chardonnay in Stellenbosch, hike to the top of Table Mountain and chase the Big Five in legendary national parks like Kruger...\n\nIf tigers and lions don't float your boat, try searching for penguins and ostriches. Laze on the beach or dive with sharks, eat in trendy metropolitan restaurants or gather round a braai.\n\nSouth Africa has it all! Discover which side is for you with our guide...\n\nSouth Africa's climate\nSouth Africa has a relatively diverse climate, partly due to its vast size and partly the result of ocean currents passing over the country. \n\nGenerally speaking, the south of the country has a Mediterranean climate, the north-east is subtropical and the north-west a small desert. Expect summer rains (November to March), except in the south around Cape Town which experiences winter rain. \n\nSouth Africa is mild compared to the rest of the African continent. Cape Town has an average annual temperature of 17°C, but 30°C+ is normal in the summer, and snow can be expected in the mountains. What to pack? Well, that really depends on where you're going, and what you're doing..."
      },
      "location": {
        "en-US": {
          "lon": 22.9375,
          "lat": -30.5594
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2PgPxl662ERWiWZ7DMVMB8"
          }
        }
      },
      "entryId": {
        "en-US": 6
      },
      "travelRegion": {
        "en-US": "Africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5nE51XjayLpcmJRPTogvgd",
      "type": "Entry",
      "createdAt": "2022-10-13T04:35:04.039Z",
      "updatedAt": "2022-10-18T10:10:15.795Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 11,
      "publishedAt": "2022-10-18T10:10:13.875Z",
      "firstPublishedAt": "2022-10-13T05:27:20.633Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 13,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Kenya"
      },
      "body": {
        "en-US": "Kenya travel guide, including map of Kenya, top Kenya travel experiences, tips for travel in Kenya, plus where to see wildlife in Kenya\n\nThink safari, think Kenya. Nestled on the coast of East Africa, Kenya is where Roosevelt, Hemingway and Churchill put romance into hunting, and started off the safari industry.\n\nThese days Kenyan safaris are all photographic, but the excitement remains. The greatest density of game is in the Masai Mara, the northern part of Tanzania's Serengeti. This is packed with wildlife during the annual wildebeest migration, but is busy with game and predators year round: sighting come thick and fast.\n\nThere are a number of parks in the east. Framed by Kilimanjaro, Amboseli is a small park with too many elephant. You'll get good sightings, but there's no longer enough meltwater coming from Kili's shrinking ice-cap to support the park's game. The situation is better in the wide expanses of Tsavo, where animals roam freely and and there aren't too many other vehicles. Shimba Hills National Park is a little gem within easy reach of Kenya's southern beach resorts, best known for its roan antelope but with cute little bushbabies who cluster round the lodge at night.\n\nHead north and Nakuru is a small park around a beautiful, flamingo-filled lake: its size makes it easy to find the park rhino, but after a bit of birding it's best to move on. Aberdares is a fantastic park on the foothills of Mount Kenya, with forested slopes that get plenty of rain, but this does mean that game is harder to find. Carry on to Samburu, a beautiful - if arid - park, where you can easily find wildlife if you know where it drinks.\n\nRaise your budget and you can also consider private reserves, often run in conjunction with local tribes, Hot spots include the Laikipia Plateau to the north and the Chyulu Hills west of Tsavo.\n\nLeaving the cool highlands of Kenya's central plateau and heading east you drop down to Kenya's Indian Ocean coast. The city of Mombasa has a fantastic island setting and an impressive Portuguese fort, but it's not especially geared up for travellers. Most accommodation is across the causeway north of town, in a string of resorts that line the beach.\n\nThe coast road continues up to the charming little village of Watamu and then the slightly seedy Malindi. The road continues (but traffic, including matatus, generally does not) up to the island of Lamu, a welcoming little Islamic enclave generally reached by air. With just four cars - but plenty of boats and donkeys - this is a good place to experience the coast's Muslim culture.\n\nHead south from Mombasa and you have to take the Likoni ferry. The pace of life slows sharply and there are a line of beautiful beaches, often quite undeveloped, with the best known (and best) being Diani Beach.\n\nDon't miss the richest part of a Kenyan journey: the Kenyans. There are more than 70 tribes in Kenya, many with their own distinctive costumes and customs. On private reserves these are the people who will be your guides, or they are easy to meet if you step out of your safari bubble. Head north for the Samburu and Turkana people, clustered by the edge of croc-infested Lake Turkana, while in the south the Maasai prevail, proud warriors struggling to adapt to a world where land can be - and increasingly is - privately owned.\n\nWanderlust recommends\nMigrate. The annual Wildebeest migration sees huge herds of game pour into the Masai Mara - and a feeding frrenzy for the area's predators\nGo Up. The trek up Mount Kenya, Africa’s second-highest mountain, is more interesting and less crowded than Kilimanjaro. Mount Elgon, on the Ugandan border, is also a worthy climb\nTake a Trek. In the north of the country, head out on a camel safari, with local tribesmen as your guides. Take references: potential guides will not willingly admit they're not from the area and don't know their way around. On a budget, take a donkey instead\nCross the Chalbi Desert – the ethnically fascinating badlands of Kenya – by truck to reach croc-infested Lake Turkana\nCall of the Minaret. Loll around the traditional Swahili streets of Lamu Island, feasting on fresh fish and swimming from deserted beaches\nSafari in the City. If time is limited, most of Kenya's wildlife species can be seen from a taxi in Nariobi's own small National Park. Be warned: Nairobi is one place where the most dangerous predators have two legs and are found on the city-centre streets after dark\nGo Dive. There are good Marine Parks at Wasini in the south and Watamu in the north, excellent for snorkelling or diving\nWanderlust tips\nFor safaris in Kenya, pack a wide-brimmed hat to keep the sun off and neutral-coloured clothes; don’t wear blue as it attracts tsetse flies. Also, be prepared to get up early – game-viewing starts at dawn.\n\nFurther Reading\nTravel in Kenya: vital statistics\n\nCapital of Kenya: Nairobi\nPopulation of Kenya: 40 million\nLanguages in Kenya: English, Kiswahili, indigenous languages\nTime in Kenya: GMT+3\nInternational dialling code in Kenya: +254\nVoltage in Kenya: 240 V, 50 Hz\nVisas for Kenya: Kenya visa\nMoney in Kenya: Kenyan shilling (Ksh). Most main towns have ATMs. Dollars are useful for tipping and payments at lodges. Haggling is commonplace.\nKenya travel advice: Foreign & Commonwealth Office\nKenya tourist board: Kenya Tourist Board\n\nWhen to go to Kenya\nUpcountry Kenya is almost all at 600 metres or more above sea level, making for a very pleasant climate with warm days and cool nights. Coastal regions are generally hot and steamy year-round, with far more mosquitos.\n\nKenya’s peak season, when it’s dry and hot and flamingoes flock to Kenya’s Rift Valley lakes, is January-February – prices are high and accommodation booked well in advance.\n\nFor better deals and fewer tourists, visit during the shoulder season (June-October); this is also when the Great Migration passes through Kenya’s Masai Mara – one of the world’s greatest wildlife spectacles.\n\nMarch to May and October to December are generally wetter, though it doesn’t tend to rain all day, the vegetation is lush, and you can get some great deals on accommodation. Climbing Mount Kenya is best done during the drier months.\n\nKenya international airports\nJomo Kenyatta International Airport (NBO) 15km from Nairobi; Moi International (MBA) 12km from Mombasa\n\nGetting around in Kenya\nThere is a good network of internal flights all over Kenya, useful for time-poor travellers, and for accessing remote lodges in the bush (via tiny, sometimes wildlife-inhabited airstrips).\n\nHiring a car in Kenya is costly and for many areas you’ll require a 4WD. Some hire companies bury a $10,000 excess in their rental agreement, which is not so good in a country where car-jacking is relatively common: pay someone to guard your rental car whenever you park. Matatus (share taxi minivans) ply Kenya’s roads; they leave when full, are very cheap and often break down. Buses link Kenya’s big cities and vary greatly in quality; size up the vehicle before boarding. Avoid travelling at night: unlit cattle and vehicles - as well as occasional bandits - make it hazardous.\n\nAlong the Kenyan coast, sailing by dhow (traditional boat) is the most atmospheric way to access offshore islands.\n\nKenya accommodation\nFrom the simple to the sublime, accommodation in Kenya covers the full range. Budget travellers can take their own tent and camp out in the wilderness; the national parks have basic sites with toilets and taps. Kenya’s bandas, no-frills chalets with beds, bathrooms and sometimes kitchens, are good-value options.\n\nPlusher hotels are available in cities, but the real treats are Kenya’s high-end safari lodges. Often breathtaking in design and location, these are set on private or community-run reserves on the edges of Kenya’s national parks that offer chic rooms, stylish communal bars, quality cuisine and safari activities; they sounds pricey but food and often drink is included and the experience first-class.\n\nKenya food & drink\nMeals at Kenya’s high-end and mid-range lodges are generally Western and delicious, with snacks available in between – you won’t go hungry on a posh Kenyan safari. If trekking, camp food is hearty and plentiful – expect big portions of soup, pasta, meat and fish, veggies and fruit.\n\nLocal Kenyan fare is pretty basic and meat-based: expect mutton stews, ugali (stodgy maize porridge) and vegetables such as spinach. Vegetarians may struggle. There’s plenty of homegrown fresh fruit in Kenya, including mango, pineapple and passion fruit; fruit juices are also delicious.\n\nTusker beer, a G&T or a glass of (imported) wine all make good sundowners – the traditional way to end your day on a Kenyan safari. Coffee is generally weak and instant; chai (sweet milk tea) is the Kenyan’s drink of choice.\n\nHealth & safety in Kenya\nIn Kenya drink boiled/purified water and practice good food hygiene – travellers’ diarrhoea is relatively common. Make sure you are up to date on your vaccinations. Malaria prophylaxis is required for most of the country though mosquitos are not too much of a problem unpcountry; ask your GP for advice.\n\nIf climbing Mount Kenya, be aware of the symptoms of altitude sickness (headaches, nausea and disorientation). Drink plenty of water and ascend slowly. Avoid driving at night.\n\nHIV is a major problem in Kenya. Assume that anyone who propositions you is HIV positive as you are most unlikely to be the first person they've tried.\n"
      },
      "location": {
        "en-US": {
          "lon": 37.90619,
          "lat": -0.02355
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4U3OCWwXD3Usi8h17USlYk"
          }
        }
      },
      "entryId": {
        "en-US": 7
      },
      "travelRegion": {
        "en-US": "Africa"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3bcMVDrYVeG48J6NL6a1v1",
      "type": "Entry",
      "createdAt": "2022-10-13T04:51:08.313Z",
      "updatedAt": "2022-10-18T10:12:47.492Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 31,
      "publishedAt": "2022-10-18T10:12:45.075Z",
      "firstPublishedAt": "2022-10-13T05:27:04.334Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 6,
      "version": 33,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Thailand"
      },
      "body": {
        "en-US": "Azure waters lap the edges of sugar-sand beaches. Sizzling food fills street markets with mouth-watering smells. Palaces glitter and temples inspire. Elephants splash through lakes and waterfalls pockmark spinach-green rainforests.\n\nTravel in Thailand offers countless life-changing experiences. Read on to find yours…\n\n### Where to go in Thailand\nCulture seekers can explore the glittering palaces, gilded temples and bustling night markets of Bangkok or uncover some of Thailand’s most ancient treats at Sukhothai.\n\nThose looking for something more adventurous can trek through the jungles and hills in the north of the country to meet the tribal villages or head to one of the islands scattered around the mainland to scuba dive or kayak in and out of the karsts piercing through the water’s surface.\n\nIn short, there’s something for almost everyone here. It just depends on whereabouts you go...\n\n### Wildlife spotting in Thailand \nSun bear, tiger and leopard can be spied in the thick forest of Khaosok National Park. Monkeys set up home in the crumbling temples. Ethical elephant experiences can be found across the country. Thailand’s wildlife is incredible, and it’s well worth seeking it out on a trip there.\n\n### Food and drink in Thailand \nThai food has become increasingly popular over the years, and rightly so.  With pad thai (noodles smothered with egg, peanuts and fish sauce), coconut-flavoured curries and a variety of rice dishes to choose from, you'll be spoilt for choice. A great place to sample authentic Thai cuisine is at the food markets, where you can pick at treats from each stand while soaking up the atmosphere. Here's just a few of our favourite dishes...\n\n### Where to stay in Thailand\nWhether you're after a hut on a beach on a quiet Thai island or want to indulge in some luxury at one of the top hotels in Bangkok, Thailand offers accommodation to suit all tastes and all budgets..."
      },
      "location": {
        "en-US": {
          "lon": 100.9925,
          "lat": 15.87003
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "3lV3jRvaAcQykB5rXRowLw"
          }
        }
      },
      "entryId": {
        "en-US": 12
      },
      "travelRegion": {
        "en-US": "Asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2CnDNbhVI4D9EqburvRhkW",
      "type": "Entry",
      "createdAt": "2022-10-13T04:58:01.500Z",
      "updatedAt": "2022-10-18T10:11:57.261Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 21,
      "publishedAt": "2022-10-18T10:11:57.261Z",
      "firstPublishedAt": "2022-10-13T05:26:53.576Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 22,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Japan"
      },
      "body": {
        "en-US": "Japan is spectacular any time of year and choosing when to go ultimately comes down to what you want to see and do when you’re there.\n\nHigh season runs between March and May. Travel during these months to catch the picture-perfect pink cherry blossoms in full bloom.\n\nIf you’re looking to go hiking, then travel between September and November, when temperatures are mild, rain is rare and you'll rarely find a cloud in the sky.\n\nFor a snowy escape, go to Japan between January and February.\n\n### 7 things you must do in Japan\n\n1. Head for the hills\nThe Japanese like a good hike. On any given weekend the trains are full of people wearing sensible waterproof coats and hiking boots, heading off into the Japanese countryside. They’ll be back at work on Monday, of course. But that’s the beauty of hiking in Japan. The country packs an awful lot into even the shortest of walks.\n\nSophie Campbell found that when she went trekking in Honshu. It offers bamboo forests, pristine lakes and hidden temples. Just don’t forget your bear bell. On thing is for certain, whether you’re hiking the hills around Nikko or the two-hour tori-covered tail at Fushimi Inari Shrine, you’re in for a truly unique trekking experience. \n\n2. Challenge – and delight – your tastebuds\nTokyo has more Michelin stars than London and Paris combined. But the good news is that even the smallest restaurants offer something to delight foodies. Join the salarymen for a lunchtime bento box and you’ll never be satisfied with a meal deal from Boots ever again.\n\nYou’ll have no problem finding a Katsu curry, tempura vegetables or the ubiquitous sushi. Just look for their plastic approximation outside the restaurant of your choice and point. But it is at the extremes that Japanese food gets really interesting.  Whether that’s paper-thin slices of Hida beef, sourced from cows feed on beer, or Hachinoko (wasp larvae), it’s a culinary experience you’ll never forget.\n\n3. Lose yourself in the Japanese wilderness\nHokkaido is Japan’s wild frontier, especially in winter, when cars must be swapped for snowmobiles and huskies, cranes dance, hot springs steam and the sparkling Sapporo Snow Festival comes to town. If you’ve ever wanted to see a two-storey ice carving of Hello Kitty, this is the place to come.\n\nOutside of Sapporo, Hokkaido is Japan’s wild frontier, one of the largest and least-populated regions, home to the indigenous Ainu culture and some of the country’s oldest national parks. It’s where you’ll find the country’s best ski resort, Niseko. Save time for a restorative dip in an onsen. You’ll find them all across the region; some inside, others just outdoor rock pools.\n\nCan’t make it to Hokkaido for the winter? Not a problem. In the summer, it’s a place to explore colourful lavender fields, mountains and lakes, and to spot brown bears and other wildlife.\n\n4. Embrace tradition in Kyoto\nIn many ways, Kyoto is the perfect encapsulation of the Japan of everyone’s imagination. 1,000 years as Japan’s capital has blessed it with over 2,000 temples, ancient traditions and a way of life that has changed little over the centuries. From fully made-up geisha girls scurrying past holding white parasols to brightly painted wooden bridges, there is an Instagram moment around every corner.\n\nTake a guided walk through Gion after dark to gain an insight into the world of geiko (Kyoto’s name for geisha) and maiko (apprentice geisha). Take a course in calligraphy, tea-ceremony, sake-tasting or kimono-wearing. Wander through the 5,000-plus orange-red torii (shrine gates) of Fushimi Inari Taisha. This is the Japan you travelled to see. Immerse yourself in it.\n\n5. Celebrate under the sakura\nThe start of spring can only mean one thing – a sea of cherry blossom is starting to wash across Japan, fleetingly covering the country in delicate buds. These fragile flowers only last about two weeks – but there are few sights more magical.\n\nThe sakura (cherry blossom) is the de facto national flower of Japan. The Japanese see the trees’ brief bloom as a symbol of the impermanence of life. They pay homage to the flower at hanami – blossom-watching parties – where they eat, drink and dance beneath the branches.\n\nThe sakura appears across the nation, but some spots are better than others. Kyoto is a good place to see the blooms, which drape the city’s abundant shrines (such as calming Heian-jingu) and parks; head to Maruyama-Koen to sit beneath a beautiful pink canopy. The castle town of Hirosaki holds the Sakura Matsuri festival, while mountainous Yoshinoyama is home to more than 30,000 cherry trees. In Tokyo, witness brilliant blooms in Inokashira and Ueno parks.\n\n6. Lose yourself in Tokyo\nTokyo strikes you initially as being like some giant machine, with cars and consumers providing fuel to the round-the-clock crankshaft. Some 23 million people live and work here, among rammed sushi joints and sleepless corporate towers. The skylines are electric-indigo; the soundtrack is a barrage of candied pop tunes and rattling subway trains; the speed of life, on first impression, is breathless. Then you’ll take a turn and stumble upon a scene of quite serenity, seemingly centuries old.\n\nWhat other city offers you a theme park dedicated to manga and one dedicated to onsens (hot springs), right next to each other? Or the chance to browse the latest gadgets and the ancient traditions of sumo in the same afternoon? \nAnd fear not, there’s plenty to do in the city if you’re on a budget as well. Wander through Tsukiji, the world’s largest seafood market or quietly contemplation at Meiji Shrine, a calm garden oasis in the centre of Tokyo. Tokyo is many things, but it is never boring.\n\n7. Buy everything you need from a vending machine\nVending machines first appeared in Japan in the 1950s and quickly became a fixture on Japanese streets. Today, Japan has the highest per capita rate of vending machines in the world, offering a dizzying array of products available any day of the week and at any hour of the day.\n\nWhatever you've got a yen for, in Japan there's a machine that will sell it to you. Eggs, flowers, crepes, magazines, a change of underwear, even a keg of beer or a can of hot coffee, are all only a few coins or a card transaction away. It is no exaggeration to say that you could get by in Japan without ever walking into a shop. Give it a go. You’ll be surprised what you’ll find. And by the way. Pocari Sweat tastes better than it sounds. \n"
      },
      "location": {
        "en-US": {
          "lon": 138.2529,
          "lat": 36.20482
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "33AEj3n9hXkzHLtO48OBDj"
          }
        }
      },
      "entryId": {
        "en-US": 10
      },
      "travelRegion": {
        "en-US": "Asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5k0ftpEoWJGD7JvHKBN3FG",
      "type": "Entry",
      "createdAt": "2022-10-13T05:03:54.808Z",
      "updatedAt": "2022-10-18T10:10:45.188Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 12,
      "publishedAt": "2022-10-18T10:10:45.188Z",
      "firstPublishedAt": "2022-10-13T05:24:53.153Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 13,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "India"
      },
      "body": {
        "en-US": "India has the second largest population of the world, with about 1.15 billion people living on the subcontinent. With almost three million square kilometres ahead of you, the first challenge is deciding where to go.\n\nMany travellers coming to India for the first time choose to visit the ‘golden triangle’ – the capital Delhi, Agra with its world-famous Taj Mahal, and Jaipur, the 'pink city' with Hawa Mahal, the Palace of Winds. After a week on the move you'll start to understand why so many visitors to India end up staying for months - or years.\n\nThere are so many alternatives. Rajasthan in the northwest is the India many imagine: women dressed in brightly coloured saris, majestic palaces and forts and camels swaggering through the desert.\n\nThe capital of Maharashtra state, Mumbai, is India's fastest-moving city, home to Bollywood and a rising Indian middle class. Calcutta is widely regarded as India's spiritual centre, a seething, hypnotic cauldron of ceaseless toil.\n\nHead south and the pace slows. Portuguese Goa, the most westernised state, with its beaches and resorts. Kerala, with rice-boats cruising idyllic backwaters and the fortified city of Cochin. Sprawling Karnataka, with the ruins of Hampi and Madurai's simmering Meneekshi Temple, packed with devotees offering sacrifice and holy elephants holding court. Tamil Nadu, vast and rural, that also includes Pondicherry, France's tiny toe-hold onto the Indian sub-continent. And if the heat gets too intense, flee to hill stations, built by the British as hot-season refuges and now happy playgrounds for India's growing middle class.\n\nPush at the frontiers and there are more gems. Troubled Kashmir, with its houseboats and guns. Amritsar, with its 'Golden Temple' defended by pensioners armed with swords, at the heart of Sikkhism. The Himalayan foothills, where trekking routes evolved as ancient trade links to remote mountain settlements.\n\nWanderlust recommends\nDo the Ultimate. Visit the highlights: the Taj, Jaipur and the two sides of Dehli. It'll give you a flavour before you head off the beaten trail\nGo Home. Their home - not yours. Homestays are an increasingly popular way for middle-class Indians to liven up their lives - and for you to enter their complex world\nBody and Soul. Ayurvedic treatments are big in India. Book yourself a course of massage therapy at any one of the many clinics scattered throughout the land\nGet Cooking. Indian cuisine is there to be savoured. Take a cooking course in India and learn its complex art\nChant to Purity. India's Hindu Ashrams, faith-based guest houses where even the food is included, are great places to share profound philosophical thoughts. Pondicherry - and nearby Auroville - is something of a spiritual centre\nTake the Train. The rail system in India is more than just a way to get around: it's an experience in its own right. Book yourself a sleeper - choosing the class according to your budget - and experience travel at the clattering pace of an ancient train\nRent an Enfield. These classic motorcycles date back to 1960's production bikes - and are easy to rent (and repair, frequently). Driving them in India is something of an art: be prepared to react quickly to unexpected cattle and road-hogging trucks\nRiceboat Dreams. The converted riceboats that ply the backstreets of Kerala are the ultimate way to experience rural India at its most peacefully replete. Fertile soils and plentiful fish stocks mean you won't see grinding poverty here: instead the idyllic sights of shady palms, reflective paddy fields and quiet little rural churches and temples show India at its rural best\nWanderlust tips\nPack light and stay longer. There are few things you need in India that you can't buy locally, and heavy packs greatly increase stress. Your money is likely to stretch for longer than you expect and you'll also find it takes you longer, in India, to achieve what you want. Leave yourself the flexibility to extend your stay.\n\nFurther Reading\nTravel in India: vital statistics\nCapital of India: New Delhi\nPopulation of India: 1.2 billion\nLanguages in India: The language of business is English. Hindi is the national language, but there are 14 other official languages: Bengali, Telugu, Marathi, Tamil, Urdu, Gujarati, Malayalam, Kannada, Oriya, Punjabi, Assamese, Kashmiri, Sindhi and Sanskrit.\nTime in India: GMT +5.5 during winter time; GMT +4.5 during summer time (India does not change its clocks).\nInternational dialling code in India: +91\nVoltage in India: 220-240 AC 50 Hz; some areas have a DC supply\nVisas for India: India visas\nIndia travel advice: Foreign and Commonwealth Office\nWhen to go to India\n\nThe best time to visit most parts of India is from October to the end of March. During the summer months the monsoon brings heavy rainfalls.\n\nClimate varies a lot depending on where you go. Tamil Nadu in the southeast gets most of its rain between October and December, whereas in the northwest Rajasthan and northern Gujarat don’t receive much rain at all.\n\nIndia has a lot of great festivals and interesting religious celebrations, which are worth considering when you plan your journey. Highlights are: Makar Sankrati on January 14, when people in North India celebrate the start of the northern journey of the sun with a kite festival; Rath Yatra, the chariot festival, in June; and Diwali in October or November, with atmospheric lights and impressive fireworks.\n\nInternational airports\nMumbai (BOM) 29km from the city; Calcutta (CCU) 13km from the city; Delhi (DEL) 20km from the city; Chennai (MAA) 14km from the city; Amritsar-Raja Sansi (ATQ) 11km from the city; Goa (GOI) 35km from the city of Panjim.\n\nGetting around in India\nFor long distances flying is the best option. Domestic flights to all major cities are available, frequently at low prices.\n\nRail travel is cheap and relatively comfortable. Indian Railways operates a comprehensive network of trains of different standards and with different classes. Be prepared for long journeys – and check if overnight sleeper trains are available for your route to save some time and money for accommodation. Reservations are essential to ensure you get a berth.\n\nIf you are not in a hurry you can enjoy the views from a slow steam train up to the hill resorts of Shimla, Ooty (Udhagamandalam), Darjeeling or Matheran.\n\nMany of India’s interesting places can only be reached by road. Buses now get to pretty much every part of the country. They are very cheap, but slow and uncomfortable. Check Red Bus for routes and prices.\n\nA more comfortable way to get around is to hire a car with a driver.\n\nIndia accommodation\nIndia has a very wide range of accommodation. In all major cities you can stay in high-class hotels for a fraction of what you would pay in Western countries, while locally run hotels are even cheaper - especially if you bargain. The YHA run a few hostels all over India, and tourist offices can provide you with a list of families offering homestays. For a unique experience, stay at a Hindu ashram. You're not expected to be religious, but a philosophical interest will help you fit in.\n\nIndia food & drink\nIndia’s cuisine is very diverse and food is an integral part of Indian culture. The techniques involved in cooking Indian food are intimately connected with communities, regions, religious beliefs and festivities in the Indian culture.\n\nWhat most regional styles have in common is the importance of spices, used for flavour, as appetite stimulators and digestives. Domestic cuisine can be very hot, but expensive restaurants catering for the tourist trade make their meals very mild.\n\nOther essentials are dal (lentils), rice and dairy products like dahi, a sort of yoghurt or curd.\n\nFor vegetarians India is probably the best country on earth: you can be sure that all Hindu restaurants won't serve meat - or even an egg - at all. Tuck into vegetable stews, curries with paneer cheese and many other regional specialties.\n\nStreet stall favourites are samosas, three-cornered deep-fried pastry parcels with a potato filling; bhajis, battered and deep-fried vegetables; and dosas, a sort of pancake made of rice.\n\nHealth & safety in India\nDepending on where you go and how you travel, several vaccinations are recommended, as is malaria prophylaxis – consult your GP or travel health clinic.\n\nDrink only sterilised, boiled or bottled water. Make sure the bottles are sealed and bear in mind that ice is not always made from sterilised water.\n\nSeveral places in India have been targets of terrorist attacks. Check the Foreign and Commonwealth Office website for travel advice and information on security issues."
      },
      "location": {
        "en-US": {
          "lon": 78.96288,
          "lat": 20.59368
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4GiiLI8szeWA2LA6QkPkl4"
          }
        }
      },
      "entryId": {
        "en-US": 8
      },
      "travelRegion": {
        "en-US": "Asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2dcvkEFancvXk5d8JdhQr",
      "type": "Entry",
      "createdAt": "2022-10-13T05:06:42.624Z",
      "updatedAt": "2022-10-18T10:11:06.384Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 13,
      "publishedAt": "2022-10-18T10:11:04.398Z",
      "firstPublishedAt": "2022-10-13T05:24:40.695Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 15,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "China"
      },
      "body": {
        "en-US": "Your full Wanderlust guide to travel in China\n\nChina is big all over – 1.3 billion people, almost 10 million sq km. But don’t let the size daunt you. Rapidly improving infrastructure has made China easier to travel now than ever before, and areas that were off-limits a few years ago are opening up to all. In China’s eastern coastal region, thronging mega-cites such as Shanghai have hurtled head-first into the 21st century. But elsewhere you’ll still find people living traditional ways of life, as well as vast swathes of untouched landscapes. Beautiful, diverse Yunnan is a travellers’ favourite. From its steaming jungles on the Laos border to its mountains and renowned Tiger Leaping Gorge near Tibet, this western province of China is packed with spectacular scenery. Just north of Yunnan, Sichuan province is the place to go to see wild pandas and eat the best Chinese food. If you’d rather go tiger spotting, head to the nature reserves in the region formerly known as Manchuria, in China’s north-east. If you’re after an epic journey, follow the old Silk Road in China’s north-west, beyond the Great Wall along the border with Mongolia. Here you’ll meet ethnic minorities – Turkic-speaking Uighurs, Hui Muslims and Mongols – and have the chance to stay in a yurt on the great steppe lands. Or follow the Yellow River to see magnificent historical buildings in China’s ancient dynastic capitals.\n\nWanderlust recommends\nExplore the Great Wall of China without meeting the masses\nGo in search of giant pandas in the wilds of Sichuan or Shaanxi\nMeet Buddhist monks and nomads in the Qinghai region of China’s wild west\nExplore the best of Beijing – from the Forbidden City to the capital’s best karaoke bars\nPedal and climb through paddy fields around laid-back Yangshuo, southern China\nHike the dramatic Tiger Leaping Gorge in Yunnan\nWanderlust tips\nEnglish is widely understood in the service industries, though not by taxi drivers – you’ll need to have your destination written down in Chinese characters. In the countryside, a little Chinese will help a lot, though plenty get by with a repertoire of expressive gestures, a phrasebook and a lot of patience.\n\nCheck the weather forecast before you visit, as this can have a massive impact on your trip. Rain and clouds can completely cover the skyline of big cities, and save a visit to the Great Wall for a clear day. If there are clouds lurking around Beijing, you can guarantee that you won't be able to see more than a few metres in front of you at the top of the Great Wall.\n\nI wish I'd known...\nIf you were hoping for a quiet holiday in China, forget it, says Katherine Price:\n\n“If you thought that you wouldn't stand out in cities like Beijing and Shanghai – you'd be wrong. Westerners will always stand out like a sore thumb. Even in the cities, prepare to be stared at constantly, photographed without your permission, and asked to dinner by teachers wanting to practice their English. Even on Tiananmen Square in Beijing, people will get out their phones and take pictures or record videos of you. In more rural areas and smaller cities, you may as well be a celebrity. It takes a lot of getting used to.\"\n\n\"Read up before you go; information for sites may not necessarily be written in English, and certain historical sites may have no information at all.”\n\nFurther Reading\nWhen to go to China\nDomestic tourism is big in China. Steer clear of the two-week-long public holidays at the beginning of May and October when the whole of the country is out visiting. Also, avoid travelling during the week before Chinese New Year (February), when the nation is going home for the holidays and transport services are over-stretched.\n\nOn the whole, spring and autumn are the most pleasant months, when most of China enjoys clement weather. Certainly those are the best times to visit Beijing or Shanghai. During the winter Beijing, Xinjiang and the north-east are bitingly cold, but southern destinations such as Yunnan are pleasant. There is no rainy season.\n\nFestivals in China follow the Chinese lunar calendar. After the two week Spring festival (normally in February), March sees celebrations for Guanyin’s birthday – China’s most popular deity. The Dragon Boat Festival, held in memory of the poet Qu Yuan, is held in June or July. Head to Yunnan Province in mid-April for the Water-splashing festival.\n\nInternational airports\nBeijing (PEK) 26km from the Beijing; Guangzhou Baiyun (CAN) 7km from Guangzhou; Shanghai Hong Quio (SHA), 12km from Shanghai; Shanghai-Pudong (PVG) 30km from Shanghai; Chengdu Shuangliu (CTU) 16km from Chengdu\n\nGetting around in China\nChina is a country of vast distances. Thanks to an extensive internal air network, these can be quickly covered by plane. Tickets are easy to purchase except during major festival and holidays.\n\nChina’s rail network is fast and efficient, though timetables and signs are not always in English.\n\nBuses are the best way to get from cities into rural areas. Driving across China is currently forbidden to foreign tourists (you need to have a resident’s permit and Chinese driving license to be able to do so). It is possible to rent vehicles for local use in Beijing and Shanghai. Taxis are always available in large towns.\n\nCycling is a good way to get around; rental booths are common around train stations and tourist centres. Boat services are dwindling, but a trip down the Yangtze remains one of the world’s great river journeys.\n\nChina accommodation\nFamily-run, character-rich guesthouses of the kind found all over Asia are rare in China. Generally accommodation in China is no great cause for excitement but the situation is improving. Certain temples and monasteries provide accommodation – these are cheap but sometimes don’t have electricity or running water.\n\nChina food & drink\nChinese cuisine varies greatly from region to region and every town has its speciality (Beijing’s is famously Peking duck). Noodles are predominant in the north, while rice is king in the south. In the east you’ll find rich, sweet cooking, hot and sour soups and lots of seafood dishes. In the west food is spicy and peppery. Throughout China, street stalls sell mouth-watering delicacies and steamed buns.\n\nHealth & safety in China\nConsult with a specialist travel-health clinic about which vaccinations are recommended before departing. Medical facilities are good in the major cities. Elsewhere don’t expect English to be spoken in hospitals and pharmacies. Beware of backstreet pharmacies as counterfeit drugs are common. Don’t drink untreated tap water.\n\nThe country is generally safe for foreigners. Be wary of pickpockets on trains and buses and don’t flash valuables about in the street.\n"
      },
      "location": {
        "en-US": {
          "lon": 104.1953,
          "lat": 35.86166
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6dwIHwU9YtEMZNukUjfmvu"
          }
        }
      },
      "entryId": {
        "en-US": 9
      },
      "travelRegion": {
        "en-US": "Asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2ICLEiicPBEM0dSHa7fFt",
      "type": "Entry",
      "createdAt": "2022-10-13T05:09:03.783Z",
      "updatedAt": "2022-10-18T10:12:21.552Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 11,
      "publishedAt": "2022-10-18T10:12:20.106Z",
      "firstPublishedAt": "2022-10-13T05:23:21.688Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 13,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Russia"
      },
      "body": {
        "en-US": "Moscow, home to fairytale pepper-pot churches, Red Square, Lenin’s tomb and some serious nightlife is an obvious pull. So too is St Petersburg; its Heritage Museum is an embarrassment of riches that will have you wandering open-mouthed from one masterpiece to another.\n\nAway from the big cities is the real Russia. Relax in the spa town of Pyatigorsk in the Caucasus Mountains, go rafting or Skiing in Siberia or play some real-life ‘Risk’ in Kamchatka: it’s famous for extreme sports.\n\nWanderlust recommends\nRide the Trans-Siberia Railway\nGo snowmobiling in north-west\nHerd reindeer in Chukotka, Siberia\nGet to know your vodka\nWhile away a weekend in the Hermitage\nThere are few better places in the world to see the ballet: you can book online for Moscow’s Bolshoi and St Petersburg’s Mariinsky theatres\nTravel on the Moscow metro – a work of art all in itself\nWanderlust tips\nIf you’re buying caviar to take home, look for the label CITES (Convention on International Trade in Endangered Species), an international trade-control to reduce sturgeon poaching.\n\nRussians have notoriously sharp elbows in queues or at bus or train stations; sharpen your own or let it slide.\n\nMany smaller towns have their own airport but be aware that facilities are often extremely limited.\n\nFurther Reading\nTravel in Russia vital stats\n\nCapital of Russia: Moscow\nPopulation of Russia: 142 million\nLanguages in Russia: Russian & many regionally-official languages\nTime in Russia: GMT + 2/3\nInternational dialling code in Russia: +7\nVoltage in Russia: 220V/50Hz\nVisas for Russia: Visas\nMoney in Russia: Ruble (RUB)\nRussia travel advice: Foreign and Commonwealth Office\nRussia tourism board: Russia\n\nWhen to go to Russia\nJune and September are popular times to visit Russia.\n\nJuly and August are the hottest months but can be rainy.\n\nAvoid late October and March/April when the snow can be slushy rather than picturesque. \n\nRussian winters are bone-chillingly cold but quite beautiful.\n\nInternational airports\nSheremetyevo-2 (28km from Moscow), Domodedovo (22km from Moscow), Pulkovo 2 (17km from St Petersburg). Many other cities also have international flights.\n\nGetting around Russia\nRussia is massive but is blessed with an excellent train and internal flight network. River cruises or scheduled river passenger boats are also good options for getting around. Long distance buses serve areas not covered by the trains. Driving can be hairy.\n\nRussia accommodation\nRussia has everything from 5 star palaces, ghastly Soviet-era concrete mega-hotels to friendly homestays and cheap crashpads.\n\nOrganised campsites are rare but wild camping is usually allowed. For something different, try staying in a turbaza – a basic Russian style holiday camp with outdoor activities thrown in.\n\nRussia food & drink\nSoups, salads, nibbles, nutty breads, calorific main courses and sugary desserts are all on offer in Russia – slimming it’s not. Look for the colourful and warming borsch (beetroot soup), exquisite caviar, zharkoye (hotpot) and pelmeni (Russian-style filled dumplings). Vegetarians should note that borsch is often made with beef stock.\n\nDrinking is a national pastime in Russia. Look for different types of vodka like starka (apple and pear leaves) or pertsovka (pepper).\n\nHealth & safety in Russia\nSee your GP about vaccinations before you travel: tickborne encephalitis is a problem in rural Russia during the summer.\n\nPick-pocketing is a big problem in cities and bus stations and watch for groups of children who have been known to surround foreigners and take what they can get. Check with the FCO before travelling for the latest advice about danger zones."
      },
      "location": {
        "en-US": {
          "lon": 105.3187,
          "lat": 61.52401
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6OJBLKwKUhaz6Mb3dKxE4C"
          }
        }
      },
      "entryId": {
        "en-US": 11
      },
      "travelRegion": {
        "en-US": "Asia"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "27c5Y3YaVTR9hL7I4hPMsO",
      "type": "Entry",
      "createdAt": "2022-10-13T07:29:28.845Z",
      "updatedAt": "2022-10-18T10:05:55.992Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 30,
      "publishedAt": "2022-10-18T10:05:55.992Z",
      "firstPublishedAt": "2022-10-13T14:14:22.046Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 31,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Ireland"
      },
      "body": {
        "en-US": "Ireland is often described in stereotypes: Ireland is the Emerald Isle, the land of great craic, Guinness and jolly leprechauns. There’s truth in this: Ireland is well-watered (pack a raincoat) and therefore lush and green, and Irish people are generally convivial and fond of their local pub.\n\nBut there’s more to Ireland than clichés. Step away from Ireland’s main tourist hubs such as central Dublin or Blarney Castle’s infamous kissing stone and you’ll find the less slick but more authentic Ireland, as well as some breathtaking landscapes.\n\nHeather-covered bog and rolling farmland cover much of Ireland, coupled with rocky upland (see the primordial Burren), dramatic cliffs and craggy mountain ranges, much of which is encompassed in Ireland’s six national parks. And after a hard day’s walking, kayaking, horse-riding or cycling those landscapes, you’ll have earned yourself a pint of the black stuff.\n\n## recommended things to do in Ireland\n\n1. Soak up the literary history, and atmospheric pubs, of Dublin, Ireland’s cool capital city \\\n2. Kayak at night amid glittering bioluminescence in Europe’s only inland marine lake, Lough Hyne, Cork \\\n3. Explore the Celtic heritage and wild landscapes of the Dingle Peninsula, Kerry, by car or on horseback \\\n4. Hike up Carrantuohil (1,039m), County Kerry, Ireland’s highest peak \\\n5. Watch for whales, dolphins and more in the Shannon Estuary (April to October) and along the south-west coast (September to February) \\\n6. Surf off the beaches of Mayo and Donegal – waves are huge and consistent, if a little chilly (bring a thick wetsuit) \\\n7. Hike or cycle the small but perfectly formed Aran Islands, off Galway\n\n## Wanderlust tips\n\nPack a raincoat.\n\nStay in a hostel/hotel/cottage within walking distance of the local pub – it’s the best place to meet the locals, and you won’t be tempted to drink and drive.\n\nWhen you arrive in an Irish town, ask around about musical gatherings – certain pubs will host live music on certain nights, perhaps spontaneously: locals will be able to give you pointers.\n\n## Further Reading\n\nWhen to go to Ireland\n\nIreland’s weather can change quickly – you can have sun, wind, rain, sleet and more sun all in one day. Pack for all weathers, even in summer.\n\nPeak season in Ireland is June-August, when summer temperatures can hit 24°C-plus. Spring (Mar-May) and autumn (Sep-Oct) offer pleasant, though even more changeable, conditions, with higher rainfall.\n\nIn winter (Nov-Feb) Ireland’s temperature lingers around freezing but there are few tourists and plenty of peat fires and cosy pubs to warm up in.\n\nBig events worth catching in Ireland include the national saint’s knees-up on St Patrick’s Day (17 March), the unique Puck Fair (Killorglin, County Kerry; August), the amorous Lisdoonvarna Matchmaking Festival (County Clare; September) and the All-Ireland Gaelic Football Finals (October).\n\n## Ireland international airports\n\nDublin (DUB) 10km from Dublin; Cork Airport (ORK) 8km from Cork; Galway Airport (GWY) 6km from Galway\nGetting around in Ireland\n\nIreland is small, so distances between attractions are short. However, public transport to more rural areas can be infrequent, with buses mainly serving the larger cities.\n\nThe train network is fairly limited, and more expensive than bus travel. It’s easiest and most flexible to hire a car – Ireland’s roads are generally good, and often very scenic, making for lovely driving.\n\nFerries connect the mainland with outlaying islands. The energetic should bring/hire a bike to get around Ireland – note, the prevailing winds in Ireland’s west mean it is easier to cycle from south to north.\n\n## Ireland accommodation\n\nIreland has plenty of budget accommodation, with a range of hostels, though campsites aren’t so common.\n\nB&Bs and guesthouses proliferate in Ireland, ranging from bog-standard to extremely cute and characterful; most will offer a slap-up Irish breakfast, possibly including fried black and white pudding or delicious scrambled egg with smoked salmon.\n\nHigh-end hotels are available – look out for converted manors and lodges in remote locations. For something different, hire a traditional wooden horse-drawn caravan for a slow amble around the Irish countryside.\n\n## Ireland food & drink\n\nIreland’s food has developed far beyond the humble potato, though you will see plenty of spuds on the menu – as chips, in potato farls (bread), as colcannon (mash with cabbage).\n\nIreland’s meat is particularly good, with all that green grass nurturing excellent beef, lamb and pork. Seafood is excellent in Ireland: try the trout, oysters and salmon – the latter, served smoked on fresh Irish soda bread, is worth the trip alone.\nVegetarians and vegans will struggle outside Ireland’s main cities – meat and dairy are staples here. Look out for breads and boxty (potato pancakes). Veggies can try Ireland’s tasty cheeses.\n\nIreland is famed for its drinking culture; they say the Guinness in Ireland tastes better here than anywhere else in the world. The black stuff will be available in pubs countrywide, as well as plenty more locally brewed stouts and ales, Irish whiskies and Irish coffee (coffee with cream and whiskey).\n\n## Health & safety in Ireland\n\nThere are no specific health issues for travellers to Ireland. Water is safe to drink. Be prepared if you are heading out into the countryside – make sure someone knows where you’re going, and that you have suitable clothing/provisions in case the weather changes or you get stuck. Make sure you have appropriate travel insurance. Never drink and drive."
      },
      "location": {
        "en-US": {
          "lon": -7.69205,
          "lat": 53.14236
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5yXAhuZtTxkhM0TBqXiyac"
          }
        }
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "13mWIkYQQXn0Mc03MAQerY",
      "type": "Entry",
      "createdAt": "2022-10-13T13:09:53.698Z",
      "updatedAt": "2022-10-13T13:18:13.604Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 7,
      "publishedAt": "2022-10-13T13:18:13.604Z",
      "firstPublishedAt": "2022-10-13T13:11:37.848Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 2,
      "version": 8,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "africa"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Africa"
      },
      "continentInfo": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "2XajMyMxkyY4wWOhaUEVbO"
          }
        }
      },
      "africanCountries": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "3KaNY7cLhyQTB0xkLy0bjq"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "7fr1htYux484W5dXJYCRTA"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "5nE51XjayLpcmJRPTogvgd"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2M6vNNWacZoKuuTojneUMX"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "1O7579O8zci5nWuaQtR5d6"
            }
          }
        ]
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7t1d0fU4XzLOCP4Tv82zvv",
      "type": "Entry",
      "createdAt": "2022-10-13T13:56:58.348Z",
      "updatedAt": "2022-10-13T13:57:56.583Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T13:57:56.583Z",
      "firstPublishedAt": "2022-10-13T13:57:56.583Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "asia"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Asia"
      },
      "continentInfo": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "3nviMtnmQQWMxT39YTlSBB"
          }
        }
      },
      "asianCountries": {
        "en-US": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "3bcMVDrYVeG48J6NL6a1v1"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2ICLEiicPBEM0dSHa7fFt"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2CnDNbhVI4D9EqburvRhkW"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "2dcvkEFancvXk5d8JdhQr"
            }
          },
          {
            "sys": {
              "type": "Link",
              "linkType": "Entry",
              "id": "5k0ftpEoWJGD7JvHKBN3FG"
            }
          }
        ]
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "RsJka6FMEabhfdw1EDJ4H",
      "type": "Entry",
      "createdAt": "2022-10-14T14:49:48.189Z",
      "updatedAt": "2022-10-18T09:46:58.259Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 26,
      "publishedAt": "2022-10-18T09:46:58.259Z",
      "firstPublishedAt": "2022-10-14T14:55:54.255Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 27,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Australia"
      },
      "body": {
        "en-US": "The trouble with Australia is that there’s just so much of it – an island that thinks it’s a continent. Dispel any notions that Australia is all big red rocks and sizzling Outback: it’s truly a land of diversity, from the tropical far north – Northern Territory’s Top End, Queensland’s Great Barrier Reef, teeming with kaleidoscopic sea life, and its lush rainforest – to the surf, fine wines and huge tingle trees of Western Australia’s south-west. Australia’s cities are buzzing – Sydney’s nightlife and beaches are as tantalising as its harbour views, blessed with the ‘Old Coathanger’ bridge and Opera House; Melbourne is the hotspot for cosmopolitan café culture, Adelaide is a regal, arty lady while Perth is the hot new kid, the sunniest state capital. True, Australia has vast swathes of Outback wilderness to explore, as well as the beautiful Blue Mountains of New South Wales, the gorges of the Kimberley and wildlife-rich Kangaroo Island. Not forgetting Tasmania, with wild rainforest, convict heritage and Australia’s best beers… In fact, there’s so much to say about Australia that we’ve created separate destination hubs for the East Coast, Tasmania, the Outback and Western Australia. \n\n### Recommendations\n\n1.     Explore Western Australia’s remote East Kimberley region\n2.     Hike the forests and beaches of Tasmania’s pristine Tarkine Wilderness\n3.     Admire ancient rock art and meet the Aboriginal owners of Arnhem Land in the Northern Territory\n4.     Get a unique insight into Uluru (Ayers Rock)\n5.     Trek Tasmania’s Overland Track from Cradle Mountain to Lake St Clair\n6.     Snorkel with whale sharks on Ningaloo Reef, Western Australia\n7.     Board the Ghan for a rail journey across the Outback from Adelaide to Darwin\n8.     Hike the Great Ocean Walk along Victoria’s rugged south coast\n9.     Meet the abundant wildlife of South Australia’s Kangaroo Island\n\n### Tips\n\nYou can join an organised tour of Rottnet Island – but it’s fun just to catch the ferry and hire bikes to scoot around – keeping an eye out for quokkas on the road and whales out to sea.\n\nThough Perth is famously sunny, outside summer the evenings in the south of Australia can be chilly – take a fleece or sweater.\n\n### I wish I'd known...\n\nWanderlust web intern Holly Gurr on the one thing she wished she'd known on arrival:\n\n\"Despite a forewarning from residents and previous visitors, the sheer expense of Australia is something that is hard to get to grips with. Those who are quick with calculations will soon realise that most consumer items are incredibly expensive. Plan out a budget before you go and stick to it!.\" \n\n### When to go to Australia\n\nThe vastness of the country means it’s pretty much always a good time somewhere. Winter (June-August) is cold in the south, but pleasant and less humid in the north of NT, Western Australia and Queensland, where summer (November-March) means The Wet – rain, and lots of it. Spring (September-November) and autumn (March-May) offer good conditions in most regions.\n\nSchool holidays, especially the long summer break (January), can see crowds at popular beaches and parks.\n\n### Australia international airports\n\nSydney International Airport (SYD) is about 10km south of the city. Perth International Airport (PER) is about 13km east of the city. Darwin International Airport (DRW) is about 12km north-east of the city. Adelaide (ADL), Brisbane (BNE), Cairns (CNS) and Melbourne also receive international flights.\n\n### Getting around in Australia\n\nMany airlines, including low-costers, run internal flights in Australia; a number of smaller airlines serve regional communities. Greyhound Australia is the main national bus company, with comfortable coaches; many smaller companies have more expensive local networks, while hop-on-hop-off tours provide useful routes round popular backpacker circuits.\n\nThe train service is essentially limited to three major routes: the Indian Pacific (Sydney-Adelaide-Perth); the Overland (Melbourne-Adelaide); and the Ghan (Adelaide-Alice Springs-Darwin). There are also lines north from Sydney to Brisbane and Cairns, branching into inland Queensland, and suburban routes.\n\nCar hire allows freedom – but you should be well prepared for Outback driving, and aware of the long distances involved.\n\n### Australia accommodation\n\nAustralia has the lot – campsites and caravan parks (great for campervanners), hostels, motels, B&Bs and pubs, stylish guesthouses and hotels. The big cities also boast some of the coolest design hotels.\n\n### Australia food & drink\n\nYes, you can have billy-can tea, damper bread and a meat-pie floater at the footy – but Australia’s come a long way in the gourmet stakes.\n\nThere’s fine wines, notably from Western Australia’s Margaret River, New South Wales’ Hunter Valley and the Barossa and other winery areas of South Australia. Beers are booming, from the Tassie breweries Boag’s and Cascade to South Australia’s Coopers and numerous new boutique breweries.\n\nAnd high-quality ingredients, countless ethnic influences (notably Italian, Greek and Vietnamese) and a burgeoning gourmet aesthetic mean you’ll rarely struggle to find delicious food, even in the boondocks.\n\n### Health & safety in Australia\n\nAustralia is a pretty safe region, with few opportunities for getting sick; no specific vaccinations are mandated unless you’ve arrived from a yellow fever-infected destination.\n\nVenomous snakes and spiders are present but shy; bites are rare. Keep an eye out for box jellyfish warnings along beaches, and be wary of swimming in crocodile-infested regions (especially in the Northern Territory).\n\nHeat can be dangerous: cover up, use sunblock and always ensure you have plenty of water, especially in the Outback.\n"
      },
      "location": {
        "en-US": {
          "lon": 150.8087,
          "lat": -33.9179
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "rCn0QJXAoDNrci1035thK"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2amBEb3FTaLPcrTe1xUF4v",
      "type": "Entry",
      "createdAt": "2022-10-14T14:58:12.526Z",
      "updatedAt": "2022-10-18T09:45:53.122Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 24,
      "publishedAt": "2022-10-18T09:45:53.122Z",
      "firstPublishedAt": "2022-10-14T15:02:20.688Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 25,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Fiji"
      },
      "body": {
        "en-US": "On winter days, Fiji is where you dream of. Made up of over 300 islands, Fiji’s palm-dotted sandy beaches, turquoise waters and warm weather are the stuff of Monday morning fantasies. Popular with Antipodeans, this South Pacific archipelago is perfect for beach lounging.\n\nBlessed with pristine coral reefs, it’s also a major snorkelling and diving destination and the breaks are good for surfers too. When you tire of kicking back, you can hike, sea-kayak or river raft before falling back once more into the easy laid-back rhythm of the islands.\n\n### Recommendations\n\n1.     Stay in a traditional bure in a rural village\n2.     Sea-kayak your way around Kadvu island Walk the\n3.     Bouma Falls Trail for pretty coastal villages and multiple waterfalls\n4.     Get your fins on and go snorkelling\n5.     Grab a beer and watch the sunset at Coral Coast\n\n# Further Reading\n### Travel in Fiji: vital statisics\n\n    Capital of Fiji: Suva\n    Population of Fiji: 1 million\n    Languages in Fiji: English, Fijian, Hindustani\n    Time in Fiji: GMT + 12\n    International dialling code in Fiji: + 679\n    Voltage in Fiji: 220/50Hz\n    Visas for Fiji: Fiji visas\n    Money in Fiji: Fijian dollar (FJD). Credit cards are widely accepted, although it’s wise to double check first with your resort that they do. ATMS are available in most towns on Viti Levu. Banks will change currency.\n    Fiji travel advice:Foreign and Commonwealth Office\n    Fiji tourist board: Fiji tourist board\n\n### When to go to Fiji\n\nThe dry season is between May and October. Fiji is especially busy with holidaymakers from Australia and New Zealand in June and July.\n\nSummer is from November to April when you can expect biblical downpours in the afternoon.\n\nThe island is particularly lush during this rainy season when it’s a great time for scuba divers.\n\nCyclones can be a risk between December and April.\n\n### International airports\n\nNadi International Airport (NAN) – 10km from Nadi\n\n### Getting around Fiji\n\nIsland hopping isn’t as easy as it looks in Fiji.\n\nNadi and Suva on the main island of Viti Levu are the main transport hubs.\n\nBuses and vans plough the biggest islands, elsewhere you’ll need to rely on cargo boats and passenger ferries to get around.\n\nDomestic flights can be expensive and are not for nervous fliers.\n\nCars can be rented at Nadi Airport or in Suva.\n\n### Fiji accommodation\n\nStaying in Fiji isn’t cheap.\n\nBeach resorts are everywhere and smaller boutique style resorts are becoming more popular.\n\nBudget travellers should look for guesthouses, bed and breakfasts, hostels and village homestays.\n\nCamping is frowned upon.\n\n### Fiji food & drink\n\nFijans often skip lunch and have dinner very early – late eaters beware.\n\nLocal specialities include various variations on fish with coconut served with yams. Try kokoda, fish marinated in lime and chilli, seasoned with coconut cream and served up cold.\n\nBananas, pawpaw and coconuts are available year round.\n\nExpensive buffets in resort hotels might be your only option on smaller islands.\n\n### Health & safety in Fiji\n\nSpeak to your GP about vaccinations for Fiji. Protect yourself from mosquito bites – dengue fever outbreaks do happen.\n\nPetty theft can be a problem – don’t leave clothes, money or jewellery lying about.\n\nSexual harassment has been reported so female travellers should take extra care and avoid walking alone at night.\n"
      },
      "location": {
        "en-US": {
          "lon": 178.065,
          "lat": -17.7133
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "21tnBiej3c3uYvTuZsSaRC"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4CqyjunbQynxQKmoG1ESST",
      "type": "Entry",
      "createdAt": "2022-10-14T15:02:34.239Z",
      "updatedAt": "2022-10-18T09:50:02.075Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 17,
      "publishedAt": "2022-10-18T09:50:02.075Z",
      "firstPublishedAt": "2022-10-14T15:04:32.179Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 18,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Micronesia"
      },
      "body": {
        "en-US": "Micronesia travel guide, including map of Micronesia, top Micronesia travel tips. plus where to go in the Caroline, Marshall, Mariana, and Gilbert islands\n\nThe Federated States of Micronesia is an independent, sovereign island nation in the west Pacific, made up of four states: Yap, Chuuk, Pohnpei and Kosrae.\n\nOur travel guide to Micronesia is coming soon. In the meantime, please check out our Micronesia Essential Info page, and the posts in our travellers' forums.\n\n# Further Reading\n### Travel in Micronesia – vital statistics\n\nCapital of Micronesia: Palikir (Pohnpei)\nPopulation of Micronesia: 107,000\nLanguages in Micronesia: English (official and common language), Chuukese, Kosrean, Pohnpeian, Yapese, Ulithian, Woleaian, Nukuoro, Kapingamarangi\nTime in Micronesia: Guam – GMT +10 The islands are spread across a large area so others may use a different time.\nInternational dialling code in Micronesia: +691\nVoltage in Micronesia: 110/120V 60Hz. For Nauru and Kiribati the voltage is 240V 50Hz.\nVisas for Micronesia: Micronesia visas\nMoney in Micronesia: US dollar and Australian dollar. Travellers cheques are widely accepted and there are banks on all the major islands.\nMicronesia travel advice: Foreign & Commonwealth Office\nMicronesia tourist board: Exotic Micronesia\n"
      },
      "location": {
        "en-US": {
          "lon": 150.5508,
          "lat": 7.425554
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "34aklmuOVgszFPGcEOXSs1"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "67cr3AYAZrKal2xjNb26Vj",
      "type": "Entry",
      "createdAt": "2022-10-14T15:05:19.907Z",
      "updatedAt": "2022-10-18T10:09:16.577Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 31,
      "publishedAt": "2022-10-18T10:09:16.577Z",
      "firstPublishedAt": "2022-10-14T15:08:36.950Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 4,
      "version": 32,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "New Zealand"
      },
      "body": {
        "en-US": "Remote, rugged and absolutely remarkable, New Zealand is top of many travellers’ wishlists. If it wowed you on the big screen in Lord of the Rings, New Zealand will knock you with the force of an All Blacks prop forward when you actually visit.\n\nThe two main islands – North and South – have different characters. North Island is warmer, with more rolling hills, beautiful beaches and some seriously sulphurous volcanic goings-on: visit Rotorua for the best thermal bath or Tongariro National Park to see still-active craters in an otherworldly landscape.\n\nDramatic South Island has the highest peaks, and glacier-carved fiords – a trip to Fiordland will show Mother Nature at her most artistic. Southerly Stewart Island (the best place to spot kiwis) and a few other outlaying atolls make up this nation – so best make your New Zealand visit a lengthy one…\n\n### Recommendations\n\n1.     Climb Mount Cook, South Island, New Zealand’s highest peak and Edmund Hillary’s Everest training ground\n2.     Search for elusive kiwis on a night walk on Stewart Island\n3.     Fly or drive to the magical Milford Sound for cruises with dolphins, black coral diving and a gateway to wonderful walking\n4.     Join a Maori guide to explore the beautiful coast and bush around Auckland\n5.     Self drive South Island  – from adventure capital Queenstown to the Fox and Franz Josef glaciers, Kaikoura’s whale-watching and chilled-out Christchurch\n6.     Sea kayak across Marlborough Sound\n7.     Drink wine and enjoy Art Deco cool around Napier, North Island\n\n### Tips\n\nYou must not bring food into the country and any pre-used camping equipment/hiking boots etc must be declared at customs and, if necessary, cleaned before you’re permitted to enter.\n\nRoads in New Zealand are quiet and generally good – it is easy to speed without realising it; obey the limit and watch out for sharp bends.\n\nThere are no poisonous critters in New Zealand so bushwalks are safe – just be sure to tell someone where you’re going if tramping alone.\n\n# Further Reading\n### Travel in New Zealand: vital statistics\n\nCapital of New Zealand: Wellington\nPopulation of New Zealand: 4.4 million\nLanguages in New Zealand: English, Maori\nTime in New Zealand: GMT+12 (GMT+13 end Sep-early Apr)\nInternational dialling code in New Zealand: +64\nVoltage in New Zealand: 230/240 volts, 50 Hz\nVisas for New Zealand: Not required by UK nationals. Find out more about New Zealand visas here. \nMoney in New Zealand: New Zealand dollar (NZ$). Foreign credit cards are widely accepted; ATMs are easily accessible. Tipping is optional; leave 10% for good service.\nNew Zealand travel advice: Foreign & Commonwealth Office\nNew Zealand tourist board: Tourism New Zealand\n\n### When to go to New Zealand\n\nSouthern hemisphere summer (Dec-Mar) is the warmest and driest time to visit New Zealand – and the most popular: hotels get booked up and prices are higher. Winter (Jun-Sep) is the wettest and coldest time in New Zealand, but great for skiing; some hikes, for example the Milford Track, are closed due to snow.\n\nThe shoulder seasons of spring (Oct-Nov) and autumn (Apr-May) are lovely – the weather is still reasonable, popular sites are less busy and airfares are lower.\n\n### New Zealand international airports\n\nAuckland International (AKL) 25km from Auckland; Wellington International (WLG) 7km from Wellington; Christchurch International (CHC) 12km from Christchurch.\n\n### Getting around in New Zealand\n\nGetting around New Zealand is pretty easy. Domestic airlines serve small airports across the New Zealand – if you’re short on time, consider an airpass.\n\nBus travel is comfortable and efficient in New Zealand but can be time consuming; there are several backpacker-style hop-on, hop-off services you can use to access the main highlights. Train travel in New Zealand is a sightseeing option, rather than a practical one – routes are slow but generally stunning.\n\nThe best way to get around is by hiring a car or campervan  – roads are quiet, rates are reasonable and you have maximum flexibility. \n\n### New Zealand accommodation\n\nCool campsites, hip hostels, boutique lodges, wilderness retreats, city hotels – all types of accommodation are available in New Zealand, catering for all budgets and tastes. Maori homestays are also a possibility, as are farmstays, where you get to help out with the animals.\n\nTouring New Zealand by campervan is a popular option – there are many campsites to stop at. Much accommodation gets busy December-February – book in advance.\n\n### New Zealand food & drink\n\nNew Zealand cuisine is generally fresh, natural and tasty. Dairy, meat and fish products are world-renowned: try New Zealand lamb, grass-fed venison, Bluff oysters, local scallops, crayfish and hokey pokey ice cream (vanilla with crunchy toffee pieces). Manuka honey is another local specialty – great for toast and your immune system. For a traditional taster of New Zealand, try a Maori hangi, a meal of meat, spices and vegetables cooked in an underground, hot-rock oven.\n\nVegetarians will be fine in New Zealand (if jealous of the succulent meat and fish on offer). The local fruit and veg is good – don’t miss the kumara (sweet potato) and the kiwis. Most restaurants in New Zealand will be able to cater to vegetarians.\n\nThe drinks scene in New Zealand is equally good – don’t miss a tour of a local vineyard to sample some of New Zealand’s excellent vintages (for starters, try the sauvignons in the Marlborough region and pinot noirs in Otago), then sober up for a brewery visit: good New Zealand beers include Speights and Monteiths, plus there’s a wealth of microbreweries fermenting excellent ales.\n\n### Health & safety in New Zealand\n\nNo specific vaccinations are required for New Zealand. The UK NHS has a reciprocal agreement with the NZ health service but it is advisable to take out good health insurance: see www.wanderlustinsurance.co.uk.\n\nThe weather in general, and especially in the mountains, is highly unpredictable – it’s essential to be well prepared and properly equipped with warm, waterproof gear. The sun is exceptionally strong – make sure you apply high-factor sunscreen regularly. Sandflies can be a nuisance in summer.\n"
      },
      "location": {
        "en-US": {
          "lon": 174.8859,
          "lat": -40.9005
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "eh9QSv3Rqa2lrNnPjDwg2"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      },
      "parentId": {
        "en-US": "oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5au09eOvD1fbVKmEY8nqY9",
      "type": "Entry",
      "createdAt": "2022-10-14T15:09:12.718Z",
      "updatedAt": "2022-10-18T10:08:46.199Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 16,
      "publishedAt": "2022-10-18T10:08:46.199Z",
      "firstPublishedAt": "2022-10-14T15:11:56.484Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 4,
      "version": 17,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Vanuatu"
      },
      "body": {
        "en-US": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum eget turpis id condimentum. Proin vehicula tristique eleifend. Vivamus eget condimentum velit, nec venenatis leo. Donec commodo orci sit amet diam semper, id blandit est faucibus. Donec ut posuere lacus, et consectetur tellus. Suspendisse at condimentum dolor. Nullam volutpat consectetur lacus sit amet mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque facilisis dolor vel lacus vestibulum, ac accumsan eros luctus. Praesent convallis, ante sit amet lacinia ullamcorper, arcu quam semper quam, ut porta dolor augue non quam. Aliquam erat volutpat. Aenean interdum ex dolor, in feugiat tellus pellentesque eu.\n\nInteger ornare suscipit nisi vitae suscipit. Phasellus elit sem, porta vitae ante id, eleifend luctus odio. Ut tristique, dui vitae pulvinar pellentesque, nulla turpis auctor erat, nec pellentesque ligula nisi non mi. Nulla vitae nisl dui. Cras dictum tortor vel elit placerat tincidunt. Etiam ornare, leo id rutrum pulvinar, lorem mi mollis eros, at rhoncus urna orci id est. Nulla id imperdiet leo. Ut sit amet mollis nisl, quis venenatis arcu.\n\nQuisque in euismod est, eu elementum magna. Sed congue sem nec orci ornare, non ultricies augue venenatis. Aenean malesuada scelerisque urna quis volutpat. Maecenas in eros ut enim condimentum ullamcorper. Praesent id ultrices metus. Ut dapibus urna sit amet rhoncus tempor. Quisque viverra eleifend elementum. Morbi auctor posuere consequat. Mauris risus magna, luctus in nibh vitae, euismod sollicitudin nibh. Nam dignissim nibh at leo congue, nec finibus lacus posuere. Proin viverra ligula nulla, sed lobortis lacus tincidunt et. Maecenas non tortor ut enim aliquam vulputate. Donec lacinia convallis eros, quis dapibus ligula iaculis sed. Nulla a neque faucibus, fermentum tortor ut, dictum nisi. Nulla vel ornare est.\n\nPhasellus eget nisi mauris. Aenean non ipsum eget felis condimentum malesuada. Nunc ut felis vel ligula ornare tincidunt. Etiam convallis sodales sapien, sed posuere erat commodo in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt sem nec est feugiat, vehicula luctus dui feugiat. Donec lobortis aliquet nibh, et aliquam ex convallis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus egestas nisl malesuada elementum venenatis. Vivamus commodo scelerisque mi condimentum efficitur. Sed suscipit gravida enim, ac feugiat ex accumsan nec. Etiam eget quam vel orci bibendum aliquam non sit amet est. Morbi blandit at sapien ut euismod.\n\nCras pretium sodales massa, sed luctus tellus varius sit amet. Duis euismod quam ex, sit amet accumsan tellus molestie in. Donec feugiat vehicula nulla sit amet aliquam. Etiam sollicitudin nisl placerat purus vestibulum porta. Suspendisse auctor, ex non bibendum varius, eros dolor rhoncus mi, nec porttitor dui diam at metus. Cras congue ultricies odio at ultricies. Ut vulputate nibh viverra facilisis ultrices. Sed id ornare justo. Vestibulum rutrum ante sed neque tristique, a molestie quam molestie. Nunc hendrerit auctor massa, et pellentesque elit pulvinar in. "
      },
      "location": {
        "en-US": {
          "lon": 166.9591,
          "lat": -15.3767
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6cumOEB1Qckyce8Nf8McyI"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      },
      "parentId": {
        "en-US": "oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7j3kjpbcRIta1aC1fVBMla",
      "type": "Entry",
      "createdAt": "2022-10-14T15:12:36.457Z",
      "updatedAt": "2022-10-18T10:08:27.090Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 16,
      "publishedAt": "2022-10-18T10:08:27.090Z",
      "firstPublishedAt": "2022-10-14T15:14:07.856Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 4,
      "version": 17,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "American Samoa"
      },
      "body": {
        "en-US": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum eget turpis id condimentum. Proin vehicula tristique eleifend. Vivamus eget condimentum velit, nec venenatis leo. Donec commodo orci sit amet diam semper, id blandit est faucibus. Donec ut posuere lacus, et consectetur tellus. Suspendisse at condimentum dolor. Nullam volutpat consectetur lacus sit amet mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque facilisis dolor vel lacus vestibulum, ac accumsan eros luctus. Praesent convallis, ante sit amet lacinia ullamcorper, arcu quam semper quam, ut porta dolor augue non quam. Aliquam erat volutpat. Aenean interdum ex dolor, in feugiat tellus pellentesque eu.\n\nInteger ornare suscipit nisi vitae suscipit. Phasellus elit sem, porta vitae ante id, eleifend luctus odio. Ut tristique, dui vitae pulvinar pellentesque, nulla turpis auctor erat, nec pellentesque ligula nisi non mi. Nulla vitae nisl dui. Cras dictum tortor vel elit placerat tincidunt. Etiam ornare, leo id rutrum pulvinar, lorem mi mollis eros, at rhoncus urna orci id est. Nulla id imperdiet leo. Ut sit amet mollis nisl, quis venenatis arcu.\n\nQuisque in euismod est, eu elementum magna. Sed congue sem nec orci ornare, non ultricies augue venenatis. Aenean malesuada scelerisque urna quis volutpat. Maecenas in eros ut enim condimentum ullamcorper. Praesent id ultrices metus. Ut dapibus urna sit amet rhoncus tempor. Quisque viverra eleifend elementum. Morbi auctor posuere consequat. Mauris risus magna, luctus in nibh vitae, euismod sollicitudin nibh. Nam dignissim nibh at leo congue, nec finibus lacus posuere. Proin viverra ligula nulla, sed lobortis lacus tincidunt et. Maecenas non tortor ut enim aliquam vulputate. Donec lacinia convallis eros, quis dapibus ligula iaculis sed. Nulla a neque faucibus, fermentum tortor ut, dictum nisi. Nulla vel ornare est.\n\nPhasellus eget nisi mauris. Aenean non ipsum eget felis condimentum malesuada. Nunc ut felis vel ligula ornare tincidunt. Etiam convallis sodales sapien, sed posuere erat commodo in. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla tincidunt sem nec est feugiat, vehicula luctus dui feugiat. Donec lobortis aliquet nibh, et aliquam ex convallis nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus egestas nisl malesuada elementum venenatis. Vivamus commodo scelerisque mi condimentum efficitur. Sed suscipit gravida enim, ac feugiat ex accumsan nec. Etiam eget quam vel orci bibendum aliquam non sit amet est. Morbi blandit at sapien ut euismod.\n\nCras pretium sodales massa, sed luctus tellus varius sit amet. Duis euismod quam ex, sit amet accumsan tellus molestie in. Donec feugiat vehicula nulla sit amet aliquam. Etiam sollicitudin nisl placerat purus vestibulum porta. Suspendisse auctor, ex non bibendum varius, eros dolor rhoncus mi, nec porttitor dui diam at metus. Cras congue ultricies odio at ultricies. Ut vulputate nibh viverra facilisis ultrices. Sed id ornare justo. Vestibulum rutrum ante sed neque tristique, a molestie quam molestie. Nunc hendrerit auctor massa, et pellentesque elit pulvinar in. "
      },
      "location": {
        "en-US": {
          "lon": -170.132,
          "lat": -14.2709
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6l8s1hDQs7YlBpzjR5VW9L"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      },
      "parentId": {
        "en-US": "oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "oceania"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1c3H00oJhkrvFrhEHdq5VT",
      "type": "Entry",
      "createdAt": "2022-10-14T15:14:51.555Z",
      "updatedAt": "2022-10-18T10:40:19.667Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 70,
      "publishedAt": "2022-10-18T10:40:19.667Z",
      "firstPublishedAt": "2022-10-14T15:17:36.115Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 10,
      "version": 71,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Tonga"
      },
      "body": {
        "en-US": "The Kingdom of Tonga is made up of 171 islands, sprawling across 700,000sq km of the South Pacific Ocean, stitched by the volcanoes of the ‘Pacific Rim of Fire’ into a line, north to south, 800km long.\n\nThe fact that the date-line lies near to Tonga explains why it is the first country in the world to greet every day, but this isn’t the first occasion on which Tonga’s importance has belied its size. In the 12th century it is thought kings of Tonga ran an empire that reached across much of the Pacific, but by the time Europeans discovered the islands in 1616 this had long gone. The islanders are no pushover though: uniquely in the Pacific they have never lost indigenous government.\n\nCaptain Cook landed first in 1773, happening to visit during the annual ‘First Fruits’ festival. He was invited to join in the festivities and dubbed the islands ‘The Friendly Islands’ – though recent research indicates the islanders’ welcome was not quite as it seemed. It may be that the locals were planning to murder him but never found the right moment. Little deterred - and certainly not dead - he came back for two later visits. Methodist missionaries arrived in 1797 and were very influential.\n\nIn many ways Tongan society seems little affected by the modern age. There’s money in the capital but not much elsewhere. Many of the islands have no electricity and operate outside any monetary system: days are spent harvesting root vegetables and fishing from outrigger canoes, while in the evenings women weave mats and make tapa cloth, while the men drink kava and talk about the fish that got away.\n\nThen you realise that the Tongans are surprisingly well-travelled. At any given time half the population is working abroad. Their remittances fund the islands’ modest economy and a sophisticated knowledge of the western world has certainly crept back into the culture along with the Australian, New Zealand and American dollars that keep the islands afloat.\n\nTongatapu is the main island of the group, where you’ll find the capital Nuku’alofa, the royal family, the government and most of the population. This is also where you’ll find the country’s most important archaeological sites: stone henges, terraced tombs and ancient moats. It’s also got good surf, spectacular blow holes and great diving around its offshore islets.\n\n‘Eua is nearby but feels like a different world. Protected as a national park it has some of the best hiking: caves, chasms and waterfalls abound.\n\nVava’u is one of the Pacific’s great sailing centres, with beautiful scenery and some spectacular dive sites. At any time of year some of the islands in the group will provide good surf and though whales can be seen all over Tonga, this is the place where sightings are most frequent and best.\n\nThe pace of life slows sharply on the Ha’apai Island group. This is where Captain Cook made land, and where the Mutiny on the Bounty took place: it’s easy to understand why the mutineers chose this place to escape a hard life at sea, as these islands are enchantingly slow.\n\nThe Niuas are the most northern and remote island group in Tonga – they’re closer to Samoa and Fiji than they are to Tonga’s capital, Tongatapu – and this is where you’ll find islands at their most isolated and authentic. It’s not so long ago that the Niuas relied on a mail delivery system that put letters into biscuit tins which they threw to village swimmers: things have hardly changed.\n\nTourism is in its infancy in Tonga. As the capital Tongatapu has the best facilities, while the islands of the Vava’u group have, thanks to their surf, beaches, whale watching and fishing, became yachtie heaven. The other islands of the archipelago still have few sophistications and you’ll find little in the way of facilities. Good. Long may it stay that way.\n\n### Recommendations\n\n1. __Catch a Match.__ Rugby is more than a sport in Tonga: it’s practically a religion. The islands punch way above their weight on the international Rugby circuit: it’s worth asking if there are any club – or even school – games being played while you’re there. The ultimate match would involve ’Ikale Tahi, the national rugby union team \n2. __Go to Church.__ From midnight on Saturday until Midnight on Sunday, Tonga does religion. You’ll hear church bells and wooden drums as well as harmonized singing coming from packed wooden churches. You might as well join in – all other entertainment stops \n3. __Make an Umu.__ Dig a hole in the ground, make a fire in it. Add rocks. When they are hot, remove ashes, add meat and vegetables, cover with banana leaves, leave for hours \n4. __Climb Cliffs.__ The 150m limestone cliffs on ’Eua’s east coast make for excellent uncharted climbing \n5. __Summit a Volcano.__ Kao is Tonga’s highest peak, at 1,046m, with stunning views of the islands and ocean. Bushwalking the volcanic landscapes, with ash fields and tropical forests, is always a delight \n6. __Catch some Kava.__ Infused from the sun-dried root and stem of the kava plant, the mildly intoxicating kava is an essential part of Tongan culture. Drinking ceremonies are intricate social affairs, usually dominated by men, but women are invited to join in on special occasions \n7. __Dive Deep.__ Tonga’s coral reefs, drop-offs, wrecks, geological formations and caverns are world-class. The Pacific waters teem with life. Dolphins and turtles are often seen, and from June to November humpback whales visit \n8. __Find a Feast.__ The locals love feasting and often invite travellers. This is your best chance to see authentic traditional music and dancing – be ready to keep going into the small hours\n\n### Tips\n\nTake gifts. The locals are welcoming, especially in rural areas, but it's always good to be able to show your appreciation. Apart from the main islands they don't see much imported technology: your junk might be their revelation.\n\n## Further Reading\n\n### Tonga – Vital Statistics\n\n__Capital of Tonga:__ Nuku’Alofa \\\n__Population of Tonga:__ 122,500 \\\n__Languages in Tonga:__ Tongan, English \\\n__Time in Tonga:__ GMT +13 \\\n__International dialling code in Tonga:__ +676 \\\n__Voltage in Tonga:__ 240V 50Hz \\\n__Visa information for Tonga:__ Visa information \\\n__Money in Tonga:__ Tongan pa’anga (TOP) There are ATMs in the capital and in Neiafu. Credit cards are accepted as payment in many tourist facilities (hotels, tours etc.). Travellers cheques can be exchanged in Tonga. \\\n__Tonga travel advice:__ Foreign & Commonwealth Office \\\n__Tonga tourist board:__ Tonga\n\n### When to go to Tonga\n\nSummer falls from November to July, but is hot, humid and wet. November to March is also cyclone season, so sailing trips then are best avoided. The best time to visit is between May and July: the temperatures fall between 25°C and 30°C, the rainfall reduces, and the humpback whales arrive.\n\n### International airport\n\nFua’amotu International Airport, Tongatapu (TBU)\n\n### Getting around in Tonga\n\nLocal buses operate on the main islands, but are often very unreliable. Driving on the islands can be a hair-raising experience. Cycling is a good way to get around at a relaxed pace but the islands are generally volcanic: be ready for hills. Inter-island ferries operate regularly and are a good way of navigating the islands if you have plenty of time on your hands, but distances are often daunting: internal flights with Royal Tongan Airlines are faster.\n\n### Tonga accommodation\n\nYou’ll find a limited choice of hotels on the main islands, but don’t expect anything over general 3* standard.\n\nGuesthouses are an excellent budget option, and are available on every island. Bathing and toilet facilities are often communal, and you shouldn’t expect a hot shower outside Tongatapu.\n\nTongans are notoriously friendly, so don’t be surprised if they offer to put you up for the night. Always be respectful – even if they won’t accept money, a gift of food or drink will always be welcome.\n\nCamping is either discouraged or illegal in many parts of Tonga, but a few places on ’Eua and Tongatapu will allow you to pitch up for the night. Always ask for permission, and respect the locals and the natural environment.\n\n### Tonga food & drink\n\nAlthough Tongan fare is limited to local ingredients, you’ll be impressed by the imagination and creativity of Tongan recipes. Cassava, yam, taro root, plantain and breadfruit are staples, and are served with fresh fruits, meat, poultry and fish. Lu Sipi is lamb strips in taro leaves with coconut cream, while ‘Ota Ika is raw fish marinated in lemon, with coconut cream and lettuce.\n\nIf you’re lucky enough to coincide your trip with a national event or celebration, chances are you’ll be treated to a Tongan feast. These are served on a pola, a long tray made from plaited coconut fronds, groaning under an elaborate array of suckling pig, chicken, seafood and curries. Suckling pig is roasted above ground, but most dishes are cooked in an umu, a natural oven dug into the ground.\n\n### Health & safety in Tonga\n\nThere are no specific health issues for travellers to Tonga. Water is safe to drink. Be prepared if you are heading out into the countryside – make sure someone knows where you’re going, and that you have suitable clothing/provisions in case the weather changes or you get stuck. Make sure you have appropriate travel insurance. Never drink kava and drive.\n"
      },
      "location": {
        "en-US": {
          "lon": -175.198,
          "lat": -21.1789
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4SDcMK1Ej7DP2dwGCBidqv"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Oceania"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6mNNbJQdVwVXNGiV9ZIgfr",
      "type": "Entry",
      "createdAt": "2022-10-14T15:18:12.231Z",
      "updatedAt": "2022-10-18T09:59:03.219Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 23,
      "publishedAt": "2022-10-18T09:59:03.219Z",
      "firstPublishedAt": "2022-10-14T15:21:22.541Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 24,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Argentina"
      },
      "body": {
        "en-US": "Vast and inscrutable, Argentina's magnificent landscapes stretch from spectacular waterfalls in the north across expansive drum-flat pampas, fringed by the Andes on one side and the Atlantic on the other, to the glaciers, lakes and mountains of the deep south. The biggest problem you’ll have when travelling Argentina is fitting everything in. City slickers love the pace of Buenos Aires, where handsome locals jostle for your attention with the Parisian-style architecture. An airy and open cafe culture co-exists with a lively art scene. Head down to the port area of La Boca, where tango started. The colourfully painted local buildings have been newly gentrified but the area still maintains an edge: when asked if you're British, 'New Zealand' is a good answer. In Mendoza you can ski down the foothills of Aconcagua (South America’s highest peak) before dropping in to a local winery and perfecting a giant steak with a glass of fine red. In the Austral winter (June to October) the Lake District town of Bariloche is a ski resort: at other times of year it is the place to go hiking through ancient rainforest around lakes of peppermint green. Go east to Ushuaia and the Atlantic coast: penguin and seal abound. For the ultimate wilderness experience, head south to Patagonia. The Tierra del Fuego National Park adjoins Chile's Torres del Paine, a dramatic barrier of jagged, glaciated mountains that stand guard at the bottom of the world.\n\n### Recommendations\n\n1.     Deal with the Dead. In La Recoleta is a cemetary like no other: the mausoleums of Buenos Aires' great and good are larger than many inner-city dwellings, with tree-lined avenues and stray cats galore. Pay a small child and they'll show you Evita's grave too.\n2.     Find your Inner Gaucho. Become part of cattle country by staying at an estancia, where you can saddle up for games of polo or run cattle drives across huge estates.\n3.     Pampa Yourself. The Argentine Pampas are stunning, stretching flat as a lake to a curving horizon of clouds, or the faint outline of the snow-capped Andes. Drive or ride, don't fly, across this unique landscape.\n4.     Wine is Fine. Drive around the colonial towns and rolling vineyards of Argentina’s unexpectedly civilised north-west. Tasting opportunities abound\n5.     Sunbathe on Ice. The Perito Moreno Glacier in Los Glaciares National Park is one of the world's greatest sights, an 18-mile river of ice that calves and fractures into the water nearby. Go in summer and you might be able to sunbathe - but not for long\n6.     Learn to Tango. This sultry, moody dance was born in Buenos Aires and there are plenty of places you can learn. Or strut your stuff in the informal clubs in Recoleta or Palermo districts\n7.     Wow at Water. Head north to the Brazilian border to see the churning torrents of rainbowed water that is the Iguacu Falls. Butterflies feast on the mist in the surrounding National Park\n\n### Tips\n\nFor an authentic day out, take your own meat to the countryside: public barbecues are dotted around beauty spots where you will be joining an army of happy Argentinians grilling meat in the great outdoors. \n\nBookworm or music fan? Allow a day for some aimless pottering around the many book and record stores in Buenos Aires.\n\n# When to go to Argentina\n\nArgentina is long, full of complex topography and subject to a range of weather systems. Broadly speaking, the centre – including Buenos Aires – is most pleasant in the Austral spring (September-November) and early autumn (March-April).\n\nThe south, including Patagonia, is windiest in summer (December-February) and coldest in winter (June-August); heavy snowfalls can cut off towns in the Andean regions of Patagonia. At this time of year ski resorts come to life in Mendoza province, the Lake District near Bariloche and Tierra del Fuego.\n\nThe north-west is pleasant during the day year round, but receives heavy rainfall in summer, while the north-east has a lowland subtropical climate – hot, humid and generally sunny.\n\n### International airport\n\nMinistro Pistarini International (EZE) is 22km from Buenos Aires.\n\n### Getting around in Argentina\n\nBuses in Argentina are excellent. There are long-distance services from Buenos Aires to all the provincial capitals, though some journeys are extremely long (Buenos Aires to Río Gallegos: 38 hours).\n\nBuenos Aires’ domestic airport, Jorge Newbery, is a ten-minute taxi ride from downtown or Palermo, and has frequent connections to all points of the country; some domestic flights depart from Ezeiza, so double check when booking – you’ll need to allow an hour to get from the city centre to the international airport.\n\nFor Uruguay, fast, frequent jetfoils serve Colonia del Sacramento (one hour) and Montevideo (2.5 hours) from Buenos Aires. \n\n### Argentina accommodation\n\nAccommodation is plentiful in Argentina with everything from 5-star opulence to tiny hospedajes in family houses. In Buenos Aires, you’ll be spoilt for choice with boutique hotels, chic townhouses converted into B&Bs and some excellent hostels.\n\nCamping is popular in Argentina. For a dash of elegance, quaff your red wine from the porch of an estancia (ranch) in the pampas.\n\n### Health & safety in Argentina\n\nArgentina has no malaria and minimal yellow-fever issues; consult your GP for suggested vaccinations. Medical insurance is essential – private health services can be very expensive for those without cover. Visitors to remote regions of the north-west should be alert for Chagas disease. You should be up-to-date with routinely recommended vaccinations.\n\nWhile guns and knives are not as common as in some neighbouring countries, use ATMs only during the day and keep a close eye on belongings in public places. Most crime is of the opportunistic kind.\n"
      },
      "location": {
        "en-US": {
          "lon": -63.6166,
          "lat": -38.416
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2GYfrI0JF4ABdsZC7SIlE8"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "38LGZXaC3iiVX3mvl4GjTj",
      "type": "Entry",
      "createdAt": "2022-10-14T15:21:52.506Z",
      "updatedAt": "2022-10-18T10:00:08.184Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 25,
      "publishedAt": "2022-10-18T10:00:08.184Z",
      "firstPublishedAt": "2022-10-14T15:25:26.578Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 26,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Brazil"
      },
      "body": {
        "en-US": "Brazil seems to have its own rhythm – and that rhythm is samba. Music and dancing are important parts of the Brazilian lifestyle, and even form the basis of the capoeira martial arts routines. Pulsating cities, epitomised by Rio de Janeiro, love their sea and sunshine, but head towards the jungle to get a feel of the real Brazil.\n\nThe Amazon region is still best explored by boat – spot caiman, jaguars and anacondas, among countless other species.\n\nCarnaval is big in Brazil, especially in Salvador, São Paulo, Recife and Rio, but to get away from the crowds to more personal celebrations, opt to join the fun in Olinda with its eleven days of spontaneous parties all over the historic town.\n\nMany national parks, like Chapada dos Veadeiros with its cave systems and waterfalls, offer hiking trails and activities galore.\n\n### Recommendations\n\n1.     Join a capoeira class or watch it at one of the many schools, especially in Salvador – the rhythm of the dance-fight blend is infectious\n2.     Get wet in the spray of Iguassu Falls\n3.     Spot jaguar in the Pantanal, one of the world’s great wetlands\n4.     Escape Rio de Janeiro’s big Carnival crowds and join the impromptu celebrations in historic and arty Olinda just north of Recife\n5.     Hike the trails of Parque Nacional da Tijuca\n6.     Stroll among the cobbled streets and Portuguese colonial architecture of the historic trading city of Paraty\n\n### Tips\n\nTravel up the Amazon by boat from Belém to Manaus, then sling your hammock on one of the smaller boats plying the river’s many tributaries. The meeting of the waters – where the yellow Rio Solimões and the black Rio Negro form the Amazon – is worth a day trip.\n\n# Further Reading\n\nMoney in Brazil: Brazilian Real (BRL) You can use your credit card at most ATMs, but it is worth checking with your bank whether they have partners that let you withdraw for free. Between 10pm and 6am, you can only get BRL 60 at machines. Most shops take cards. It’s easier to exchange US dollars than travellers’ cheques.\nBrazil travel advice: Foreign & Commonwealth Office\nBrazil tourist board: Embratur\n\n### When to go to Brazil\n\nWhile the deep south of Brazil does get winters from June to September, they are usually fairly mild. The coastal climate is warm and tropical, and the rainy season lasts from October to January. The northeast is semi-arid, and temperatures can soar to 40?C, while Amazônia has rainforests and savannas with a rainy season from January to May. The best travel time depends on the region you’re going to, but high season is usually December to March.\n\n### International airports\n\nRio de Janeiro (GIG) and São Paulo Guarulhos (GRU) are the two main international airports, and good hubs to connect to domestic flights. A shuttle service runs between them.\n\n### Getting around Brazil\n\nIf you plan to fly a lot, get an air pass with your international ticket before you get to South America. Many Brazilian airlines operate flights throughout the country. The bus system is excellent, and some companies offer overnight travel between the major cities. The Rio-São Paulo shuttle leaves every 15 minutes. To get to more remote destinations, you might consider renting a car. Taxis operate in the cities and are generally cheap.\n\n### Brazil accommodation\n\nCamping is only advised on established campsites. Albergues da juventude are youth hostels offering dorms, while pousadas are family-run guesthouses which are run like B&Bs. Jungle lodges can be quite luxurious.\n\n### Brazil food & drink\n\nBrazil has five distinctive regional cuisines. Comida Mineira comes from Minas Gerais and largely consists of pork, vegetables and beans, while Comida Baiana from the Salvador coast uses an exotic mix of fish, shellfish, hot peppers, palm oil, coconuts and coriander. Comida do Sertão hails from the interior of the north-east and relies hugely on dried meat, fruit and beans, while and Comida Gaúcha is the most carnivorous – everything is chargrilled. Comida Amazônica is based on river fish and fruits. The national dish is feijoada, a pork stew with black beans and garlic.\n\n### Health & safety in Brazil\n\nA yellow fever vaccination is recommended if you’re heading to Amazônia, Goiás or Mato Grosso provinces. Malaria prophylaxis is essential in Amazônia. Water should always be bottled or purified and care should be taken when buying food from street vendors. Pick-pocketing is common – keep valuables hidden. Do not resist if you are involved in an mugging.\n"
      },
      "location": {
        "en-US": {
          "lon": -51.9252,
          "lat": -14.235
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "1ZbekZx4X8PpfgKGuMeMSJ"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5S30xmOu4vn2PIX5ASa3qT",
      "type": "Entry",
      "createdAt": "2022-10-14T15:25:54.799Z",
      "updatedAt": "2022-10-18T09:57:38.718Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 24,
      "publishedAt": "2022-10-18T09:57:38.718Z",
      "firstPublishedAt": "2022-10-14T15:28:49.793Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 25,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Chile"
      },
      "body": {
        "en-US": "Skinny Chile, squashed between the Pacific and the Andes, is one giant playground for outdoor enthusiasts. Its landscape embraces glacial wilderness and moonscapes, lakes and volcanoes, beaches, salt flats and the burnt colours of the desert. In one day you can scale a snow-capped mountain, soak off the exhaustion in a thermal bath and rest beneath the desert stars. Chile’s capital, Santiago, is a great place to see Chileans at play. The nearby port of Valparaíso shouldn’t be missed – a warren of narrow streets, brightly coloured houses perched perilously on steep hills and ageing bars frequented by sailors. In the north of Chile, San Pedro de Atacama is an unlikely oasis set among the geysers, volcanoes and salt flats of the world's driest desert. Heading south, forests, lakes and conical snow-capped volcanoes make up Chile's Lake District, with clear air perfect for hikes to small towns and villages topped by high-spired, clean-cut churches. The mysterious archipelago of Chiloé is the place to spot penguins and gorge on freshly dug oysters. In the far south lies the awe-inspiring Torres del Paine National Park, a Unesco Biosphere Reserve and Mecca for trekkers and wildlife enthusiasts. Throughout the year, the park offers constantly changing views of the glaciers, peaks and the iconic granite towers which overlook vividly coloured lakes and quiet green valleys filled with carpets of wild flowers.\n\n### Recommendations\n\n1.     Follow Pirates and Poets. The Unesco World Heritage site of Valparaiso is a colourful port town packed with history. If you wonder why no-one is swimming on the beaches, it's because the Humboldt Current is sweeping Antarctic waters up the coast\n2.     Meet a Moai. Easter Islands are part of Chile. Fly out to witness the giant stone statues gazing silently out to sea, the last echoes of a civilisation that vanished in the remote Pacific Ocean\n3.     Take a Trek. The Granite peaks of the Torres del Paine are amongst the most dramatic in the world. Chile shares Patagonia with neighbouring Argentina but keeps the most spectacular landscapes\n4.     Do a Desert. The world’s highest geyser field (El Tatio), and driest desert (the Atacama), are in Chile: watch bubbling mudfields and flamingos snacking on salt flats\n5.     Find a Fjord. Forget Norway. The fjords of Patagonia are far more dramatic, as the Andes finally subside beneath the waves. Take a cruise to explore a remote, unpopulated landscape of sheer, windswept beauty\n6.     Live for the Lakes. Chile's Lake District is a beautiful region of conical snow-capped volcanoes, deep emerald lakes, and spreading forests of fragrant pine: great for hikes and exploring by car\n7.     A Way with Wine. Chile's vintages are amongst the best in the world, and far less expensive than they deserve. Tour the small vineywards of the central wine-growing district: tasting opportunities abound\n\n### Tips\n\nDon’t call pisco a Peruvian drink – Chileans claim the hooch as its own. You can spot the world’s largest-ever creature, the blue whale, on a whalewatching trip from Punta Arenas.\n\n# Further Reading\n\n### When to go to Chile\n\nYou can explore Chile’s south anytime between November and April but unless you're there for the skiing avoid midwinter – some southern areas are almost impenetrable between June and September. The middle of Chile is best in spring (November to December) and autumn (March to April) while the desert in the north can be explored year round. The capital, Santiago, can be smoggy during the winter (June to September) but for picture-postcard views of the snow-capped Andes, the city is never better than after the winter rain.\n\n### International airports\n\nSantiago (SCL) 21 km from the city.\n\n### Getting around in Chile\n\nChile has an excellent long distance bus network with a fast and comfortable service between all major destinations. There are very few train services in Chile, aside from a newly modernised route between Santiago and Temuco in the south. Frequent domestic flights service the major towns. For cyclists and bikers, Chile is a joy, two wheels being a great way to access some of the more remote national parks. The Carretera Austral is a classic trip for pedal pushers.\n\n### Chile accommodation\n\nChile has accommodation to suit every pocket with plenty of hostels and guesthouses for budget travellers. Top-end hotels are often functional but rather uninspiring: for something different, try a rural homestay instead. Prices rocket from December to mid-March but it’s well worth asking for a discount out of high season. Chileans respond well to beaming smiles and polite requests. Camping is easy but bring gear with you – it’s expensive in Chile.\n\n### Chile food & drink\n\nMarket stalls groan under the weight of giant fruit and veg, steaks are almost as good as those in Argentina and everything can be washed down with world-class wines. Try paila marina, a stew crammed to bursting with shellfish, or cazuela de ave, a soupy chicken dish that keeps away the cold in the winter. Vegetarians should try humitas – delicious, filling corn tamales – or the divine porotos granados con mazamorra, a moreish bean, pumpkin and corn stew. Look out for Chilean brewed ales like the dark and fruity Austral Calafate, but beware of the pisco sour – this tart twist on the nation’s favourite drink produces a killer hangover. \n\n### Health & safety in Chile\n\nChile is prone to earthquakes and although buildings are constructed to withstand them and it’s very unlikely to happen while you’re there, make sure you know what to do if one hits. In San Pedro de Atacama and on higher peaks, altitude sickness can be a problem. Take it slow for the first few days and avoid alcohol. In summer months and in the desert, be sure to slap on plenty of sun cream and wear a hat if you’re going to be outside for long periods.\n"
      },
      "location": {
        "en-US": {
          "lon": -71.5429,
          "lat": -35.6751
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "7M11haKXVJmyAOFftHsxZr"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "17VPGCBSxFbKQrgKYAAi4Y",
      "type": "Entry",
      "createdAt": "2022-10-14T15:29:13.415Z",
      "updatedAt": "2022-10-18T09:56:26.736Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 11,
      "publishedAt": "2022-10-18T09:56:26.736Z",
      "firstPublishedAt": "2022-10-14T15:30:41.562Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 12,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Colombia"
      },
      "body": {
        "en-US": "With hidden archeological sites, a crystal clear Caribbean coast, cowboy culture, Andean peaks and verdant jungle, Colombia offers a contrast of travel experiences…\n\n### When to go to Colombia\n\nColombia’s dry season, or verano (summer) is December to March, with a second dry period mid-June to mid-August (except in the northern plains). These are the best times to visit and when most festivals take place. Temperatures are fairly constant year round, varying with altitude more than season.\n"
      },
      "location": {
        "en-US": {
          "lon": -74.2973,
          "lat": 4.570868
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "1psTPdZxxDxNtccwXnmRjx"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5eBpmoWwSyruzHsz9nEmdP",
      "type": "Entry",
      "createdAt": "2022-10-14T15:30:47.317Z",
      "updatedAt": "2022-10-18T09:55:32.715Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 27,
      "publishedAt": "2022-10-18T09:55:32.715Z",
      "firstPublishedAt": "2022-10-14T15:33:51.475Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 4,
      "version": 28,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Ecuador"
      },
      "body": {
        "en-US": "Small but perfectly formed, Ecuador might be one of the smaller countries in South America but it packs a whole lot of attractions into its dramatically beautiful landscapes.\n\nBordered by the Pacific to the west, Ecuador’s coastline offers sandy beaches, great surf and fascinating wildlife: watch whales and sea lions galore in Machalilla National Park. Once dangerous, the city of Guayaquil has been thoroughly gentrified, with pastel-coloured buildings and a host of new restaurants, and is a good starting point for drives up the coast. \n\nMoving inland in Ecuador you soon hit the Andes, where snow-topped peaks soar to over 6,000m. This is where you'll find the capital, Quito, a majestic colonial settlement with churches and cathedrals, threaded with little alleyways and dotted with Indian market stalls.\n\nSouth of Quito a line of volcanoes, many still active, run down the Andes past the hiking centre of Banos to the colonial city of Cuenca. North is the pretty little colonial town of Otovalo, with probably the best Indian market in South America. From here a network of trails thread past fields tacked onto impossibly steep slopes to reach remote mountain farming villages far off the grid.\n\nCross the Andes to the east and you're into the Oriente, Ecuador’s hunk of the Amazon basin. The Andes squeeze rain from the sky to feed a biodiversity hotspot, crawling with wildlife and dense, tropical growth. Indigenous tribes are now exerting direct control over this wild, remote region: stay at an ecolodge owned by the locals to learn the area's secrets.\n\nAnd that’s just the Ecuadorian mainland. Offshore, the Galápagos Islands, Darwin's 'Laboratory of Nature', offer close encounters with a natural world that has never learned to fear man. Explore the archipelago on live-aboard yachts to meet blue-footed boobies and swim with sealions.\n\n### Recommendations\n\n1.     Go Colonial in Quito. Explore Ecuador's capital, with its narrow alleyways and towering churches. The streets are always busy with Indian traders\n2.     Hope for a Hummingbird. The cloud forest at Mindo is a great place to see iridescent hummingbirds, their wings a blur as they feed on outsized tropical blooms\n3.     Early to Market. Otavalo market is best at dawn: stay overnight in town to catch it. The atmosphere spoils early as tourist coaches roll in. If you're around on a Thursday, nearby Saquisilí's market offers a more local experience\n4.     Swim with a Sealion. In the wildlife haven of the Galápagos Islands, 1,000km off the Ecuadorian mainland, animals have never learned to fear man. Curious birds, penguins and sealions come close\n5.     Vault a Volcano. Drive down the Avenue of the Volcanoes to gaze up at the snowy and still-active peaks, including the iconic cone of Cotopaxi, and end your journey at colonial Cuenca, a Unesco World Heritage site\n6.     Jive in the Jungle. An Amazon ecolodge, owned and run by indigenous Ecuadorian tribes, is the best place to meet birds, caiman, monkeys and other wildlife\n\n### Tips\n\nLearn a little Spanish – the Ecuadorians will appreciate it and it's a great help when travelling in more remote areas. Research your Galápagos trip before you book and decide what’s important to you. You may be able to get cheaper deals if you book a cruise locally but by that time the best boats are likely to be booked up, especially in the peak months.\n\n### When to go to Ecuador\n\nEcuador has several climatic zones, meaning it’s always the right time to be somewhere in the country. Ecuador’s capital Quito and the highlands have spring-like weather year round: warm days and cold nights, generally cooler and wetter from September to April. The Ecuadorian Amazon (or ‘Oriente’) is wet year round, though driest from December to March. The Ecuadorian coast is wet January-May and dry (but more overcast) June-December. The mountainous middle of Ecuador is driest June-September. The Galápagos Islands offer great wildlife-watching all year, though seas are choppier July-October. Semana Santa is enthusiastically celebrated at Easter throughout Ecuador.\n\n### Ecuador international airports\n\nMariscal Sucre International (UIO) 10km from Quito; José Joaquín de Olmedo International (GYE) 5km from Guayaquil\n\n### Getting around in Ecuador\n\nBus is one of the easiest ways to travel: these are cheap, frequent and serve most areas of Ecuador. Hiring a car is best if time is limited; all major rental agencies are represented in the big Ecuadorian cities. Train travel is an interesting sightseeing option: the Devil’s Nose is a hair-raising ride from Riobamba to Alausí along a series of gravity-defying switchbacks. Internal flights within Ecuador are useful for accessing remote lodges deep in the Amazon.\n\n### Ecuador accommodation\n\nAccommodation in Ecuador comes in all shapes and sizes, and is generally very good value – especially the mid-range small hotels. Most interesting are Ecuador’s converted haciendas, family ranches that have been converted to put up the odd traveller; many are extremely characterful and offer activities such as horse-riding and country walking. Ecuador also has many homestays where you can learn Spanish and get involved in the life of a local family; Otavalo is a good bet for these. There are some incredible Amazon rainforest lodges buried deep in the Ecuadorian Oriente, accessible only by boat or small plane. These will give you an immersive Amazon experience; look for places owned by local tribes. \n\n### Ecuador food & drink\n\nEcuador’s soups are excellent. Try locro de papas, made of potatoes with cheese and avocado. Llapingachos are tasty potato and cheese cakes; corn dishes, such as tamaleshumitas and , are also common – and good options for vegetarians travelling in Ecuador. Most meals do contain meat, however.  Roast cuy (guinea pig) is available in some places; roast pig is more popular, presumably because there's a lot more of it. Fresh seafood is widespread on the Ecuadorian coast. If on a budget, look for almuerzo (set lunches) but don't burp afterwards: it's considered very rude. Ecuadorian fruit juices are very good, and include moro, made from blackberries. Ecuador's national beer is Pilsener and decent wine is increasingly easy to get.\n\n### Health & safety in Ecuador\n\nOpportunistic theft is a risk. In Quito, take taxis at night, especially in La Mariscal area of the New Town. The altitude can take some adjusting to – Quito, entry point for most travellers arriving in Ecuador, is 2,850m. Take things slowly for the first couple of days and drink lots of water. Malaria is a risk, especially along the north coast and in the Ecuadorian Amazon region; seek advice on prophylaxis, take DEET-based insect repellent and cover up.\n\n### Further reading on travel in Ecuador\n\nEcuador and the Galapagos Islands (Rough Guides, 2010)\nEcuador and Galapagos (Insight Guides, 2010)\nEcuador & Galapagos Handbook (Footprint, 2009)\nEcuador and the Galapagos Islands (Lonely Planet, 2009)\n"
      },
      "location": {
        "en-US": {
          "lon": -78.1834,
          "lat": -1.83123
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "HrTCQBedv2Hkw840mcg6O"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6Ht8ouu7urn4B7xdlAYZKn",
      "type": "Entry",
      "createdAt": "2022-10-14T15:34:02.026Z",
      "updatedAt": "2022-10-18T09:52:26.646Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 29,
      "publishedAt": "2022-10-18T09:52:26.646Z",
      "firstPublishedAt": "2022-10-14T15:37:13.252Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 30,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Guatemala"
      },
      "body": {
        "en-US": "Guatemala, birthplace of the Maya, is a land of kaleidoscopic colours.\n\nThe red lava tongues of Guatemala’s volcanoes contrast with the shadows of the caves in the southern Petén region and the thick lush jungles of the north – home to howler monkeys and rare scarlet macaws.\n\nFurther south, blankets of white sand coat the Caribbean Coast near Lívingston, while on the black-sand Pacific Coast, turtles and fabulous orange sunsets can be found at Monterrico.\n\nAntigua, a cultural sideshow to Guatemala City, lies in the shadow of three volcanoes. Its cobbled streets are lined with pastel-coloured homes, toppled church arches, columned courtyards, flowers and fountains galore.\n\nAlso on everyone’s must see list in Guatemala is Tikal, the majestic Mayan city buried deep in the jungle.\n\n### Recommendations\n\n1.     Trek to the greatest city of the ancient Maya, buried deep in the jungle – El Mirador\n2.     Freewheel through the Guatemalan highlands and wander along the shores of beautiful Lake Atitlan\n3.     Fly a kite in Santiago Sacatepéquez\n4.     Hire a local guide in Antigua: you’ll discover rooftops and private areas you might otherwise miss\n5.     Take a boat cruise along Río Dulce through dramatic jungle-covered gorges and inlets carpeted with water lilies\n\n### Tips\n\nIf you’re in Guatemala in November head to Todos Santos Cuchumatán for three days of drinking, dancing and a wild all-day horse race.\n\nIf you arrive by bus into Guatemala City, get a cab to your hostel: it’s a notoriously dangerous area, especially at night.\n\n### I wish I'd known...\n\nWanderlust web intern Thomas Rees on the thing he wished he'd known before he arrived:\n\n\"Brush up on Tz'utujil. Many of the older inhabitants of the Mayan villages scattered along the shores of Lake Atitlan don't speak any Spanish which can make for a few awkward silences!”\n\n# Further Reading\n### Travel in Guatemala: vital stats\n\nCapital of Guatemala: Guatemala City\nPopulation of Guatemala: 14 million\nLanguages in Guatemala: Spanish; Maya dialects\nTime in Guatemala: GMT-6\nInternational dialling code in Guatemala: +502\nVoltage in Guatemala: 115-125V 60Hz AC\nVisas for Guatemala: Guatemala visas\nMoney in Guatemala: Quetzal (Q). US dollars are widely accepted, although you’ll need local currency, too. Credit and debit cards can be used at ATMs but aren’t widely accepted outside tourist areas.\nGuatemala travel advice: Foreign & Commonwealth Office\nGuatemala tourist board: Inguat\n\n### When to go to Guatemala\n\nThe climate in Guatemala varies according to altitude, but the driest time is November-April. The coast is, by and large, hot all year round. The highlands have pleasantly warm days and cool nights. In December and January, there may be frost in the early morning at the highest elevations.\n\n### International airport\n\nLa Aurora (GUA) is 4km from Guatemala City.\n\n### Getting around in Guatemala\n\nTourist shuttle buses, taxis or private car and driver are the best ways of getting around. From Guatemala City airport to Antigua (45km) get a bus or taxi.\n\nAs far as public transport goes, you’ll have to rely on the local or ‘chicken’ buses; they are inexpensive and dilapidated but offer a chance to meet ordinary Guatemalans. Poor roads make car hire challenging.  \n\n### Guatemala accommodation\n\nGuatemala has everything from luxury hotels to cosy B&Bs and bargain basement crash pads. Travellers on a budget will find it a joy: clean doubles and hostel dorms are easy to find everywhere except Guatemala City. At the top end, there are some fine colonial hotels, especially in Antigua. There are hardly any campsites in Guatemala.  \n\n### Guatemala food and drink\n\nGuatemalan food is hearty and filling: corn tortillas are a staple and – served with refried beans, eggs, sour cream, plantain and strong coffee – make a traditional breakfast.\n\nPopular dishes include pepián, a chilli-infused stew made with meat and sometimes chocolate; chiles rellenos, chillies stuffed with vegetables and meat; and tamales, steamed cornmeal stuffed with chicken or meat.\n\nGuatemalans have a sweet tooth: try mole de platano, plantain doused in a chocolate sauce. Gallo, the local beer, rum and aguardiente, a potent sugar cane spirit, are all cheap and popular.\n\nVegetarians are well catered for but check that beans haven’t been fried in lard (manteca/grasa de cerdo).\n\n### Health and safety in Guatemala\n\nAlthough most visitors experience a trouble-free visit, crime is a serious issue in Guatemala. Take precautions: register with your embassy, don’t flash cash or jewellery, take registered taxis at night and steer clear of known trouble spots (Guatemala City after dark, and some trails around Lake Atitlán).\n\nHighway robbery and robbery along hiking trails are risks. Don't flaunt valuables; distribute money etc around your bags/person; carry only what you need, keeping other belongings locked in hotel safes. Be up to date on key vaccinations. Take malaria tablets. Steer clear of tap water.\n"
      },
      "location": {
        "en-US": {
          "lon": -90.2307,
          "lat": 15.78347
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4vYxl7LE3r5ubioDVHTNDf"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1sUVx2FkGGJ3KLoH1c4RFf",
      "type": "Entry",
      "createdAt": "2022-10-14T15:37:20.480Z",
      "updatedAt": "2022-10-18T09:50:56.240Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 21,
      "publishedAt": "2022-10-18T09:50:56.240Z",
      "firstPublishedAt": "2022-10-14T15:40:10.953Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 22,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Mexico"
      },
      "body": {
        "en-US": "Mexico travel guide, including map of Mexico, top Mexican travel experiences, tips for travel in Mexico, plus where to see whales and Mayan ruins in Mexico\n\nFrom the vivid wall paintings at Bonampak to the mighty temples of Chichén Itzá, the sheer variety of archaeological sites in Mexico is astounding. Add to this the brilliance of the Caribbean Sea, huge canyons and dense jungles and you have an invigorating cocktail of culture and landscapes.\n\nCongested, polluted and gloriously manic, Mexico City was originally founded by the Aztecs. Beyond the capital, the pace slows. Colonial cities, founded on the wealth of silver mines, rest assuredly on their architectural laurels. Within easy striking distance of Mexico City, the mountains and desert plains of Querétaro are another world:  people quietly go about their business as they always have, farming and producing crafts for sale at the local markets.\n\nThe city of Oaxaca is the jewel in Mexico's gastronomic crown, home to colourful markets and a wide array of restaurants and street stalls serving regional specialties such mole amarillo and empanadas stuffed with courgette flowers and molten quesillo (a mozzarella-like cheese). Sign up for one of the cookery courses and market tours offered by many restaurants around town.\n\nAdventurers flock to Mexico to climb the volcanic peaks, to descend into the deepest cenotes or to spill down the white waters of the Antigua and Pescado rivers. The Caribbean offers superb diving off the Quintana Roo coastline, while on the west coast surfers ride the giant rollers beside the beautiful beaches of the wild Pacific and Baja California. In the far north-west, the Sea of Cortéz is one of the planet’s richest marine feeding grounds – where, if you’re lucky, you’ll spot hammerhead sharks, dolphins and California grey whales.\n\n### Wanderlust recommends\n\n1.     Take the vertigo-inducing train ride from the deserts of Baja California through the gorges of the plunging Copper Canyon\n2.     Go whale-watching in Baja California – and swim with the world’s biggest fish, the whale shark\n3.     Explore the jungle-clad ruins of Palenque and the mighty pyramid of Chichén Itzá\n4.     Treat yourself to fine jewellery from the silver merchants of Taxco, or arts and crafts in Oaxaca or San Cristóbal de las Casas\n5.     Visit Xochimilco’s floating gardens on a Sunday morning and join the locals for a mariachi-led punt through a maze of canals\n6.     Come eyeball to eyeball with a great white shark in Guadalupe\n7.     Head to Santiago, north of Los Cabos and ask the locals how to get to Sol del Mayo, a 12m waterfall with a magnificent wate hole\n8.     Stroll through the Mayan ruins of Tulum, overlooking a stunning stretch of the Caribbean\n\n### Wanderlust tips\n\nTime your visit for the Night of the Radishes (23 December), a Oaxacan festival with ornate sculptures carved from radishes, or Carnival and Semana Santa (Holy Week), celebrated throughout the country with much colour and partying. When riding the Copper Canyon Railway, for the best views, sit on the right-hand side of the carriage to Creel and on the left to Los Mochis.\n\nMuch of Mexico is safe for tourists but some states, particular those along the border with the USA, experience high levels of gang-related violence and should be avoided. The situation can change relatively quickly so be sure to keep a close eye on FCO warnings and to check with locals.\n\n### I wish I'd known...\n\nWanderlust web intern Thomas Rees on the thing he wished he'd known before he arrived:\n\n\"Bring a big rucksack. There are some magnificent finds to be had in the markets of Oaxaca. It's hard to resist!” \n\n# Further Reading\n### Travel in Mexico: vital stats\n\n    Capital of Mexico: Mexico City\n    Population of Mexico: 115 million\n    Languages in Mexico: Spanish; indigenous languages\n    Time in Mexico: Mostly GMT-6 (GMT-5 early April-late October); some western states GMT-7/GMT-8\n    International dialling code for Mexico: +52\n    Voltage in Mexico: 127V 60Hz AC\n    Visas for Mexico: Mexican visas\n    Money in Mexico: Mexican peso (M$). Credit cards and travellers cheques are widely accepted.\n    Mexico travel advice: Foreign & Commonwealth Office\n    Mexico tourism board: Mexico Tourism Board\n\n### When to go to Mexico\n\nYou can visit at almost any time of year. The driest season is from mid-December to April, though July and August are the peak holiday times for international visitors. The highlands of the interior can be quite chilly at night. Hurricane season runs roughly from June to October/November.\n\n### International airports\n\nBenito Juárez Airport (MEX) is 13km from Mexico City; Cancun Airport (CUN) is 14km fromthe city.\n\n### Getting around in Mexico\n\nLuxury inter-city coaches and simple buses use Mexico’s good road network. Hiring a car is possible but be warned: traffic is a nightmare. Ferries connect Baja California with mainland Mexico. Trains are restricted to a couple of tourist servces. Internal flights are useful if covering long distances. The Mexipass airpass is good if you want to visit several places in a short amount of time; book before arriving in Mexico.\n\n### Mexico accommodation\n\nAcross Mexico, finding a room is usually only a problem in coastal resorts during peak season and anywhere at fiesta time. For budget travellers, hostels are ten a penny, apart from in areas such as Cancún where luxury resort hotels with private beaches rule the roost. There are few official campsites. Hotels should have an official price displaced outside.\n\n### Mexico food & drink\n\nYou really should prepare your stomach for a trip to Mexico; the food is so fabulous you’ll struggle to leave the table. A world away from the fare on offer in ‘Mexican’ restaurants outside the country, food in Mexico varies from region to region. Wherever you go, expect to come across lovingly prepared dishes based on corn, tortillas, chilli and beans. Try mole poblano, a thick sauce of chocolate, chillies and nuts usually served with chicken. In the Yucatán, look for cochinita pibil, a tasty dish of pork marinated in spices and garlic, and the scarily hot chilli pepper habanero. No trip to central Mexico is complete without a few glasses of tequila, while only the brave will be tempted by the chapulines in Oaxaca – crispy grasshoppers fried in chilli and lime. Vegetarians should note that many Mexicans think vegetarianism means eating no red meat: make sure that the ‘vegetarian’ special doesn’t feature fish or chicken.\n\n### Health & safety in Mexico\n\nEase your way into the pleasures of Mexican cuisine – bacteria in the food can cause problems for sensitive stomachs. Go for freshly cooked food and steer clear of salads, unpeeled fruit and raw seafood for at least the first few days.\n\nMexico does have some alarming statistics when it comes to crime but if you keep your wits about you and take sensible precautions, you should be fine. Petty theft and pick-pocketing are the biggest problem, especially in cities. Don’t hail cabs or take taxis parked outside nightclubs or restaurants in Mexico City; instead, phone a taxi service (sitio).\n"
      },
      "location": {
        "en-US": {
          "lon": -102.552,
          "lat": 23.6345
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "31WC1z1n3zpNtVFmHt1AsH"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5cHFo3khcoqyXU78OrYxYJ",
      "type": "Entry",
      "createdAt": "2022-10-14T15:40:20.020Z",
      "updatedAt": "2022-10-18T09:53:59.765Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 30,
      "publishedAt": "2022-10-18T09:53:59.765Z",
      "firstPublishedAt": "2022-10-14T15:43:34.417Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 31,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Peru"
      },
      "body": {
        "en-US": "Everyone knows about Machu Picchu, the myth and mist shrouded Inca citadel, but don't let it outshine the rest of the country. Peru has more archaeological sites than any other country in South America, and its vast, green carpet of jungle is home to the greatest diversity of plants and wildlife on the planet.\n\nThere's more. Peru is the birthplace of surfing on Pacific waves, its rivers offer the scariest white-water rafting anywhere, and much of the Peruvian Andes, even now, are scarcely explored.\n\nIf you only visit one city, it has to be Cusco. High in the Andes it's one of the most fascinating cities in the world. Colonial buildings have been built on Inca walls, there are Inca ruins on every side and the streets are filled with local mountain people, still clad in traditional dress.\n\nPeru’s best-known archaeological site, Machu Picchu, is the main attraction for visitors, and rightly so. Set your alarm and get up early to beat the crowds and watch the sun rise over the mountains and fill the citadel with light.\n\nDon't overlook the other Andean attactions. The Colca Canyon is one of the world's most spectacular, a natural rift to rival any in the world but made even more enchanting by condors soaring the thermals above local women tilling the fields in bowler hats.\n\nHead west and the Andes drop down to sultry flatlands stretching out to the Pacific. This is where you'll find the Nasca Lines written on the desert floor and the capital city, Lima. Go north to the elegant Trujillo, on Peru’s northern coast, and find Chan Chan, the largest adobe city in the world.\n\nIn the Cordillera Blanca, deep in the northern Andes, is the architectural splendour of the 2,500-year-old fortress temple of Chavín de Huántar. The surrounding peaks offer some of the best hiking, white-water rafting, mountaineering and mountain biking on the continent.\n\nEast of the Andes the Peruvian Amazon is the most diverse and naturally rich of the entire Amazon Delta. Eco-lodges run by indigenous communities personalise your understanding and introduce the aminals of the region. The gateway town is Iquitos, the only place in Peru where you can see pink river dolphins in the morning and experience the bustle of a frenetic Amazon port in the afternoon.\n\n### Recommendations\n\n1.     Hike the Inca Trail. This unforgettable four-day walk is one of the world's greatest, using stone Inca stairways to pass deserted villages and fields terraced onto sheer Andean slopes. Numbers are limited: if you're too late to book a place try the most popular alternative, the Choquequirao Trail\n2.     Go to Market. Weekly markets rotate around the villages of the Urubamba Valley, bringing traditional India communities down from their remote mountain homes. Haggle over handicrafts and buy a guinea pig for the pot\n3.     Do a Darwin. The Peruvian part of the Amazon jungle is possibly the most diverse and prolific section of all. Meet caiman and paddle canoes along tranquil waterways, lulled by the all-encompassing 'symphony of green'\n4.     Live the High Life. Ride the rails across the Altiplano on the Tren de la Sierra to vast Lake Titicaca, the highest navigable lake in the world. Uros villagers still live on floating reed rafts here, but more stable homestays can be found on nearby islands\n5.     Read the Nazca Lines. Enigmatic and mysterious, the figures of people and animals etched into the desert dust have long mystified the experts. Karl Sagan reckoned they were written by spacemen: overfly the site and make up your own mind\n6.     Climb every Mountain. The snow-clad peaks of the Cordillera Huayhuash present some of the most challenging - and remote - mountaineering experiences in the world. The trek to a base camp is quite enough for most\n7.     Surf's Up. It is said that the art of surfing was born in the Pacific rollers that pound Peru's northern coast. Certainly the local fishermen are pretty handy with their canoes of bundled reeds. Pick up a paddle or borrow a board to dispel the tropical heat\n\n### Tips\n\nFind Peru without the tourists by heading north: few visitors stray far from the Pan-American Highway 'Gringo Trail' and you won't have to trek far to be alone with the Peruvians.\n\n### I wish I'd known...\n\nWanderlust web intern Thomas Rees on the thing he wished he'd known before he arrived:\n\n\"Try cuy (roast guinea pig) in Ayacucho. It's a speciality in the city and is much cheaper here than in popular Cusco where prices are inflated for tourists. The markets of Ayacucho are also a great place to buy handicrafts and textiles.\"\n\n\"Watch out for pickpockets in the pedestrianised areas of central of Lima. It's worth wearing your backpack on the front on busier streets. A small padlock for the zips would also be a wise investment and will give you peace of mind.\"\n\n\"If you have your heart set on visiting Machu Picchu but don't have time for a trek, be sure to investigate local trains from Cusco to Aguas Calientes. They take longer than the tourist train but are a fraction of the price.”\n\n# Further Reading\n### Travel in Peru: vital stats\n\nCapital of Peru: Lima\nPopulation of Peru: 29.5 million\nLanguages in Peru: Spanish, Quechua, Aymara\nTime in Peru: GMT-5\nInternational dialing code for Peru: +51\nVoltage in Peru: 220V 60Hz AC\nVisas for Peru: Peru visas\nMoney in Peru: Nuevo Sol (S). US dollars are about the only thing accepted by currency exchanges. ATMs are common. Be on the lookout for fake notes and don’t leave a shop, bank or money exchange without checking each note carefully.\nPeru travel advice: Foreign & Commowealth Office\nPeru tourist board: PromPerú\n\n### When to go to Peru\n\nThe sierra and the jungle are hot and dry from April to October; here, November to April is the wet season. The opposite is true for the coast, where it’s hot and dry from December to April, with cooler conditions May to November. June to September are the best months for trekkers.\n\n### International airport\n\nLima Airport (LIM) is 10km from the city. There are no direct flights to Peru from the UK. You can fly from London to Lima via Madrid with Iberia, AirEuropa and LAN or via main US hubs with several American carriers. Flight time is approximately 18 hours; return fares start from £600.\n\n### Getting around in Peru\n\nBus services on paved roads are generally good. Many small towns are served by combis (minibuses or share taxis known as colectivos) on journeys of up to three hours, leaving when the vehicle is full. Trains connect Cusco to Machu Picchu and Puno on Lake Titicaca, and the high altitude Ferrocarril Central Andino runs between Lima and Huancayo between April and October. Domestic flights in Peru are an option but services come and go, and are frequently cancelled at the last minute. Driving and cycling can be a hassle thanks to poor road conditions and speeding drivers.\n\n### Peru accommodation\n\nPlaces to stay vary from top-class hotels in Lima, Cusco and other tourist hubs, to smaller, family-run hospedajes and pensiones. There are few campsites or B&Bs.\n\n### Peru food & drink\n\nPeru rightly holds the crown for the gastronomic capital of South America, with innovative fusion cooking, often incorporating Andean ingredients and recovered recipes. Seafood dishes dominate on the coast, with delicious ceviche (raw fish marinated in citrus juice, onion and hot peppers) the national dish. Highland cooking is largely based on corn and potatoes – try papa a la huancaína (potatoes topped with a spicy sauce) or tamales (boiled corn dumplings filled with meat and wrapped in a banana leaf). Pet lovers should avoid cuy (guinea pig) which is popular throughout Peru. Vegetarians won’t have too many problems, especially in Lima, Arequipa and Cusco.\n\n### Health & safety in Peru\n\nVisit your GP or travel health clinic well before departure to check that your jabs are up-to-date and whether you’ll need malaria prophylaxis. Bring your yellow fever inoculation certificate to Peru. Wear DEET repellent to ward off mosquitoes. Protection from the sun is essential. Altitude sickness is a risk in the mountains, even for visitors to Cusco – try to acclimatise slowly. Drink bottled or purified water. The main places to guard against opportunistic crime are bus stations, unlicensed cabs, markets and when leaving clubs.\n"
      },
      "location": {
        "en-US": {
          "lon": -75.0151,
          "lat": -9.18996
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "35RCUDm1KqHOzQOvuNvDvu"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
        {
          "sys": {
            "type": "Link",
            "linkType": "Tag",
            "id": "southAmerica"
          }
        }
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "24UrY9chvxpDOZZu6t0tVE",
      "type": "Entry",
      "createdAt": "2022-10-14T15:43:46.849Z",
      "updatedAt": "2022-10-18T10:00:54.867Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 19,
      "publishedAt": "2022-10-18T10:00:54.867Z",
      "firstPublishedAt": "2022-10-14T15:46:15.397Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 20,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Venezuela"
      },
      "body": {
        "en-US": "With more beauty queens than anywhere else and the highest waterfall in the world, Venezuela sure is easy on the eye. Christopher Columbus described the south-east of the country as “paradise on earth”.\n\nVenezuela offers amazingly diverse experiences, from delving into the Amazon rainforest to taking a dip in the gently lapping Caribbean sea. In the west is Los Llanos, the great plain where local flora and fauna – such as scarlet ibis and Orinoco crocodile – share their territory with cattle and llanero cowboys.\n\nFurther west, at Mérida, you can be whisked off your feet by the highest cable car in the world as it glides up through the mist-swirled peaks of the Andes. Pull on your hiking boots and march out onto the grassy trails of the páramo and the highland pastures studded with wild flowers.\n\nIn the east, where Venezuela meets Brazil and Guyana, the Gran Sabana – watered by the mighty cascade of Angel Falls – soars to the flat-topped tepui, including Roraima, the 'lost world'. \n\nA stop on your Venezuelan itinerary should certainly be Mochima National Park on the coast, where you can hire a boat and chug round the clusters of islands until you find a deserted cove where you can drop anchor and spend a day padding across your own beach. Or perhaps head to the spectacular Los Roques archipelago, with miles of pristine white-sand beaches and crystal-clear water.\n\n# Further Reading\n\n### When to go to Venezuela\n\nVenezuela is generally considered to be a year-round destination. The dry season (December to April) is more pleasant for travelling but the mighty waterfalls in the Gran Sabana of the south-east look more impressive during the wet season.\n\n### International airport\n\nSimon Bolivar International Airport (CCS) is 27km from Caracas\n\n### Getting around in Venezuela\n\nMost Venezuelans use buses to get around and services between major centres are regular and cheap. Go for servicio ejecutivo or bus-cama for extra comfort. Shorter distances are covered by large cars known as por puestos, carros or carritos which ply a fixed route and leave when full. Renting a car (and filling it with petrol) is cheap in Venezuela but driving standards are poor. Several airlines offer domestic flights. Venezuela is not a good place for cyclists.\n\n### Venezuela accommodation\n\nVenezuela isn’t short of accommodation but there are almost no hostels or organised campsites. Posadas (family-run guesthouses) are a good bet if you’re on a budget as many of the cheaper hotels rent out rooms by the hour. At the top end, Caracas and Isla de Margarita have the most options. Note that walk-in prices are usually cheaper than those online. Only the most expensive hotels accept credit cards.\n\n### Venezuela food & drink\n\nArepas are a national favourite – dense disks of white maize flour that come baked or fried with a variety of fillings and sit heavy on the stomach. Pabellon criollo is a robust plate of shredded beef, often accompanied by plantanos (cooking bananas), caraotas negras (black beans) and rice. Orinoco river fish are a delicacy, but best enjoyed close to the source. Coffee drinking is an art form; a zingy negrito (espresso) will kick start your day, but ask for it ‘sin azucar’ (without sugar) if you don’t share the nation’s sweet tooth.\n\n### Health & safety in Venezuela\n\nCheck with your GP or local travel clinic about vaccinations and malaria prevention. Yellow fever and dengue fever are a risk. Crime is a problem in Caracas: try and leave your money and valuables somewhere safe before walking the streets. Venezuelans go a bit Wacky Races behind the wheel so take extra care when crossing the road and never assume that drivers are going to stop.\n\n### Our recommendations for travelling in Venezuela\n\n1.     Climb the tepui (flat-topped mountain) Roraima for stunning views from a ‘lost world’\n2.     Head upriver and overland in Venezuela to the highest waterfall in the world: Angel Falls\n3.     Swim with turtles in beautiful Caribbean archipelago Los Roques\n4.     Relax with some pampering massages between shopping trips and beach visits on Margarita Island\n5.     Pick up some Chocolates El Rey: they will change your perception of chocolate forever\n6.     Explore Los Llanos, watching out for giant anteaters lumbering across the savannah\n"
      },
      "location": {
        "en-US": {
          "lon": -66.5897,
          "lat": 6.42375
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "62cfEAYlGEfuFkZ6SPiOWr"
          }
        }
      },
      "travelSeason": {
        "en-US": true
      },
      "rating": {
        "en-US": 5
      },
      "travelRegion": {
        "en-US": "Latin America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5YniUNbQCUSGVUQOdEh0WB",
      "type": "Entry",
      "createdAt": "2022-10-15T18:01:26.397Z",
      "updatedAt": "2022-10-18T10:07:59.221Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 26,
      "publishedAt": "2022-10-18T10:07:59.221Z",
      "firstPublishedAt": "2022-10-15T18:07:55.170Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 27,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Hungary"
      },
      "body": {
        "en-US": "This oft-overlooked country lies at the heart of central Europe.\n\nIts capital Budapest – all fairytale turrets, spas and hip nightlife – has the romance of Prague with a little more edge. Rapid redevelopment is giving it a tourist-friendly facelift but the shiny new eateries are juxtaposed with Jewish cemeteries, bullet-studded buildings and clapped out Trabants, a reminder of a rich and fascinating history.\n\nOutside the capital you will find pretty towns brimming with baroque, neoclassical and art nouveau architecture and a rural landscape of rivers, thatched houses and castles. Whatever takes your fancy, be it hiking, horse riding, mountain biking or bird watching, the Hungarian countryside will oblige.\n\n## Recommendations\n\n1. Soothe your limbs in one of Budapest’s piping hot thermal spas. Simply sit and daydream or give your grey matter a workout with a game of floating chess. \\  \n2. Visit Sopron, an alluring medieval city with great architecture, wine cellars and access to the Lövér Hills. \\\n3. Step back in time at the World Heritage Sight of Hollókö in the Cserháat Hills. This museum village of traditional dwellings overlooked by a castle gives an absorbing insight into the village life and folk traditions of a bygone era. \\\n4. Get back to nature on The Great Plain. The romanticised region features ramshackle farms, wandering shepherds, horse riding and birds galore – every autumn over 10,000 cranes make their grand entrance, a sight guaranteed to make a budding ornithologist out of anyone. \\\n5. Dangle your toes in Lake Balaton, the largest lake in central Europe. This aquatic playground is the perfect spot for a refreshing summer swim, not to mention a host of watersports. \n\n## When to go to Hungary\n\nThe south has a temperate, Mediterranean climate whereas further north you’ll encounter chillier climes. Summers are usually scorchers (by European standards).\n\nHit the country in July or August and you could be reveling in temperatures of around 26ºC. Unfortunately everyone else has the same idea so don’t head for the big resorts if you value tranquility.\n\nIn August life comes to a screeching halt. Winters are cold, damp and windy and many attractions close their doors to the public. Christmas, when the markets are in full swing and the mulled wine is flowing has a special kind of magic.\n\nSpring and autumn see more rainfall but they showcase the countryside at its very best.  \n\n## International airport\n\nBudapest Ferihegy (GUD), 16km from Budapest.\n\n## Getting around in Hungary\n\nAs in many European cities, public transport is good. The trains are a little tired but efficient nevertheless.\n\nThe buses are comfy and allow you to access places the trains don’t reach. In fact, in parts of the Great Plain and southern Transdanubia you may need to rely heavily on the bus network.\n\nMost roads are good and if you hire a car you can get to Hungary’s farthest crevices in about five or six hours.\n\nThere are 2,000 km of cycle paths around the country although cycling on motorways and major roads is illegal. There is a daily hydrofoil ferry service between Budapest and places along the Danube Bend at weekends throughout peak season. \n\n## Hungary accommodation\n\nThere is a proliferation of places to stay, namely hotels, pensions or inns (some resembling hotels, others like guesthouses) and private apartments.\n\nA private room in a house could be the way to go if you want long term accommodation or would like to experience life in Hungary from the inside out.\n\nIf you’re travelling on a shoestring hostels are cheap and inexpensive college rooms can be rented outside term time.\n\nCampsites are another budget option. Wild camping is illegal but campsites open between April/May and September/October. These range from all singing, all dancing sites complete with swimming pools and other frills to patches of scrubland with little in the way of facilities.\n\n## Hungary food & drink\n\nYep, you guessed it, Hungarian fare consists largely of hearty stews and dumplings. Paprika is big news so keep a glass of water to hand as you gulp down some of Europe’s spiciest native dishes.\n\nThanks to the nomadic Magyar people and their dependence on livestock, meat is the backbone of Hungarian cuisine.\n\nYou’ll find it in various guises: goulash (stew), paprikas (meat stew in paprika gravy), Hungarian sausage and fatanyeros (mixed grill). Pancakes are popular and there is a mind boggling array of soups on offer; options include steaming cheese soup or cold fruit soup. Hungarian wine has been brewed for centuries – don’t leave without sampling some.     \n\n## Health & safety in Hungary\n\nAs in any major city there is a risk of street crime. Particular care should be taken to avoid theft on overnight trains.\n\nSome of Budapest’s bars and restaurants have been known to fleece tourists, with visitors sometimes being charged hiked up prices and then accompanied to ATMs by security guards to withdraw the cash. Be wary of pretty consumption girls who work with bars and clubs to extract money from unsuspecting men.\n\nThe tap water has higher than advisable levels of arsenic so you’re better off sticking to the bottled variety. The lakes are mosquito magnets so you will need to apply generous amounts of insect repellent.\n"
      },
      "location": {
        "en-US": {
          "lon": 19.5033,
          "lat": 47.16249
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6yY5tE7SrHMyZJtkrZaDge"
          }
        }
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6IRr0LOloa64j4z6wRXKGW",
      "type": "Entry",
      "createdAt": "2022-10-15T18:25:46.991Z",
      "updatedAt": "2022-10-18T10:05:22.070Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 41,
      "publishedAt": "2022-10-18T10:05:22.070Z",
      "firstPublishedAt": "2022-10-15T18:38:16.650Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 2,
      "version": 42,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Denmark"
      },
      "body": {
        "en-US": "Denmark has been voted as one of the happiest places to live, and it’s easy to see why – with serene coastal hideaways and historic towns, Denmark has a cultural beauty unaffected by age.\n\nStep back in time at the ancient Viking fort at Hobro, and watch the extravagant Viking plays at Frederikssund.\n\nIn Copenhagen, visit the oldest monarchy in the world in style at the Royal Reception Rooms, or take in the city’s museums, jazz concerts and designer shops.\n\nOut in the countryside, see the scenery from a different perspective, by canoe down the Gudenå river, or go snorkelling in the Kerteminde Fjord.\n\nIf you’re on a family break, Denmark is well catered for children, with many theme parks including a Legoland, or visit the birthplace of fairytale creator Hans Christian Anderson in Odense.\n\n## Recommendations\n\n1. Be a part of Europe’s biggest music festival at Roskilde \\\n2. Explore the Viking fortress at Hobro \\\n3. Be entertained at the summer Viking plays in Frederikssund \\\n4. Discover Denmark by canoe down the Gudenå river \\\n5. Stroll along the beaches and dunes of Læsø \\\n\n## Tips\n\nCar rental in Denmark can cost as much for a day as, it can for a week, in neighbouring Germany – if you’re staying near the border, hire a car in Germany first before driving it over.\nFurther Reading\n\nTravel in Denmark: vital statistics\n\n## When to go to Denmark\n\nDenmark is the mildest of the Scandinavian countries, with a steady climate throughout, although coastal areas are prone to heavy winds.\n\nThe winter can be severe, so the best time to go is during the warmer months from April-October, especially during July and August when the larger festivals are on and the tourism trade is at its peak.\n\n## International airports\n\nCopenhagen International Airport (CPH) is 8km southeast of Copenhagen. Aarhus Airport (AAR) is 35km north of Aarhus.\n\n## Getting around in Denmark\n\nDenmark has a very reliable rail network with services operating at least hourly.\n\nThe road system is good and well signposted, however rental cars can be expensive.\n\nYou can get a taxi both by waving and by phone booking.\n\nCyclists are well catered for and bike hire is easily available.\n\nDomestic air services are limited, however there are frequent carriers between Copenhagen and some of the further areas.\n\n## Denmark accommodation\n\nAccommodation can be found in hotels and hostels, as well as rental accommodation in the resort areas.\n\nBoth home-stays and farm stays are available for a cheaper stay.\n\nCamping is also a possibility, but is restricted to established camping grounds.\n\n## Denmark food & drink\n\nMeat is a big part of the Danish meal, both hot and cold.\n\nSmørrrebrød is available from most vendors and cafes and consists of rye bread topped with different meats.\n\nThe familiar Danish pastry is known here as wienerbrød.\n\nAlcohol is commonplace and Denmark is home to a number of breweries. A wide range of continental cuisine is also available.\n\n## Health & safety in Denmark\n\nIt is unlikely you would need to take any vaccinations before travel, although always check with a GP or health clinic. Healthcare is widely available and EU citizens are covered by insurance with an E111 form.\n\nDenmark has relatively little crime but take care in larger cities, as they are not without petty criminals."
      },
      "location": {
        "en-US": {
          "lon": 9.501785,
          "lat": 56.26392
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "7hRcakB67MATd9p0nAZACn"
          }
        }
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6TzSCeI3UkcYcvkJWLndWY",
      "type": "Entry",
      "createdAt": "2022-10-15T18:39:43.125Z",
      "updatedAt": "2022-10-18T10:04:56.378Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 33,
      "publishedAt": "2022-10-18T10:04:56.378Z",
      "firstPublishedAt": "2022-10-15T18:45:57.699Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 2,
      "version": 34,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Germany"
      },
      "body": {
        "en-US": "Aside from beer, lederhosen and other stereotypical images associated with Germany, Bavaria offers a wealth of beautiful scenery from crystal-clear lakes to dramatic Alpine peaks – get an eyeful of the Zugspitze, at 2,962m Germany’s tallest peak. Here, hikers, canoeists, paragliders and other adventurers are well-catered for.\n\nAnd after a busy day they can relax in one of the region’s many spas. For a gentler pace, head to the Black Forest for leisurely cycles and strolls or take a cruise down the Rhine past postcard-pretty towns and vineyard-covered hills.\n\nThen there are the cities – Berlin stands out, with its mix of grand culture and gritty recent history, plus buzzing nightlight life.\n\nCapital city: Berlin\nPopulation: 83 million\nMoney: Euro\nInt dialing code: + 49\nLanguages: German\nVisas: you can travel to Germany for up to 90 days in any 180-day period without a visa. This applies if you travel as a tourist, to visit family or friends, to attend business meetings, cultural or sports events, or for short-term studies or training\nVoltage: 230 V\nTime: GMT + 1\n\n## Recommendations\n\n1. Cycle Berlin’s Mauerweg route for fallen-wall nostalgia, historical insight and surprisingly idyllic countryside. \\\n2. Visit Schwansee (Swan Lake) – a nature reserve near Hohenschwangau, with fantastic views of Ludwig II’s fairytale castle, Schloss Neuschwanstein. \\\n3. Recreate the romantic age of steam on the Black Forest’s scenic Wutachtalbahn line. \\\n4. Hike in the Bavarian alps for Germany’s most striking views. \\\n5. Maroon yourself on Rügen – Germany’s largest island – a haven of sand beaches, chalk cliffs and art nouveau hotels on the Baltic Sea. \\\n6. Ride the Schwebebahn – and upside-down suspended monorail above the\nRiver Wupper in Wuppertal; in nearby Solingen you can ride the rails over the Müngsten Bridge, Germany’s highest railway bridge \\\n7. Experience the startling contrast between Dresden's Altstadt and Neustadt. Separated by the Elbe, the Neustadt is home to Dresden's arty, creative scene, while the historical Altstadt is dotted with churches partly re-built after World War II with the original, now blackened bricks, giving the old buildings a striking appearance. \\\n8. Walk or cycle Potsdam's Schlosspark – a huge green park with three palaces and seemingly endless gardens, there are always new treasures to be discovered here.\n\n## When to go to Germany\n\nClimate and crowds in Germany: German weather is at its best in summer, when it’s hot but not uncomfortably so. But this is also the time when major attractions are at their busiest, roads get clogged-up and accommodation prices are high. At least in scenic areas such as the Black Forest, there is enough space to stop you feeling too claustrophobic.\n\nWinter can get bitingly cold but if you wrap up warm and don’t mind few hours of daylight, there are fewer crowds. Germany is renowned for its Christmas markets and is pretty much guaranteed snow every winter.\n\nSpring and autumn are ideal times to visit – the weather is mild, if sometimes unpredictable, and prices lower than in peak season.\n\nFestivals in Germany: Most of Germany’s classical music festivals are held in June. Paradoxically, Munich’s world-famous Oktoberfest actually starts in mid-September. Germany’s renowned Christmas markets are held from mid-November until early January. Check your destination's tourist board website for specific dates.\n\n## International airports\n\nBerlin-International Airport (BER), 20km from the city; Frankfurt (FRA), 12km; Cologne (CGN), 14km; Düsseldorf (DUS), 8km; Hamburg (HAM), 9km; Munich (MUC), 28.5km; Stuttgart (STR) 14km.\n\n## Getting around in Germany\n\nBy air: The national airline Lufthansa and the budget airline Germanwings operate numerous domestic flights between Germany’s major cities. These tend to be an expensive option in comparison with the trains.\n\nBy train: Germany has one of the most efficient and extensive railway networks in the world. The most popular intercity routes are served by the 330km-per-hour InterCityExpress (ICE) trains.\n\nMost major cities have underground U-Bahn system or trams in the centre and a S-Bahn network going out into the suburbs. For timetables and fares see Deutsche Bahn’s website (www.bahn.de).\n\nBy road: In the few rural areas not served by trains, buses efficiently fill the gap. It’s well worth buying travelcards for these. Germany’s roads are well-maintained. Fly-drive deals often work out cheaper than hiring cars through local agents.\n\nCyclists are well-catered for: there are bike lanes throughout Germany and you can hire bikes from most of the main train stations and drop them off at any other participating station.\n\n## Germany accommodation\n\nFrom five-star luxury to simple rooms in wooden chalets, Germany has accommodation to suit every budget.\n\nHoliday homes, rented by the week, are an economical option if you’re planning on staying put in one spot and holidaying as a family or in large group.\n\nFarmstays are becoming increasingly popular and full lists of these are usually available from local tourist offices.\n\nThere are over 2,500 campsites dotted all over Germany’s scenic spots. To search for one in the area you’re staying in, go to the German Tourist Board’s website.\n\n## Germany food & drink\n\nTypical German cuisine is a hearty affair – meat-heavy main courses are often served with dumplings. Schnitzel is a popular, lighter favourite, while maultaschen and spätzle are state specialities in Baden-Württemberg.\n\nNowhere in the world has more varieties of sausage than Germany and there are many types which you won’t find anywhere else, such as Bavarian boiled weißwurst and the unique currywurst. For the best wurst, head straight to the local butcher’s, where you can buy hot sausage or roast-meat sandwiches to take away.\n\nIn large cities you’ll find a good variety of ethnic restaurants, especially Italian and Turkish. Vegetarians should head to the burgeoning number of organic restaurants for the widest choice of veggie dishes.\n\nThere are over 1200 breweries in Germany, and many restaurants have their own micro-breweries, so wherever you are there’s always a selection of local beers to sample; try Alt in Düsseldorf and Kölsch in Cologne.\n\nFrankfurt is Germany’s cider capital and if you’re in Baden don’t leave without trying the Kirschwasser – a cherry-based spirit.\n\n## Health & safety in Germany\n\nGermany has an excellent healthcare system. If you are an EU citizen, a European Health Insurance Card covers you for most medical care. No vaccinations are required, though it’s worth checking your tetanus jab is up to date. In some parts of Germany there is a small risk of contracting tick-borne encephalitis and Lyme disease – consider insect repellent. Tap water is safe to drink.\n\nIn touristy areas in Germany, as in other parts of the world, be aware of pickpockets.\n"
      },
      "location": {
        "en-US": {
          "lon": 10.45152,
          "lat": 51.16569
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6MMILXiIeUsQPE5lmiusy"
          }
        }
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3kPXl9AiLS6cIguV9pWXH9",
      "type": "Entry",
      "createdAt": "2022-10-15T18:50:45.795Z",
      "updatedAt": "2022-10-18T10:04:33.430Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 22,
      "publishedAt": "2022-10-18T10:04:33.430Z",
      "firstPublishedAt": "2022-10-15T19:03:47.554Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 2,
      "version": 23,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "France"
      },
      "body": {
        "en-US": "In one day, you could drive from Brittany’s windswept coasts and medieval forests, past the verdant, flat pastures either side of the Loire, through the snow-flecked peaks of the Massif Central, the deep gorges of Languedoc-Rousillon and on to the sun-baked beaches of the Mediterranean.\n\nFrance is also an ideal destination for green holidaymakers. Numerous ferries and a now even quicker Eurostar (just 2h 15m from London to Paris) connect Britain with France – great for those conscious of their carbon footprint. Once you're there, France is home to a wide range of eco-accommodation, from environmentally-friendly ski lodges to mountain retreats. Plus, a wide network of cycle paths and some 60,000km of long distance footpaths (sentiers de grande randonées) make this a rambler’s paradise.\n\nCapital city: Paris\nPopulation: 65.4 million\nMoney: Euro\nInt dialing code: + 33\nLanguages: French & English\nVisas: You can travel to countries in the Schengen area, which France is part of, for up to 90 days in any 180-day period without a visa. This applies if you travel as a tourist, to visit family or friends, to attend business meetings, cultural or sports events, or for short-term studies or training.\nVoltage: 230 V\nTime: GMT + 1\n\n## Recommendations\n\n1. Scale Europe’s highest sand dune at Arcachon, near Biarritz, on the Atlantic coast\n2. Kayak through the peaceful waters and limestone formations of the Ardèche\n3. Be enchanted by Brittany’s otherworldly megaliths – you’ll soon be sniffing at Stonehenge.\n4. Party like a Basque at the Fêtes de Bayonne where the whole town dons red and white and celebrates Basque culture\n5. Take on Corsica’s notoriously gruelling GR20 route or enjoy the island’s other, gentler, but equally beautiful treks\n6. Explore mountains dotted with crumbling Cathar castles in Languedoc Rousillon: Chateau de Peyreperteuse affords particularly breath-taking views and is little-visited (perhaps because its name is so difficult to remember)\n\n## I wish I'd known:\n\nHolly Gurr  on the one thing she wished she'd known on her arrival:\n\n\"You'll receive a warmer welcome if you make the effort to say basic greetings in French.\"\n\nDaisy Cropper on what she thinks would have been helpful to know before her trip:\n\n“High season really does mean high season. If you’re travelling in the summer months book your accommodation in advance. Don’t attempt to arrive in a town and look for somewhere to stay – it’s tedious and expensive.”\n\n“Paris is a must-see on many travellers' to do lists. Get out in the suburbs to save money on accommodation and to see a side of the capital few people see. We stayed nearby the Jasmin Metro station. It was quiet, serene and had many restaurants and bars nearby –all without a tourist in sight.”\nFurther Reading\n\n## When to go to France\n\nTo avoid the crowds The French tend to stick to their own country when they go on holiday. This means that during the main French holiday periods train fares soar and road travel becomes unbearable unless you like miles-long tailbacks. Avoid August at all costs when the entire country takes its congé annuel and only the tourist industry remains open. For the exact dates of school holidays – by region – see the French Department of Education’s website.\n\nClimate and weather The general rule is that winter is cold, summer hot and spring and autumn pleasant. However on the Atlantic coast and in the north (in Brittany in particular), the weather can be highly changeable at any time of year. As you go further south temperatures tend to get hotter and the weather more predictable. The Mediterranean region gets most of rainfall from late September to early November, when the rains can be torrential. Winter sports enthusiasts can expect good snow on France’s numerous mountain ranges from mid-December to late March.\n\nFestivals in France The summer months see the greatest concentration of festivals in France, ranging from the nation-wide celebrations on Bastille Day (14 July) to the week-long music festivals and bullfighting ferias in the south of France. In December, head to Alsace for its Christmas markets and Lyon for the Fêtes des Lumières, when the entire city becomes a playground of light installations. In February, Nice holds France’s largest street carnival.  \n\n## International airports\n\nParis-Charles de Gaule (CDG) 23km from the city, Paris-Orly (ORY) 14km, Bordeaux (BOD)12km, Lille (LIL) 12km, Lyon (LYS) 25km, Marseille (MRS) 30km, Nice (NCE) 6km, Strasbourg (SXB) 12km, Toulouse (TLS) 8km.\n\n## Getting around in France\n\nBy air All of France’s major cities and many minor ones have airports. Most internal flights are run by Air France, with some operated by budget carriers such as easyJet and Airlinair.\n\nBy train France has an excellent rail network, ranging from the regional TER to the high speed TGV, which will take you between almost any two French cities within three hours. Corail Lunéa are comfortable sleeper trains. Book your train journeys in advance at SNCF to save on the fare. Just don’t forget to composter (stamp your ticket with the special machines provided on platforms before getting on the train – claiming ignorance as a foreign visitor wont always spare you the fine).\n\nBy road Buses in France are run by SNCF, Eurolines and the municipal authorities. For local bus timetables, your best bet are the gare routières (bus stations) and local tourist offices. Generally buses are slower and cheaper than the trains. The same rule of composter or face a fine applies.\n\nOutside of the main holiday season, France’s roads can be a real pleasure to cycle or drive. The motorway toll roads are great if you’re in a rush. If you’re planning to take scenic routes, it’s worth investing in a Michelin map, which marks these in green.\n\nMost French cities now have a network of 24-hour bicycle stations, where for a small sum you can rent a bike, picking it up from one station and dropping it off at whichever station is nearest to you are the end of the day.\n\n## France accommodation\n\nFrom delightful chambres d’hôtes (B&Bs) to modish boutique hotels, from châteaux with a view to eco-retreats  – and not to mention over ten thousand campsites (www.campingfrance.com), you’ll find rooms all over France to suit any taste and budget. Outside of peak season, you can usually turn up in any town and find rooms still available.\n\nIf you’re staying for a while in one place, consider renting an apartment or gîte (www.gite-de-france.fr) (holiday cottage).\n\nHikers and long distance bicyclists are well-catered for with gîte d’étapes (rustic hostels with basic kitchen and washing facilities). Mountaineers will a find a good network of refuge huts, mostly run by the Fédération Française des Clubs Alpins et de Montagne.\n\n## France food & drink\n\nDon’t underestimate how seriously food is taken in France. Where else would you find politicians ransacking McDonald’s with tractors? Leading the anti-fast food revolution is the aptly-name Slow Food France, which lists local tasting events on its website.\n\nPerhaps the most incredible thing about French gastronomy is the variety. Each region fiercely prides itself on its cheeses, wines and specialities such as crepes in Brittany and boeuf bourguignon, a red-wine beef stew from Burgundy. If you want to know where the best restaurants are and what dishes you shouldn’t miss, ask a local.\n\nVegetarians will be pleased to hear that options have improved in recent years. Most restaurants in main towns serve a range of veggie dishes, although in small villages you might not find much beyond a salade verte. In most towns now you will also find a range of ethnic food. Thanks to large immigrant populations, Moroccan and Vietnamese restaurants are particularly numerous.\n\n## Health & safety in France\n\nThere is little to worry about health-wise in France. Under the French health system, you’ll have to pay for all hospital services, doctors’ consultations and prescriptions upfront but EU citizens are entitled to a refund, provided you have a European Health Insurance Card."
      },
      "location": {
        "en-US": {
          "lon": 2.213749,
          "lat": 46.22763
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "TSgBnwmlm1ZNSq6SPXIo3"
          }
        }
      },
      "travelRegion": {
        "en-US": "Europe"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4eE6z551dDXRW1jaGDgWbU",
      "type": "Entry",
      "createdAt": "2022-10-15T19:12:42.975Z",
      "updatedAt": "2022-10-18T10:03:18.840Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 21,
      "publishedAt": "2022-10-18T10:03:18.840Z",
      "firstPublishedAt": "2022-10-15T19:16:40.477Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 3,
      "version": 22,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Alaska"
      },
      "body": {
        "en-US": "Wildlife rather than roadworks holds up the traffic in Alaska, and rivers are chock-a-block with tasty salmon. In the south of Alaska, feast your eyes on the majestic hunks of ice at Glacier Bay National Park or learn how to catch salmon from the brown bears at Brooks Falls. If you want to get your heart rate up, try cycling Alaska’s Denali Highway or head out on a canoe adventure down the Yukon River. Visit Fairbanks in mid-September and you might just be lucky enough to see the northern lights in all their glory.\n\nCapital city: Juneau\nPopulation: 655,000\nMoney: US dollar\nInt dialing code: + 001907\nLanguages: English\nVisas: Most citizens of United Kingdom can travel to the U.S. for Tourism or a Visit for 90 days or less without a visa under the Visa Waiver Program\nVoltage: 120V\nTime: GMT-9 (April-October GMT-8)\n\n## Recommendations\n\nLose the world in Wrangell-St Elias National Park, Alaska\nGet the ultimate view of the northern lights in Wiseman, Alaska\nRide the Yukon Railway for stunning vertigo-inducing scenery\nFollow in the bootsteps of gold-rush pioneers on the Chilkoot Trail\nMeet the colourful characters riding the ferry between the remote Aleutian Islands\n\n## Tip\n\nAlaska isn’t always chilly: between June and August it can be almost balmy. However, it’s wise to pack plenty of layers and lots of mosquito repellent – locals call the mosquito the ‘Alaska State bird’.\n\n## When to go to Alaska\n\nThe high season in Alaska is June to August – the weather is at its best, the days are long and everybody is outside playing. Consider beginning or ending your trip to Alaska during the shoulder season of May and September when many outdoor activities are still possible and prices are lower. Alaska is also working hard to promote winter tourism.\n\n## International airport\n\nFairbanks International (FAI) 5km from Fairbanks; Ted Stevens Anchorage International (ANC) 7km from Anchorage\n\n## Getting around in Alaska\n\nThe system of bus companies in Alaska is haphazard at best and the only rail transportation is between Seward and Fairbanks with the Alaska Railroad.\n\nIn the south-east and Prince William Sound travellers use the Alaska State Marine Highway to reach the towns where roads don’t. Renting a car is popular in Alaska. Internal flights link the main towns.\n\n## Alaska accommodation\n\nAccommodation in Alaska can come with fabulous views but you have to pay for them. Prices go sky high during Alaska’s short summer season.\n\nRoadhouses, hotels and motels are the mainstays in Alaska, but B&Bs are on the up. Hostels with dorm rooms are thin on the ground. Campsites are plentiful. Another option is staying in a US Forest Service cabin; the vast majority require a flight on a floatplane to access and offer a true slice of wilderness.\n\n## Alaska food & drink\n\nFish-lovers are in for a treat: fresh salmon, king crab and halibut are Alaskan specialities. Clam chowder with sourdough bread for dunking is another favourite. Aside from seafood, food is expensive in Alaska (most of it is shipped from Seattle) and diners rarely stray from American staples such as pancakes, sandwiches, burgers, eggs and pizza.\n\nVegetarians will survive well enough, although they may get a little bored with pizza.\n\n## Health & safety in Alaska\n\nSpeak to your GP or travel clinic about vaccinations. The cost of healthcare in the USA is extremely high – some form of health insurance is essential."
      },
      "location": {
        "en-US": {
          "lon": -149.493,
          "lat": 64.20084
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5EY1fg577JaqWqde0M0uum"
          }
        }
      },
      "travelRegion": {
        "en-US": "North America"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4jQ9I65aXKd7JC4qgP7l8X",
      "type": "Entry",
      "createdAt": "2022-10-15T19:19:13.989Z",
      "updatedAt": "2022-10-18T10:03:43.604Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 16,
      "publishedAt": "2022-10-18T10:03:43.604Z",
      "firstPublishedAt": "2022-10-15T19:22:30.278Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 3,
      "version": 17,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Hawaii"
      },
      "body": {
        "en-US": "Most of the state’s accommodation is on the island of Oahu in Waikïkï, a city with great nightlife and busy beaches. On the island’s North Shore, surfers from around the globe come to ride the huge suicidal looking waves that pound the shoreline.\n\nBeach bums in need of some rest and relaxation should head to Maui (also good for windsurfing and whale watching), while hikers looking for stunning scenery and plenty of clean air will love Kaua‘i.\n\nMeanwhile, the Big Island is home to Kïlauea, the world’s most active volcano which has been spewing out lava since 1983.\n\nLana‘i is essentially a holiday home for those  with big bucks while Moloka‘i, the most traditional and homey of all the Hawaiian islands, is a good choice for travellers on a budget.\n\n## Recommended experiences in Hawaii \n\nLook out for the real Hawaii\nHike in the forest and watch dawn from the summit of a volcano at Haleakala National Park\nVisit Pi‘ilanihale Heiau – a 600-year old Polynesian temple set on Maui’s dramatic coastline\nFeast your eyes on incredible sweeping views over the mountains at The Waimea Canyon\nGo whalewatching on Kaua‘i’s breathtaking Na Pali coast\nHula ‘til dawn during the Kauai Polynesian Festival in May \nWanderlust tips for travel in Hawaii\n\nMoving around the islands is expensive so if you’re on a budget,  it's best to find an island you like and stick to it.\nYou might find that Moloka'i island is the cheapest destination overall for travellers.\nSave money by eating like a local. Abandon your usual staples (box cereal, pop, anything that has to be freighted onto the island) and embrace locally caught seafood, tropical fruits and save a bundle.\nSparkling pineapple wine is delicious and refreshing on a hot day.\nLocals tend to eat early, so don’t leave it too late to go out to dinner.\n\n# Further Reading\n\n## Travel in Hawaii: vital stats\n\nCapital of Hawaii: Honolulu\nPopulation of Hawaii: 1.3 million\nLanguages in Hawaii: English\nTime in Hawaii: GMT – 10\nInternational dialing code in Hawaii: + 1 (808)\nVoltage in Hawaii: 110AC, 60 Hz\nVisas for Hawaii: Hawaii visas\nMoney in Hawaii: US dollar ($). Tipping is expected in restaurants, bars and taxis. Guides appreciate a tip too. Leave about 15%. Credit cards are vital in Hawaii: you’ll need one to secure car rentals and hotel bookings. US dollar travellers cheques are widely accepted.\nHawaii tourist board: www.gohawaii.com\nWhen to go to Hawaii\n\nThe weather varies little year round – slightly hotter in summer (May-October), with a bit more rain in winter (November to April). \n\n## International airport\n\nHonolulu International Airport (HNL) – 6km from city centre\n\n## Getting around in Hawaii\n\nWith the exception of Maui, Moloka‘i and Lana‘i the Hawaiian islands are spread far apart and the only practical way of visiting several is to fly with the local airline Hawaiian (www.hawaiianair.com).\n\nCars can be hired through any of the main agencies. Mopeds are more suited to island driving, especially beyond the freeways where the roads are narrow and windy. Maui in particular is great for cycling as all the major roads have cycle lanes. Public transport is minimal.\n\n## Hawaii accommodation\n\nAccommodation in Hawaii is geared towards those with cash to spend: resort hotels are big business. One rung down the chain are the high to mid-range hotels which are worth reserving in advance.\n\nBudget travellers will need to rely on B&Bs (nb - not all of them include breakfast) as American-style motels are virtually non-existent. The larger Hawaiian islands have at least one budget surfer hostel.\n\n## Hawaii food & drink\n\nHawaii has all the burger chains, pizza joints and coffee shops of anywhere else in the US, albeit with a little more pineapple thrown in.  Local specialities include laulau (pork or fish wrapped in a taro leaf).\n\nThe root of the taro plant is also used to make a sweet pudding. Hawaii has wonderful fish (and consequently very good Japanese sushi restaurants). Another simple local favourite is saimin – a clear soup packed with noodles and other goodies. Knocking back a few Mai Tais or Blue Hawai‘s is a must. Vegetarians will have little trouble.\n\n## Health & safety in Hawaii\n\nCheck with a doctor that your vaccinations are up to date and be sure to take out adequate travel insurance. If you plan to swim or surf, stick to official beaches and keep an eye out for warning flags.\n\nHawaii has a real problem with thefts from cars, to the point where locals often leave their doors open to avoid paying for broken windows; follow their lead by not leaving anything on display in your car."
      },
      "location": {
        "en-US": {
          "lon": -155.582,
          "lat": 19.89676
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "3spkeFelsu4Qw5C7ZsXeOR"
          }
        }
      },
      "travelRegion": {
        "en-US": "North America"
      },
      "parentId": {
        "en-US": "namerica"
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1i1yxw7KIBAFsPgvzhBWCg",
      "type": "Entry",
      "createdAt": "2022-10-15T19:41:05.902Z",
      "updatedAt": "2022-10-18T10:01:56.132Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 30,
      "publishedAt": "2022-10-18T10:01:56.132Z",
      "firstPublishedAt": "2022-10-15T19:48:27.617Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 2,
      "version": 31,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "contentType": {
        "sys": {
          "type": "Link",
          "linkType": "ContentType",
          "id": "titel"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Canada"
      },
      "body": {
        "en-US": "Covering nearly 10 million sq km, spread across 10 provinces, there’s enough space and diversity in Canada to do pretty much whatever you like.\n\nWatch abundant wildlife such as moose, whales and an array of bears. Experience world-class outdoor adventure. Sample the sophisticated cultural scene in Canada’s cities. Soak up the mountain scenery. Embark on a road trip of a lifetime.\n\nWith so many unique experiences on offer, it's hard to know where to start, but our guide will help...\n\n## Where in Canada should you go?\n\nCanada stretches from the Atlantic Ocean in the east to the Pacific Ocean in the west and northward into the Arctic Ocean, across 10 provinces and three territories – each with their own unique culture and landscape.\n\nFrom the historic island of Newfoundland in the east to the cosmopolitan Vancouver Island in the west; from the mountain-bordered wilderness of adventurous British Columbia to the culturally-rich and festival-ready city of Toronto, the hardest part of travel in Canada is deciding where to go.\n\nRead on to find the perfect Canadian location for you...\n\n## When is the best time to visit Canada?\n\nWhenever you like! Canada comes up trumps in every season. Although it occasionally snows in summer and you may find blooming tulips in January, each of the four seasons brings their own unique charm to the country...\n\n## Wildlife watching in Canada\n\nWhether you turn your head skyward to see birds of prey, or jump in a boat to watch whales swimming past. Perhaps you're peering in lakes to spot paddling moose and busy beavers, or searching for grizzly, polar, or spirit bears. \n\nCanada offers exciting wildlife opportunities everywhere you look...\n\n## Outdoor adventures in Canada \n\nIf you do one thing in Canada, get outside and fill your lungs with all that fresh air. Canada's great outdoors is undeniably huge, and full of possibilities.\n\nSo, if you want to hike through stunning national parks, canoe on a crystal-clear lake, or snow-shoe through the Canadian Arctic, there aren't many countries poised to top Canada's capacity for outdoor fun...\n\n## Road trips\n\nWith roads running through mountains, past pristine lakes and winding their way around the wilderness, Canada is a great place to get your engine running.\n\nJust remember: you drive on the right-hand side of the road in Canada, and whilst roads are excellent, drivers should be prepared to drive in snow if travelling in the winter, although most cars are equipped with winter tyres and roads are gritted and salted.\n\nSee below for the best road trips the country has to offer...\n\n## Getting to and around Canada\n\nGenerally, public transportation in Canada's cities and urban areas is excellent...\n\nInternational airports are dotted around Canada. Toronto is the major hub for international flights. \n\nBritish Airways offer flights from London to Calgary, Montreal, Toronto and Vancouver. \n\nVia Rail is Canada’s national rail service, which offers journeys between cities and villages, as well as multi-day sleeper journeys, including spectacular, glass-roofed carriage trips through the Rocky Mountains. \n\nTaxis are readily available in city centres. \n\nLong-distance bus companies are prolific and an inexpensive way to travel in Canada. Several consecutive days on a bus remains a rite of passage for travellers and locals alike.\n\n## Essential information for travelling to Canada\n\nCapital: Ottawa\n\nPopulation: 37 million\n\nLanguages: Two official languages, English and French\n\nTime: There are six time zones in Canada – from east to west. Daylight Savings Time (DST) runs from March to November.\n\nOttawa (Eastern Time Zone) GMT -5 (DST GMT -4) \nNewfoundland GMT -3.30 (DST GMT -2.30)\nAtlantic GMT -4 (DST GMT -3)\nEastern GMT -5 (DST GMT -4)\nCentral GMT -6  (DST GMT -5 )\nMountain GMT -7 (DST GMT -6) \nPacific GMT -8 (DST GMT -7)\n\nInternational dialling code: +1\n\nVoltage guide: 220 AC, 50 Hz\n\nVisas: Canada visa\n\nMoney: Canadian dollar $CDN. ATMs are readily available. Credit cards are widely accepted. \n\nTipping (15%) is generally expected in restaurants and for bar service. It never hurts to tip people in the service industry with a loonie ($1 coin) or a toonie ($2 coin) – they'll appreciate it. Hairdressers, taxi drivers and barbers may expect 10% for good service. \n"
      },
      "location": {
        "en-US": {
          "lon": -106.346,
          "lat": 56.13036
        }
      },
      "destImage": {
        "en-US": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4vkiW60a8WFLleqpDROs9X"
          }
        }
      },
      "travelRegion": {
        "en-US": "North America"
      }
    }
  }
]

const assets = [
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6jLC700fEyIum3Jb5oGaQK",
      "type": "Asset",
      "createdAt": "2022-10-05T14:51:11.822Z",
      "updatedAt": "2022-10-07T10:29:14.363Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 7,
      "publishedAt": "2022-10-07T10:29:14.363Z",
      "firstPublishedAt": "2022-10-06T12:09:12.587Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 2,
      "version": 8,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Honolulu"
      },
      "description": {
        "en-US": "Honolulu picture"
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6jLC700fEyIum3Jb5oGaQK/301caa2a11ffcd450a369d90ace4b642/th.jpeg",
          "details": {
            "size": 47017,
            "image": {
              "width": 474,
              "height": 316
            }
          },
          "fileName": "th.jpeg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "XgLYykxjXIbifqVbVeaMj",
      "type": "Asset",
      "createdAt": "2022-10-08T12:26:44.622Z",
      "updatedAt": "2022-10-08T12:27:26.953Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-08T12:27:26.953Z",
      "firstPublishedAt": "2022-10-08T12:27:26.953Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "cairo"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/XgLYykxjXIbifqVbVeaMj/9a65ddad30ac3161d7355e7beb150513/cairo.jpg",
          "details": {
            "size": 104696,
            "image": {
              "width": 700,
              "height": 500
            }
          },
          "fileName": "cairo.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "xvfBoVJoQTs5FyESrlNEX",
      "type": "Asset",
      "createdAt": "2022-10-08T12:30:53.158Z",
      "updatedAt": "2022-10-08T12:32:56.920Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-08T12:32:56.920Z",
      "firstPublishedAt": "2022-10-08T12:32:56.920Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "cairo"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/xvfBoVJoQTs5FyESrlNEX/3f939844023306c76e649b1018ab3546/cairo.jpg",
          "details": {
            "size": 104696,
            "image": {
              "width": 700,
              "height": 500
            }
          },
          "fileName": "cairo.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1hCYQmBehkNU2wwYpAMhgn",
      "type": "Asset",
      "createdAt": "2022-10-10T21:30:12.914Z",
      "updatedAt": "2022-10-10T21:41:18.150Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-10T21:41:18.150Z",
      "firstPublishedAt": "2022-10-10T21:41:18.150Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Canada1"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1hCYQmBehkNU2wwYpAMhgn/352d4477adab955eb24f7f333edef6d1/photo-1563194081-ef73fa8f19be.webp",
          "details": {
            "size": 403572,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1563194081-ef73fa8f19be.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5IszPtpaoAy0EX8WqXVHFn",
      "type": "Asset",
      "createdAt": "2022-10-10T21:41:31.586Z",
      "updatedAt": "2022-10-10T21:42:05.769Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:42:05.769Z",
      "firstPublishedAt": "2022-10-10T21:42:05.769Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1508652362825-2a44637db8e2"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5IszPtpaoAy0EX8WqXVHFn/4d19d5f8a27ef95b16c8c36d238e8e45/photo-1508652362825-2a44637db8e2.webp",
          "details": {
            "size": 286340,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1508652362825-2a44637db8e2.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1cYLAyl0neZBzV4GOPMHBA",
      "type": "Asset",
      "createdAt": "2022-10-10T21:42:12.669Z",
      "updatedAt": "2022-10-10T21:42:24.095Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:42:24.095Z",
      "firstPublishedAt": "2022-10-10T21:42:24.095Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1516141535911-e3b982713e61"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1cYLAyl0neZBzV4GOPMHBA/5da2559827476282f3262768ff93f487/photo-1516141535911-e3b982713e61.webp",
          "details": {
            "size": 418560,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1516141535911-e3b982713e61.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6nS1W1S4CemuHDhFAnXSzq",
      "type": "Asset",
      "createdAt": "2022-10-10T21:42:32.216Z",
      "updatedAt": "2022-10-10T21:42:40.519Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:42:40.519Z",
      "firstPublishedAt": "2022-10-10T21:42:40.519Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1583608008725-43e9fce45fe6"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6nS1W1S4CemuHDhFAnXSzq/00814c8fe11ddd143a1d4f634718722f/photo-1583608008725-43e9fce45fe6.webp",
          "details": {
            "size": 101844,
            "image": {
              "width": 774,
              "height": 1161
            }
          },
          "fileName": "photo-1583608008725-43e9fce45fe6.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5QmnUQOkEoe8KI9dcbvKC3",
      "type": "Asset",
      "createdAt": "2022-10-10T21:42:46.580Z",
      "updatedAt": "2022-10-10T21:42:55.481Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:42:55.481Z",
      "firstPublishedAt": "2022-10-10T21:42:55.481Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1588272947922-21cbc34dc3a7"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5QmnUQOkEoe8KI9dcbvKC3/db2ac8e6f019070a00b8bb4da56ae5d3/photo-1588272947922-21cbc34dc3a7.webp",
          "details": {
            "size": 451204,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1588272947922-21cbc34dc3a7.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6yXunA0Eqd2iPTGfMFvzlX",
      "type": "Asset",
      "createdAt": "2022-10-10T21:43:04.018Z",
      "updatedAt": "2022-10-10T21:43:13.394Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:43:13.394Z",
      "firstPublishedAt": "2022-10-10T21:43:13.394Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1589871090211-7f2efeec05b6"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6yXunA0Eqd2iPTGfMFvzlX/080b5773c92786cad95091c2561253f4/photo-1589871090211-7f2efeec05b6.webp",
          "details": {
            "size": 348836,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1589871090211-7f2efeec05b6.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "52jRVinpT7YIvcxqhW2Fdt",
      "type": "Asset",
      "createdAt": "2022-10-10T21:43:26.185Z",
      "updatedAt": "2022-10-10T21:43:32.563Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:43:32.563Z",
      "firstPublishedAt": "2022-10-10T21:43:32.563Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1603015245012-68988952fc73"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/52jRVinpT7YIvcxqhW2Fdt/53f354b3865550efb82e59fe55500327/photo-1603015245012-68988952fc73.webp",
          "details": {
            "size": 235904,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1603015245012-68988952fc73.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "503gXUgWlaJkmaHGyepQYT",
      "type": "Asset",
      "createdAt": "2022-10-10T21:43:38.288Z",
      "updatedAt": "2022-10-10T21:43:48.351Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:43:48.351Z",
      "firstPublishedAt": "2022-10-10T21:43:48.351Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1604549944235-3e5579b15cc2"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/503gXUgWlaJkmaHGyepQYT/8bb51f8381681bf22012c6b43c90651d/photo-1604549944235-3e5579b15cc2.webp",
          "details": {
            "size": 245524,
            "image": {
              "width": 1471,
              "height": 981
            }
          },
          "fileName": "photo-1604549944235-3e5579b15cc2.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5vYJ5QSp3hsoOqaM4AwCFr",
      "type": "Asset",
      "createdAt": "2022-10-10T21:43:53.780Z",
      "updatedAt": "2022-10-10T21:44:04.323Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:44:04.323Z",
      "firstPublishedAt": "2022-10-10T21:44:04.323Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1616832880699-8541b04005ec"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5vYJ5QSp3hsoOqaM4AwCFr/b974de66ba23e098ee63ad22f1ec3815/photo-1616832880699-8541b04005ec.webp",
          "details": {
            "size": 363814,
            "image": {
              "width": 872,
              "height": 1161
            }
          },
          "fileName": "photo-1616832880699-8541b04005ec.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6agkBk621FGqNb00roMkEh",
      "type": "Asset",
      "createdAt": "2022-10-10T21:48:47.135Z",
      "updatedAt": "2022-10-10T21:49:00.278Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:49:00.278Z",
      "firstPublishedAt": "2022-10-10T21:49:00.278Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1543191878-f6a3e470454e"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6agkBk621FGqNb00roMkEh/6ecc12b9492d4626b97f52260092c755/photo-1543191878-f6a3e470454e.webp",
          "details": {
            "size": 282570,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1543191878-f6a3e470454e.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6am4wZcT4YA2bVBl5rxnNY",
      "type": "Asset",
      "createdAt": "2022-10-10T21:49:05.608Z",
      "updatedAt": "2022-10-10T21:51:57.290Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:51:57.290Z",
      "firstPublishedAt": "2022-10-10T21:51:57.290Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1545073334-9cb53498f1dc"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6am4wZcT4YA2bVBl5rxnNY/6bbc9f71e98a61714b47afffd8fc4be3/photo-1545073334-9cb53498f1dc.webp",
          "details": {
            "size": 66148,
            "image": {
              "width": 774,
              "height": 1161
            }
          },
          "fileName": "photo-1545073334-9cb53498f1dc.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "ZtQiky5wDVRim8HXHzUNz",
      "type": "Asset",
      "createdAt": "2022-10-10T21:49:15.219Z",
      "updatedAt": "2022-10-10T21:52:03.445Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:03.445Z",
      "firstPublishedAt": "2022-10-10T21:52:03.445Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1559589688-6ba6beafe1e5"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/ZtQiky5wDVRim8HXHzUNz/e18db5755861ffddbc2b600ef2bba847/photo-1559589688-6ba6beafe1e5.webp",
          "details": {
            "size": 103090,
            "image": {
              "width": 1584,
              "height": 934
            }
          },
          "fileName": "photo-1559589688-6ba6beafe1e5.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4DKdtTkAsSHwNO0dtin4Hr",
      "type": "Asset",
      "createdAt": "2022-10-10T21:49:25.329Z",
      "updatedAt": "2022-10-10T21:51:50.979Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:51:50.979Z",
      "firstPublishedAt": "2022-10-10T21:51:50.979Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1467269204594-9661b134dd2b"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4DKdtTkAsSHwNO0dtin4Hr/b96c09938eff3a4bf06f66409f516dfc/photo-1467269204594-9661b134dd2b.webp",
          "details": {
            "size": 549964,
            "image": {
              "width": 1470,
              "height": 981
            }
          },
          "fileName": "photo-1467269204594-9661b134dd2b.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4mNrXHNv9KW7n94A8Wuo8O",
      "type": "Asset",
      "createdAt": "2022-10-10T21:49:31.585Z",
      "updatedAt": "2022-10-10T21:51:42.454Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:51:42.454Z",
      "firstPublishedAt": "2022-10-10T21:51:42.454Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1491557345352-5929e343eb89"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4mNrXHNv9KW7n94A8Wuo8O/ea75731a9e4a81deb48648b67ad9a014/photo-1491557345352-5929e343eb89.webp",
          "details": {
            "size": 50388,
            "image": {
              "width": 500,
              "height": 333
            }
          },
          "fileName": "photo-1491557345352-5929e343eb89.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "36a6thuXDzZMWOfZXIjnMX",
      "type": "Asset",
      "createdAt": "2022-10-10T21:50:07.152Z",
      "updatedAt": "2022-10-10T21:52:10.912Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:10.912Z",
      "firstPublishedAt": "2022-10-10T21:52:10.912Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1493707553966-283afac8c358"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/36a6thuXDzZMWOfZXIjnMX/f15861037e100127f166c9cbf41b704b/photo-1493707553966-283afac8c358.webp",
          "details": {
            "size": 557666,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1493707553966-283afac8c358.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "27mXVPAwI3weVUcRnnztOY",
      "type": "Asset",
      "createdAt": "2022-10-10T21:50:19.084Z",
      "updatedAt": "2022-10-10T21:52:17.942Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:17.942Z",
      "firstPublishedAt": "2022-10-10T21:52:17.942Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1503917988258-f87a78e3c995"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/27mXVPAwI3weVUcRnnztOY/3fcf42c66e05a66093b9baa88f162592/photo-1503917988258-f87a78e3c995.webp",
          "details": {
            "size": 306974,
            "image": {
              "width": 774,
              "height": 1161
            }
          },
          "fileName": "photo-1503917988258-f87a78e3c995.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "46JYbOyjtgAnTlI81Yu9vi",
      "type": "Asset",
      "createdAt": "2022-10-10T21:50:30.635Z",
      "updatedAt": "2022-10-10T21:52:24.388Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:24.388Z",
      "firstPublishedAt": "2022-10-10T21:52:24.388Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1507840771025-26e8ececa04c"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/46JYbOyjtgAnTlI81Yu9vi/5f179df29d2436813f819db4d8b79bff/photo-1507840771025-26e8ececa04c.webp",
          "details": {
            "size": 642640,
            "image": {
              "width": 1470,
              "height": 981
            }
          },
          "fileName": "photo-1507840771025-26e8ececa04c.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6qqmVC0KuPoKGdvoppCEJr",
      "type": "Asset",
      "createdAt": "2022-10-10T21:50:46.509Z",
      "updatedAt": "2022-10-10T21:52:30.977Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:30.977Z",
      "firstPublishedAt": "2022-10-10T21:52:30.977Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1519677100203-a0e668c92439"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6qqmVC0KuPoKGdvoppCEJr/60fa6f61b3c57dbfefee73a780f0ecaf/photo-1519677100203-a0e668c92439.webp",
          "details": {
            "size": 478408,
            "image": {
              "width": 1470,
              "height": 980
            }
          },
          "fileName": "photo-1519677100203-a0e668c92439.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "13b8brqsiCbJtEV1D6VWvy",
      "type": "Asset",
      "createdAt": "2022-10-10T21:50:58.165Z",
      "updatedAt": "2022-10-10T21:52:40.191Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-10T21:52:40.191Z",
      "firstPublishedAt": "2022-10-10T21:52:40.191Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1574737685024-7b53d9828481"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/13b8brqsiCbJtEV1D6VWvy/c762b999669a0b8d0ba41003de284102/photo-1574737685024-7b53d9828481.webp",
          "details": {
            "size": 574420,
            "image": {
              "width": 1548,
              "height": 1161
            }
          },
          "fileName": "photo-1574737685024-7b53d9828481.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3Xg89wOKieX0peAmCiVGLz",
      "type": "Asset",
      "createdAt": "2022-10-11T13:47:47.386Z",
      "updatedAt": "2022-10-11T14:01:55.474Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:01:55.474Z",
      "firstPublishedAt": "2022-10-11T14:01:55.474Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Argentina"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/3Xg89wOKieX0peAmCiVGLz/b2b476178ab4a614255dff84435c33f8/dreamstime_xxl_9409569.jpg",
          "details": {
            "size": 3647,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "dreamstime_xxl_9409569.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5P14o3jWd3gvWQZmaAviyi",
      "type": "Asset",
      "createdAt": "2022-10-11T13:50:50.187Z",
      "updatedAt": "2022-10-11T14:02:02.880Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:02.880Z",
      "firstPublishedAt": "2022-10-11T14:02:02.880Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Brazil"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5P14o3jWd3gvWQZmaAviyi/8f6e9e8901c375c8aeac3b206164579b/shutterstock_1912167280.jpg",
          "details": {
            "size": 3026,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_1912167280.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "mNlNTLfiiVcpEMdYvb4Ma",
      "type": "Asset",
      "createdAt": "2022-10-11T13:51:51.939Z",
      "updatedAt": "2022-10-11T14:02:07.889Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:07.889Z",
      "firstPublishedAt": "2022-10-11T14:02:07.889Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Chile"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/mNlNTLfiiVcpEMdYvb4Ma/d04e5a75f4023afbebe263bd9b354811/shutterstock_1116349802.jpg",
          "details": {
            "size": 5016,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_1116349802.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "53d7rWxez2KPu8eLP9KEFH",
      "type": "Asset",
      "createdAt": "2022-10-11T13:52:16.675Z",
      "updatedAt": "2022-10-11T14:02:13.451Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:13.451Z",
      "firstPublishedAt": "2022-10-11T14:02:13.451Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Colombia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/53d7rWxez2KPu8eLP9KEFH/92a6dc02434b819019867c520b734594/shutterstock_512992921.jpg",
          "details": {
            "size": 4654,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_512992921.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "zAQUheQpUjtuQ2Mh5mWpv",
      "type": "Asset",
      "createdAt": "2022-10-11T13:52:49.109Z",
      "updatedAt": "2022-10-11T14:02:22.499Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:22.499Z",
      "firstPublishedAt": "2022-10-11T14:02:22.499Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Equador"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/zAQUheQpUjtuQ2Mh5mWpv/3e2050916786bf4c667cb794bbf0ca09/shutterstock_535492369.jpg",
          "details": {
            "size": 4816,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_535492369.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "19ieKJFxVNAJpfPzjDC9GD",
      "type": "Asset",
      "createdAt": "2022-10-11T13:53:09.252Z",
      "updatedAt": "2022-10-11T14:02:27.509Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:27.509Z",
      "firstPublishedAt": "2022-10-11T14:02:27.509Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Guatemala"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/19ieKJFxVNAJpfPzjDC9GD/a827f70ebb9831e658729106940ca7d3/dreamstime_xxl_57936395.jpg",
          "details": {
            "size": 5143,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "dreamstime_xxl_57936395.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7A8Qy4wB06aHYL144zSO9G",
      "type": "Asset",
      "createdAt": "2022-10-11T13:53:35.170Z",
      "updatedAt": "2022-10-11T14:02:32.222Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:32.222Z",
      "firstPublishedAt": "2022-10-11T14:02:32.222Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Mexico"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7A8Qy4wB06aHYL144zSO9G/003210cf7c083970bcda13eb97a2f276/istock_000007896192large.jpg",
          "details": {
            "size": 3958,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "istock_000007896192large.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "73J269W3JmHjkOKc8ILSbN",
      "type": "Asset",
      "createdAt": "2022-10-11T13:54:04.462Z",
      "updatedAt": "2022-10-11T14:02:42.335Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-11T14:02:42.335Z",
      "firstPublishedAt": "2022-10-11T14:02:42.335Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Peru"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/73J269W3JmHjkOKc8ILSbN/2042562cc9bb6ed844a434cc73ebda91/dreamstime_xxl_54060330.jpg",
          "details": {
            "size": 4361,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "dreamstime_xxl_54060330.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "w1Jg7d1RT7mzWS5jJF0uA",
      "type": "Asset",
      "createdAt": "2022-10-11T13:54:52.033Z",
      "updatedAt": "2022-10-11T14:02:50.705Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 13,
      "publishedAt": "2022-10-11T14:02:50.705Z",
      "firstPublishedAt": "2022-10-11T14:02:50.705Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 14,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Venezuela"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/w1Jg7d1RT7mzWS5jJF0uA/223022e3d314c9f0700b4d2d5df047ba/shutterstock_1589555020.jpg",
          "details": {
            "size": 3038,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_1589555020.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5YKTPlbMBRiIzBvxQ05UGp",
      "type": "Asset",
      "createdAt": "2022-10-12T14:22:09.782Z",
      "updatedAt": "2022-10-12T14:23:22.023Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-12T14:23:22.023Z",
      "firstPublishedAt": "2022-10-12T14:23:22.023Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1476610182048-b716b8518aae"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5YKTPlbMBRiIzBvxQ05UGp/7e97d3646ceae5e74fcf6b14fcc42f9c/photo-1476610182048-b716b8518aae.webp",
          "details": {
            "size": 393690,
            "image": {
              "width": 1559,
              "height": 943
            }
          },
          "fileName": "photo-1476610182048-b716b8518aae.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "Tpd6OEoJRCCTIWyTxu3GV",
      "type": "Asset",
      "createdAt": "2022-10-12T17:17:47.059Z",
      "updatedAt": "2022-10-12T17:17:56.225Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-12T17:17:56.225Z",
      "firstPublishedAt": "2022-10-12T17:17:56.225Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1508592931388-95bc7b61033d"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/Tpd6OEoJRCCTIWyTxu3GV/4d47aa67882c17a8aae8a2f2d3e3d930/photo-1508592931388-95bc7b61033d.webp",
          "details": {
            "size": 204614,
            "image": {
              "width": 1170,
              "height": 780
            }
          },
          "fileName": "photo-1508592931388-95bc7b61033d.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5OWjp1FtrJVnmXMycZe8Vs",
      "type": "Asset",
      "createdAt": "2022-10-12T19:36:19.383Z",
      "updatedAt": "2022-10-12T19:37:37.440Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 5,
      "publishedAt": "2022-10-12T19:37:37.440Z",
      "firstPublishedAt": "2022-10-12T19:37:37.440Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 6,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "africa"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5OWjp1FtrJVnmXMycZe8Vs/a6a2dedd44e5c8baf1b5e495b99108ea/africa.webp",
          "details": {
            "size": 95024,
            "image": {
              "width": 1280,
              "height": 572
            }
          },
          "fileName": "africa.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "62ltuE6ObOgR7f4pFqlOuy",
      "type": "Asset",
      "createdAt": "2022-10-12T19:39:25.691Z",
      "updatedAt": "2022-10-12T19:41:34.376Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-12T19:41:34.376Z",
      "firstPublishedAt": "2022-10-12T19:41:34.376Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "asia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/62ltuE6ObOgR7f4pFqlOuy/42467cc0b62e20c495551f563d1b8958/asia.webp",
          "details": {
            "size": 199634,
            "image": {
              "width": 1280,
              "height": 572
            }
          },
          "fileName": "asia.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4EBSDZs00qckGqaGlFELN6",
      "type": "Asset",
      "createdAt": "2022-10-13T04:26:23.345Z",
      "updatedAt": "2022-10-13T04:27:56.806Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:27:56.806Z",
      "firstPublishedAt": "2022-10-13T04:27:56.806Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Morocco"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4EBSDZs00qckGqaGlFELN6/938a18fda94a10f5468c4bbb47fa5bc1/morocco.webp",
          "details": {
            "size": 144546,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "morocco.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7dksekPr3mRb22iBMIeVK4",
      "type": "Asset",
      "createdAt": "2022-10-13T04:30:27.383Z",
      "updatedAt": "2022-10-13T04:30:55.641Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:30:55.641Z",
      "firstPublishedAt": "2022-10-13T04:30:55.641Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "ethiopia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7dksekPr3mRb22iBMIeVK4/86b784089e635eba85addc7d3c13327f/ethiopia.webp",
          "details": {
            "size": 78450,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "ethiopia.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2PgPxl662ERWiWZ7DMVMB8",
      "type": "Asset",
      "createdAt": "2022-10-13T04:33:36.002Z",
      "updatedAt": "2022-10-13T04:34:03.307Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:34:03.307Z",
      "firstPublishedAt": "2022-10-13T04:34:03.307Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "southAfrica"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/2PgPxl662ERWiWZ7DMVMB8/48a901d88ed1d254694c999fba112b28/south_africa.webp",
          "details": {
            "size": 56638,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "south_africa.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4U3OCWwXD3Usi8h17USlYk",
      "type": "Asset",
      "createdAt": "2022-10-13T04:35:33.153Z",
      "updatedAt": "2022-10-13T04:35:58.742Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:35:58.742Z",
      "firstPublishedAt": "2022-10-13T04:35:58.742Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "kenya"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4U3OCWwXD3Usi8h17USlYk/f5ed98dee1094fed57b512306e804a14/kenya.webp",
          "details": {
            "size": 70680,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "kenya.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "VGweZFjjjDU2cfX9PPSR5",
      "type": "Asset",
      "createdAt": "2022-10-13T04:38:23.576Z",
      "updatedAt": "2022-10-13T04:38:50.168Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:38:50.168Z",
      "firstPublishedAt": "2022-10-13T04:38:50.168Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "egypt"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/VGweZFjjjDU2cfX9PPSR5/5e9bbdd7de6696cf1f402c1f73c748e3/egypt.webp",
          "details": {
            "size": 125388,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "egypt.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3lV3jRvaAcQykB5rXRowLw",
      "type": "Asset",
      "createdAt": "2022-10-13T04:51:26.946Z",
      "updatedAt": "2022-10-13T04:51:56.771Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T04:51:56.771Z",
      "firstPublishedAt": "2022-10-13T04:51:56.771Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "thailand"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/3lV3jRvaAcQykB5rXRowLw/3c76efe2986db2a1b062a4d76dfcefc7/thailand.webp",
          "details": {
            "size": 169470,
            "image": {
              "width": 675,
              "height": 395
            }
          },
          "fileName": "thailand.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "33AEj3n9hXkzHLtO48OBDj",
      "type": "Asset",
      "createdAt": "2022-10-13T04:58:17.316Z",
      "updatedAt": "2022-10-13T05:26:46.455Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T05:26:46.455Z",
      "firstPublishedAt": "2022-10-13T05:26:46.455Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "japan"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/33AEj3n9hXkzHLtO48OBDj/15e429467e779e52ffd41776aab9f17c/japan.jpeg",
          "details": {
            "size": 105730,
            "image": {
              "width": 750,
              "height": 536
            }
          },
          "fileName": "japan.jpeg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4GiiLI8szeWA2LA6QkPkl4",
      "type": "Asset",
      "createdAt": "2022-10-13T05:04:45.334Z",
      "updatedAt": "2022-10-13T05:05:29.203Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T05:05:29.203Z",
      "firstPublishedAt": "2022-10-13T05:05:29.203Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "india"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4GiiLI8szeWA2LA6QkPkl4/e3f57b3cc145a4fd8be8d4b7f906d9c6/india.webp",
          "details": {
            "size": 57796,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "india.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6dwIHwU9YtEMZNukUjfmvu",
      "type": "Asset",
      "createdAt": "2022-10-13T05:07:13.053Z",
      "updatedAt": "2022-10-13T05:07:44.651Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T05:07:44.651Z",
      "firstPublishedAt": "2022-10-13T05:07:44.651Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "china"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6dwIHwU9YtEMZNukUjfmvu/5c84a1af8b53181bd24a30f92a7ac01e/china.webp",
          "details": {
            "size": 145378,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "china.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6OJBLKwKUhaz6Mb3dKxE4C",
      "type": "Asset",
      "createdAt": "2022-10-13T05:09:55.284Z",
      "updatedAt": "2022-10-13T05:10:39.281Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T05:10:39.281Z",
      "firstPublishedAt": "2022-10-13T05:10:39.281Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "3qanlPJvGkCitVDOWGuTj2"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "russia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6OJBLKwKUhaz6Mb3dKxE4C/43f8830db5ef040fc468bba6f7918d18/russia.webp",
          "details": {
            "size": 52866,
            "image": {
              "width": 1120,
              "height": 500
            }
          },
          "fileName": "russia.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4voEiRIglxtxrNT6acP7De",
      "type": "Asset",
      "createdAt": "2022-10-13T11:07:56.996Z",
      "updatedAt": "2022-10-13T11:08:17.846Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:08:17.846Z",
      "firstPublishedAt": "2022-10-13T11:08:17.846Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Australia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4voEiRIglxtxrNT6acP7De/25279f06c3da1fe5b6910d1d715ad0a9/shutterstock_90979145.jpg",
          "details": {
            "size": 3785,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_90979145.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5UDouiC5ILSBsl7UvjFlJb",
      "type": "Asset",
      "createdAt": "2022-10-13T11:08:31.669Z",
      "updatedAt": "2022-10-13T11:08:47.510Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:08:47.510Z",
      "firstPublishedAt": "2022-10-13T11:08:47.510Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Fiji"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5UDouiC5ILSBsl7UvjFlJb/6f4ba871d8643aa7743751cb605a0c60/shutterstock_617190263.jpg",
          "details": {
            "size": 3266,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_617190263.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2gfuuIiyiuhFFGo3h09cXB",
      "type": "Asset",
      "createdAt": "2022-10-13T11:08:58.936Z",
      "updatedAt": "2022-10-13T11:09:12.511Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:09:12.511Z",
      "firstPublishedAt": "2022-10-13T11:09:12.511Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Micronesia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/2gfuuIiyiuhFFGo3h09cXB/81a50332a86930ef42200fd2ec7cd981/dreamstime_l_88743528.jpg",
          "details": {
            "size": 3885,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "dreamstime_l_88743528.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "57eliXX1B8iLjOu6xoB711",
      "type": "Asset",
      "createdAt": "2022-10-13T11:09:23.479Z",
      "updatedAt": "2022-10-13T11:09:45.965Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 5,
      "publishedAt": "2022-10-13T11:09:45.965Z",
      "firstPublishedAt": "2022-10-13T11:09:45.965Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 6,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "New Zealand"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/57eliXX1B8iLjOu6xoB711/dcdb41a822ccea8f5a7908621348abf4/shutterstock_103649750.jpg",
          "details": {
            "size": 4907,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_103649750.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5N64YqqJDi3brfJHod5FhK",
      "type": "Asset",
      "createdAt": "2022-10-13T11:10:00.344Z",
      "updatedAt": "2022-10-13T11:10:22.251Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:10:22.251Z",
      "firstPublishedAt": "2022-10-13T11:10:22.251Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Vanuatu"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5N64YqqJDi3brfJHod5FhK/94bf14d3399232ad8f225f93d2304ae7/shutterstock_1416374399.jpg",
          "details": {
            "size": 5140,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "shutterstock_1416374399.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5b1uZATwT9yxbvrvusII30",
      "type": "Asset",
      "createdAt": "2022-10-13T11:10:26.235Z",
      "updatedAt": "2022-10-13T11:10:52.439Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:10:52.439Z",
      "firstPublishedAt": "2022-10-13T11:10:52.439Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Samoa"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5b1uZATwT9yxbvrvusII30/a32eb5d36c6725046a0a7d071703620b/6-cooks-bay-tahiti-shutterstock_1358977268-web.jpg",
          "details": {
            "size": 4377,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "6-cooks-bay-tahiti-shutterstock_1358977268-web.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1ruP9XgZ8LHhdM3EXVXSpg",
      "type": "Asset",
      "createdAt": "2022-10-13T11:11:36.448Z",
      "updatedAt": "2022-10-13T11:11:49.654Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-13T11:11:49.654Z",
      "firstPublishedAt": "2022-10-13T11:11:49.654Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Tonga"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1ruP9XgZ8LHhdM3EXVXSpg/9b24c401bb3757e15f1e8c7979616021/dreamstime_xxl_90824679.jpeg",
          "details": {
            "size": 3637,
            "image": {
              "width": 248,
              "height": 150
            }
          },
          "fileName": "dreamstime_xxl_90824679.jpeg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "rCn0QJXAoDNrci1035thK",
      "type": "Asset",
      "createdAt": "2022-10-14T14:54:35.363Z",
      "updatedAt": "2022-10-14T14:55:31.420Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T14:55:31.420Z",
      "firstPublishedAt": "2022-10-14T14:55:31.420Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Australia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/rCn0QJXAoDNrci1035thK/2c9302fd0039a4ad55ee3f0031cf323b/shutterstock_90979145.jpg",
          "details": {
            "size": 168907,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_90979145.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "21tnBiej3c3uYvTuZsSaRC",
      "type": "Asset",
      "createdAt": "2022-10-14T15:00:59.395Z",
      "updatedAt": "2022-10-14T15:02:01.625Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:02:01.625Z",
      "firstPublishedAt": "2022-10-14T15:02:01.625Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Fiji"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/21tnBiej3c3uYvTuZsSaRC/9c6c3a1a9782f38b4784dc70794be79a/shutterstock_617190263.jpg",
          "details": {
            "size": 193779,
            "image": {
              "width": 1440,
              "height": 858
            }
          },
          "fileName": "shutterstock_617190263.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "34aklmuOVgszFPGcEOXSs1",
      "type": "Asset",
      "createdAt": "2022-10-14T15:04:11.956Z",
      "updatedAt": "2022-10-14T15:04:28.220Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:04:28.220Z",
      "firstPublishedAt": "2022-10-14T15:04:28.220Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Micronesia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/34aklmuOVgszFPGcEOXSs1/3511280cf975cd623d5c9062b95cc91d/dreamstime_l_88743528.jpg",
          "details": {
            "size": 239509,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "dreamstime_l_88743528.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "eh9QSv3Rqa2lrNnPjDwg2",
      "type": "Asset",
      "createdAt": "2022-10-14T15:07:55.738Z",
      "updatedAt": "2022-10-14T15:08:17.988Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 5,
      "publishedAt": "2022-10-14T15:08:17.988Z",
      "firstPublishedAt": "2022-10-14T15:08:17.988Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 6,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "New Zealand"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/eh9QSv3Rqa2lrNnPjDwg2/479dfd7f4cbed1a92dbb4f66603df452/shutterstock_103649750.jpg",
          "details": {
            "size": 228167,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_103649750.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6cumOEB1Qckyce8Nf8McyI",
      "type": "Asset",
      "createdAt": "2022-10-14T15:11:27.439Z",
      "updatedAt": "2022-10-14T15:11:48.332Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:11:48.332Z",
      "firstPublishedAt": "2022-10-14T15:11:48.332Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Vanuatu"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6cumOEB1Qckyce8Nf8McyI/a270fd3901019a2635c1a00593de5fe8/shutterstock_1416374399.jpg",
          "details": {
            "size": 466424,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_1416374399.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6l8s1hDQs7YlBpzjR5VW9L",
      "type": "Asset",
      "createdAt": "2022-10-14T15:13:23.943Z",
      "updatedAt": "2022-10-14T15:13:58.661Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:13:58.661Z",
      "firstPublishedAt": "2022-10-14T15:13:58.661Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "American Samoa"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6l8s1hDQs7YlBpzjR5VW9L/4ef4c758b007d0cf1becad93e2b381d6/header.jpg",
          "details": {
            "size": 375276,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "header.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4SDcMK1Ej7DP2dwGCBidqv",
      "type": "Asset",
      "createdAt": "2022-10-14T15:17:12.318Z",
      "updatedAt": "2022-10-14T15:17:27.104Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:17:27.104Z",
      "firstPublishedAt": "2022-10-14T15:17:27.104Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Tonga"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4SDcMK1Ej7DP2dwGCBidqv/99a5d698b1c0bfec1432947e014e68fc/dreamstime_l_92235879.jpg",
          "details": {
            "size": 110733,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "dreamstime_l_92235879.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "2GYfrI0JF4ABdsZC7SIlE8",
      "type": "Asset",
      "createdAt": "2022-10-14T15:20:57.597Z",
      "updatedAt": "2022-10-14T15:21:13.969Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:21:13.969Z",
      "firstPublishedAt": "2022-10-14T15:21:13.969Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Argentina"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/2GYfrI0JF4ABdsZC7SIlE8/55d8161373547dcc121d52913e3e9d73/dreamstime_xxl_9409569.jpg",
          "details": {
            "size": 159076,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "dreamstime_xxl_9409569.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1ZbekZx4X8PpfgKGuMeMSJ",
      "type": "Asset",
      "createdAt": "2022-10-14T15:24:59.005Z",
      "updatedAt": "2022-10-14T15:25:18.821Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:25:18.821Z",
      "firstPublishedAt": "2022-10-14T15:25:18.821Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Brazil"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1ZbekZx4X8PpfgKGuMeMSJ/2d7348cd3df3739e60f92363da7f9a20/shutterstock_1912167280.jpg",
          "details": {
            "size": 254168,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_1912167280.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7M11haKXVJmyAOFftHsxZr",
      "type": "Asset",
      "createdAt": "2022-10-14T15:28:06.916Z",
      "updatedAt": "2022-10-14T15:28:38.411Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:28:38.411Z",
      "firstPublishedAt": "2022-10-14T15:28:38.411Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Chile"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7M11haKXVJmyAOFftHsxZr/eb3478ec6609681fbb003b16ff69cd2a/shutterstock_1116349802.jpg",
          "details": {
            "size": 380940,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_1116349802.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1psTPdZxxDxNtccwXnmRjx",
      "type": "Asset",
      "createdAt": "2022-10-14T15:30:13.315Z",
      "updatedAt": "2022-10-14T15:30:33.802Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:30:33.802Z",
      "firstPublishedAt": "2022-10-14T15:30:33.802Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Colombia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1psTPdZxxDxNtccwXnmRjx/4bc384187b440664ebd1782d78222ee1/shutterstock_512992921.jpg",
          "details": {
            "size": 240359,
            "image": {
              "width": 1440,
              "height": 858
            }
          },
          "fileName": "shutterstock_512992921.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "HrTCQBedv2Hkw840mcg6O",
      "type": "Asset",
      "createdAt": "2022-10-14T15:33:28.852Z",
      "updatedAt": "2022-10-14T15:33:45.430Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:33:45.430Z",
      "firstPublishedAt": "2022-10-14T15:33:45.430Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Ecuador"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/HrTCQBedv2Hkw840mcg6O/4651ed0626c0a83a0056501dc8172a26/shutterstock_535492369.jpg",
          "details": {
            "size": 375313,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_535492369.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4vYxl7LE3r5ubioDVHTNDf",
      "type": "Asset",
      "createdAt": "2022-10-14T15:36:52.058Z",
      "updatedAt": "2022-10-14T15:37:05.692Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:37:05.692Z",
      "firstPublishedAt": "2022-10-14T15:37:05.692Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Guatemala"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4vYxl7LE3r5ubioDVHTNDf/5b56c9604b07767747f36379f80ba692/dreamstime_xxl_57936395.jpg",
          "details": {
            "size": 270390,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "dreamstime_xxl_57936395.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "31WC1z1n3zpNtVFmHt1AsH",
      "type": "Asset",
      "createdAt": "2022-10-14T15:39:29.023Z",
      "updatedAt": "2022-10-14T15:40:03.577Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:40:03.577Z",
      "firstPublishedAt": "2022-10-14T15:40:03.577Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Mexico"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/31WC1z1n3zpNtVFmHt1AsH/7a79233af4ed16584f7ae9527f5459d7/istock_000007896192large.jpg",
          "details": {
            "size": 218438,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "istock_000007896192large.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "35RCUDm1KqHOzQOvuNvDvu",
      "type": "Asset",
      "createdAt": "2022-10-14T15:43:07.615Z",
      "updatedAt": "2022-10-14T15:43:24.950Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:43:24.950Z",
      "firstPublishedAt": "2022-10-14T15:43:24.950Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Peru"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/35RCUDm1KqHOzQOvuNvDvu/6b9d95e183e4ca080b1decb51026d6dd/dreamstime_xxl_54060330.jpg",
          "details": {
            "size": 334766,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "dreamstime_xxl_54060330.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "62cfEAYlGEfuFkZ6SPiOWr",
      "type": "Asset",
      "createdAt": "2022-10-14T15:45:51.988Z",
      "updatedAt": "2022-10-14T15:46:08.592Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-14T15:46:08.592Z",
      "firstPublishedAt": "2022-10-14T15:46:08.592Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Venezuela"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/62cfEAYlGEfuFkZ6SPiOWr/4415c9d52572aaff47c3a06e815c7c82/shutterstock_1589555020.jpg",
          "details": {
            "size": 382183,
            "image": {
              "width": 1920,
              "height": 858
            }
          },
          "fileName": "shutterstock_1589555020.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6yY5tE7SrHMyZJtkrZaDge",
      "type": "Asset",
      "createdAt": "2022-10-15T18:07:24.685Z",
      "updatedAt": "2022-10-15T18:07:41.797Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T18:07:41.797Z",
      "firstPublishedAt": "2022-10-15T18:07:41.797Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1565426873118-a17ed65d74b9"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6yY5tE7SrHMyZJtkrZaDge/2f4d39ccc7cc7ae947bc13c049d4729d/photo-1565426873118-a17ed65d74b9.webp",
          "details": {
            "size": 420590,
            "image": {
              "width": 1752,
              "height": 1160
            }
          },
          "fileName": "photo-1565426873118-a17ed65d74b9.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5yXAhuZtTxkhM0TBqXiyac",
      "type": "Asset",
      "createdAt": "2022-10-15T18:16:39.543Z",
      "updatedAt": "2022-10-15T18:18:36.488Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T18:18:36.488Z",
      "firstPublishedAt": "2022-10-15T18:18:36.488Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1590089349708-9842d3f6ca25"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5yXAhuZtTxkhM0TBqXiyac/b8b983d32e39a47b5aaaa558bd009057/photo-1590089349708-9842d3f6ca25.webp",
          "details": {
            "size": 507140,
            "image": {
              "width": 1548,
              "height": 1161
            }
          },
          "fileName": "photo-1590089349708-9842d3f6ca25.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7hRcakB67MATd9p0nAZACn",
      "type": "Asset",
      "createdAt": "2022-10-15T18:37:28.119Z",
      "updatedAt": "2022-10-15T18:37:45.603Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T18:37:45.603Z",
      "firstPublishedAt": "2022-10-15T18:37:45.603Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1513622118278-bc041b3c13ed"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7hRcakB67MATd9p0nAZACn/826cd303282ce4270e5c617c2cfd38f9/photo-1513622118278-bc041b3c13ed.webp",
          "details": {
            "size": 169532,
            "image": {
              "width": 900,
              "height": 600
            }
          },
          "fileName": "photo-1513622118278-bc041b3c13ed.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6MMILXiIeUsQPE5lmiusy",
      "type": "Asset",
      "createdAt": "2022-10-15T18:44:46.445Z",
      "updatedAt": "2022-10-15T18:45:27.998Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T18:45:27.998Z",
      "firstPublishedAt": "2022-10-15T18:45:27.998Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1467269204594-9661b134dd2b"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6MMILXiIeUsQPE5lmiusy/453f1e85c023dd6a3dff6166baeada90/photo-1467269204594-9661b134dd2b.webp",
          "details": {
            "size": 157482,
            "image": {
              "width": 900,
              "height": 601
            }
          },
          "fileName": "photo-1467269204594-9661b134dd2b.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "TSgBnwmlm1ZNSq6SPXIo3",
      "type": "Asset",
      "createdAt": "2022-10-15T19:03:24.925Z",
      "updatedAt": "2022-10-15T19:03:36.199Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:03:36.199Z",
      "firstPublishedAt": "2022-10-15T19:03:36.199Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1431274172761-fca41d930114"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/TSgBnwmlm1ZNSq6SPXIo3/a25506d33178b5340bbea8b8f550a3dc/photo-1431274172761-fca41d930114.webp",
          "details": {
            "size": 100578,
            "image": {
              "width": 900,
              "height": 600
            }
          },
          "fileName": "photo-1431274172761-fca41d930114.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "58pPeco8DOzq4MdDXLjlfR",
      "type": "Asset",
      "createdAt": "2022-10-15T19:16:17.511Z",
      "updatedAt": "2022-10-15T19:16:34.359Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:16:34.359Z",
      "firstPublishedAt": "2022-10-15T19:16:34.359Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1588952620690-6f7dcdd12b0e"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/58pPeco8DOzq4MdDXLjlfR/d14b58c6f4ae30190c480665f2676cd1/photo-1588952620690-6f7dcdd12b0e.webp",
          "details": {
            "size": 772494,
            "image": {
              "width": 1740,
              "height": 1160
            }
          },
          "fileName": "photo-1588952620690-6f7dcdd12b0e.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5EY1fg577JaqWqde0M0uum",
      "type": "Asset",
      "createdAt": "2022-10-15T19:17:34.948Z",
      "updatedAt": "2022-10-15T19:17:48.583Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:17:48.583Z",
      "firstPublishedAt": "2022-10-15T19:17:48.583Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1604180989431-aa4e1ab13847"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5EY1fg577JaqWqde0M0uum/1fb552ca8671122439d03bfadeda12a8/photo-1604180989431-aa4e1ab13847.webp",
          "details": {
            "size": 448250,
            "image": {
              "width": 1746,
              "height": 1161
            }
          },
          "fileName": "photo-1604180989431-aa4e1ab13847.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3spkeFelsu4Qw5C7ZsXeOR",
      "type": "Asset",
      "createdAt": "2022-10-15T19:22:00.696Z",
      "updatedAt": "2022-10-15T19:22:14.549Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:22:14.549Z",
      "firstPublishedAt": "2022-10-15T19:22:14.549Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1606503391282-df793e79b892"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/3spkeFelsu4Qw5C7ZsXeOR/1ed589b345725744366ce7ce155bf63a/photo-1606503391282-df793e79b892.webp",
          "details": {
            "size": 994926,
            "image": {
              "width": 1740,
              "height": 1160
            }
          },
          "fileName": "photo-1606503391282-df793e79b892.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "wG64OvQtRNKOYww4mp5Bk",
      "type": "Asset",
      "createdAt": "2022-10-15T19:31:19.027Z",
      "updatedAt": "2022-10-15T19:31:35.373Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:31:35.373Z",
      "firstPublishedAt": "2022-10-15T19:31:35.373Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1542835435-4fa357baa00b"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/wG64OvQtRNKOYww4mp5Bk/f42470d956248e385605b3ee908568e6/photo-1542835435-4fa357baa00b.webp",
          "details": {
            "size": 189464,
            "image": {
              "width": 982,
              "height": 1160
            }
          },
          "fileName": "photo-1542835435-4fa357baa00b.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "6lLhswUrQuEemgGuNkSGeH",
      "type": "Asset",
      "createdAt": "2022-10-15T19:35:23.606Z",
      "updatedAt": "2022-10-15T19:35:38.571Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:35:38.571Z",
      "firstPublishedAt": "2022-10-15T19:35:38.571Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1518105779142-d975f22f1b0a"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/6lLhswUrQuEemgGuNkSGeH/d54c2a6d42f66f9fcef5c75aed33cf4d/photo-1518105779142-d975f22f1b0a.webp",
          "details": {
            "size": 655726,
            "image": {
              "width": 1740,
              "height": 1161
            }
          },
          "fileName": "photo-1518105779142-d975f22f1b0a.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7jCZcUaVomwXkadSb5NMnz",
      "type": "Asset",
      "createdAt": "2022-10-15T19:36:29.662Z",
      "updatedAt": "2022-10-15T19:36:49.013Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:36:49.013Z",
      "firstPublishedAt": "2022-10-15T19:36:49.013Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1572989994359-ae5afc3a3efe"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7jCZcUaVomwXkadSb5NMnz/c49a51813560fd9ffab76b6e2d7cdbec/photo-1572989994359-ae5afc3a3efe.webp",
          "details": {
            "size": 190882,
            "image": {
              "width": 774,
              "height": 1161
            }
          },
          "fileName": "photo-1572989994359-ae5afc3a3efe.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "4vkiW60a8WFLleqpDROs9X",
      "type": "Asset",
      "createdAt": "2022-10-15T19:47:51.306Z",
      "updatedAt": "2022-10-15T19:48:05.356Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 3,
      "publishedAt": "2022-10-15T19:48:05.356Z",
      "firstPublishedAt": "2022-10-15T19:48:05.356Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      },
      "publishedCounter": 1,
      "version": 4,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "628Zil6MamDCjtaoDNqnoZ"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "photo-1513564774965-ac25ddf81e1e"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/4vkiW60a8WFLleqpDROs9X/fc6aecc665fdb2546a6faa24f570ffb9/photo-1513564774965-ac25ddf81e1e.webp",
          "details": {
            "size": 151734,
            "image": {
              "width": 900,
              "height": 601
            }
          },
          "fileName": "photo-1513564774965-ac25ddf81e1e.webp",
          "contentType": "image/webp"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "1N3JU2FBsi6F01merecjgu",
      "type": "Asset",
      "createdAt": "2022-10-16T08:28:55.194Z",
      "updatedAt": "2022-10-16T08:29:17.285Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:29:17.285Z",
      "firstPublishedAt": "2022-10-16T08:29:17.285Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Oceania "
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/1N3JU2FBsi6F01merecjgu/e68aa33a22a42c84a228ad406cf56141/dreamstime_l_12946926.jpg",
          "details": {
            "size": 99249,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "dreamstime_l_12946926.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3M626SsvG3oRsOcfpWrDOQ",
      "type": "Asset",
      "createdAt": "2022-10-16T08:48:02.176Z",
      "updatedAt": "2022-10-16T08:48:24.516Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:48:24.516Z",
      "firstPublishedAt": "2022-10-16T08:48:24.516Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Africa"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/3M626SsvG3oRsOcfpWrDOQ/64eadc8fb211b13ea01b14dd46b60dbf/shutterstock_1024979566.jpg",
          "details": {
            "size": 83627,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "shutterstock_1024979566.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "724MWLra9VKHWQfQpSjRsC",
      "type": "Asset",
      "createdAt": "2022-10-16T08:48:38.533Z",
      "updatedAt": "2022-10-16T08:48:52.929Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:48:52.929Z",
      "firstPublishedAt": "2022-10-16T08:48:52.929Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Asia"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/724MWLra9VKHWQfQpSjRsC/ec10437a44aeedd15e9b74ecea049dc3/shutterstock_75696943.jpg",
          "details": {
            "size": 152394,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "shutterstock_75696943.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "7mtQrf6TR1BWUowQX63Gri",
      "type": "Asset",
      "createdAt": "2022-10-16T08:49:17.510Z",
      "updatedAt": "2022-10-16T08:49:41.139Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:49:41.139Z",
      "firstPublishedAt": "2022-10-16T08:49:41.139Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Europe"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/7mtQrf6TR1BWUowQX63Gri/72909a721eb9fa36e3e62fd5e5c82b49/dreamstime_l_55907961.jpg",
          "details": {
            "size": 69714,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "dreamstime_l_55907961.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "5vLONAzKflUkG9kNAYkiG9",
      "type": "Asset",
      "createdAt": "2022-10-16T08:49:57.181Z",
      "updatedAt": "2022-10-16T08:50:12.505Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:50:12.505Z",
      "firstPublishedAt": "2022-10-16T08:50:12.505Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "Latin America"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/5vLONAzKflUkG9kNAYkiG9/3e51a5755da65ca0c2dab0ec5eaacb44/dreamstime_m_11240028tif.jpg",
          "details": {
            "size": 71041,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "dreamstime_m_11240028tif.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  },
  {
    "metadata": {
      "tags": [
      ]
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "qiq9w8fj2md5"
        }
      },
      "id": "3PHf4B6wI9zyVPH5IqspMO",
      "type": "Asset",
      "createdAt": "2022-10-16T08:50:37.730Z",
      "updatedAt": "2022-10-16T08:50:53.454Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 4,
      "publishedAt": "2022-10-16T08:50:53.454Z",
      "firstPublishedAt": "2022-10-16T08:50:53.454Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      },
      "publishedCounter": 1,
      "version": 5,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "047OAvEO8h0ceV8jg7dX8E"
        }
      }
    },
    "fields": {
      "title": {
        "en-US": "North America"
      },
      "description": {
        "en-US": ""
      },
      "file": {
        "en-US": {
          "url": "//images.ctfassets.net/qiq9w8fj2md5/3PHf4B6wI9zyVPH5IqspMO/ec20639eb7ea53f4931805559c4cbdf2/dreamstime_xxl_45275518.jpg",
          "details": {
            "size": 119834,
            "image": {
              "width": 1440,
              "height": 372
            }
          },
          "fileName": "dreamstime_xxl_45275518.jpg",
          "contentType": "image/jpeg"
        }
      }
    }
  }
]



const cleanedUpDestinations = entries.filter(e => e.sys.contentType.sys.id == "titel").map(e => {
  const { title, body, location, destImage, travelRegion } = e.fields
  return {
    title, body, location, destImage, travelRegion
  }
})

const cleanedUpContinents = entries.filter(e => e.sys.contentType.sys.id == "continentTravelInfo").map(e => {
  const { continentImage, header, descriptionText } = e.fields
  return {
    continentImage, header, descriptionText

  }
})



console.log(cleanedUpDestinations)

cleanedUpDestinations.map(e => {
  const { title, body, location, destImage, travelRegion } = e;
  pool.query(`
        INSERT INTO destinations (title, body, location, destImage, travelRegion)
        VALUES ($1, $2, $3, $4, $5)`, [title, body, location, destImage, travelRegion])
})



cleanedUpContinents.map(e => {
  const { continentImage, header, descriptionText } = e;
  pool.query(`
        INSERT INTO continents (title, body, location, destImage, travelRegion)
        VALUES ($1, $2, $3)`, [continentImage, header, descriptionText])
})

// .post((req, res) => {
//     contdata.forEach(item => {
//       const imgarr = []
//       item.images.map(i => imgarr.push(i.url))
//       const fields = [item.name, item.overview, imgarr, item.map.lat, item.map.lon];
//       db.query(`INSERT INTO continents (continent, overview, images, latitude, longitude)
//       VALUES ($1, $2, $3, $4, $5);`, fields,
//       (error, results) => {
//         if (error) { res.send(error) }
//         res.json(results.rows)
//       })
//     })
//   })