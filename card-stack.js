

document.addEventListener('DOMContentLoaded', function () {
    var stack;
    var books = [
        {
          "title": "Moby-Dick; or, The Whale",
          "author": "Herman Melville",
          "year": 1851,
          "excerpts": [
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
            "Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can.",
            "It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can."
          ]
        },
        {
          "title": "Frankenstein; or, The Modern Prometheus",
          "author": "Mary Shelley",
          "year": 1818,
          "excerpts": [
            "You will rejoice to hear that no disaster has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear sister of my welfare and increasing confidence in the success of my undertaking.",
            "I am already far north of London, and as I walk in the streets of Petersburgh, I feel a cold northern breeze play upon my cheeks, which braces my nerves and fills me with delight. Do you understand this feeling?",
            "This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes."
          ]
        },
        {
          "title": "Dracula",
          "author": "Bram Stoker",
          "year": 1897,
          "excerpts": [
            "3 May. Bistritz.—Left Munich at 8:35 P.M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late.",
            "Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets.",
            "I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible."
          ]
        },
        {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year": 1813,
          "excerpts": [
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
            "However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.",
            "\"My dear Mr. Bennet,\" said his lady to him one day, \"have you heard that Netherfield Park is let at last?\" Mr. Bennet replied that he had not."
          ]
        },
        {
          "title": "Jane Eyre",
          "author": "Charlotte Brontë",
          "year": 1847,
          "excerpts": [
            "There was no possibility of taking a walk that day. We had been wandering, indeed, in the leafless shrubbery an hour in the morning; but since dinner (Mrs. Reed, when there was no company, dined early) the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question.",
            "I was glad of it: I never liked long walks, especially on chilly afternoons: dreadful to me was the coming home in the raw twilight, with nipped fingers and toes, and a heart saddened by the chidings of Bessie, the nurse, and humbled by the consciousness of my physical inferiority to Eliza, John, and Georgiana Reed.",
            "The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a sofa by the fireside, and with her darlings about her (for the time neither quarrelling nor crying) looked perfectly happy."
          ]
        },
        {
          "title": "Alice's Adventures in Wonderland",
          "author": "Lewis Carroll",
          "year": 1865,
          "excerpts": [
            "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”",
            "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
            "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be too late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and was just in time to see it pop down a large rabbit-hole under the hedge."
          ]
        },
        {
          "title": "Little Women",
          "author": "Louisa May Alcott",
          "year": 1868,
          "excerpts": [
            "“Christmas won't be Christmas without any presents,” grumbled Jo, lying on the rug.",
            "“It's so dreadful to be poor!” sighed Meg, looking down at her old dress.",
            "“I don't think it's fair for some girls to have plenty of pretty things, and other girls nothing at all,” added little Amy, with an injured sniff."
          ]
        },
        {
          "title": "Treasure Island",
          "author": "Robert Louis Stevenson",
          "year": 1883,
          "excerpts": [
            "Squire Trelawney, Dr. Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17— and go back to the time when my father kept the Admiral Benbow inn and the brown old seaman with the sabre cut first took up his lodging under our roof.",
            "I remember him as if it were yesterday, as he came plodding to the inn door, his sea-chest following behind him in a hand-barrow; a tall, strong, heavy, nut-brown man; his tarry pigtail falling over the shoulder of his soiled blue coat; his hands ragged and scarred, with black, broken nails; and the sabre cut across one cheek, a dirty, livid white.",
            "I remember him looking round the cover and whistling to himself as he did so, and then breaking out in that old sea-song that he sang so often afterwards:"
          ]
        },
        {
          "title": "The Picture of Dorian Gray",
          "author": "Oscar Wilde",
          "year": 1890,
          "excerpts": [
            "The studio was filled with the rich odor of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.",
            "From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-colored blossoms of a laburnum, whose tremulous branches seemed hardly able to bear the burden of a beauty so flamelike as theirs; and now and then the fantastic shadows of birds in flight flitted across the long tussore-silk curtains that were stretched in front of the huge window, producing a kind of momentary Japanese effect, and making him think of those pallid, jade-faced painters of Tokyo who, through the medium of an art that is necessarily immobile, seek to convey the sense of swiftness and motion.",
            "The sullen murmur of the bees shouldering their way through the long unmown grass, or circling with monotonous insistence round the dusty gilt horns of the straggling woodbine, seemed to make the stillness more oppressive."
          ]
        },
        {
          "title": "Anne of Green Gables",
          "author": "Lucy Maud Montgomery",
          "year": 1908,
          "excerpts": [
            "Mrs. Rachel Lynde lived just where the Avonlea main road dipped down into a little hollow, fringed with alders and ladies' eardrops and traversed by a brook that had its source away back in the woods of the old Cuthbert place; it was reputed to be an intricate, headlong brook in its earlier course through those woods, with dark secrets of pool and cascade; but by the time it reached Lynde's Hollow it was a quiet, well-conducted little stream, for not even a brook could run past Mrs. Rachel Lynde's door without due regard for decency and decorum; it probably was conscious that Mrs. Rachel was sitting at her window, keeping a sharp eye on everything that passed, from brooks and children up, and that if she noticed anything odd or out of place she would never rest until she had ferreted out the whys and wherefores thereof.",
            "There are plenty of people in Avonlea and out of it, who can attend closely to their neighbours business by dint of neglecting their own; but Mrs. Rachel Lynde was one of those capable creatures who can manage their own concerns and those of other folks into the bargain.",
            "She was a notable housewife; her work was always done and well done; she ‘ran’ the Sewing Circle, helped run the Sunday-school, and was the strongest prop of the Church Aid Society and Foreign Missions Auxiliary."
          ]
        },
        {
          "title": "The Strange Case of Dr Jekyll and Mr Hyde",
          "author": "Robert Louis Stevenson",
          "year": 1886,
          "excerpts": [
            "Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary, and yet somehow lovable. At friendly meetings, and when the wine was to his taste, something eminently human beaconed from his eye; something indeed which never found its way into his talk, but which spoke not only in these silent symbols of the after-dinner face, but more often and loudly in the acts of his life.",
            "He was austere with himself; drank gin when he was alone, to mortify a taste for vintages; and though he enjoyed the theatre, had not crossed the doors of one for twenty years.",
            "But he had an approved tolerance for others; sometimes wondering, almost with envy, at the high pressure of spirits involved in their misdeeds; and in any extremity inclined to help rather than to reprove."
          ]
        },
        {
          "title": "Wuthering Heights",
          "author": "Emily Brontë",
          "year": 1847,
          "excerpts": [
            "1801.—I have just returned from a visit to my landlord—the solitary neighbour that I shall be troubled with.",
            "This is certainly a beautiful country! In all England, I do not believe that I could have fixed on a situation so completely removed from the stir of society.",
            "A perfect misanthropist’s Heaven: and Mr. Heathcliff and I are such a suitable pair to divide the desolation between us. A capital fellow! He little imagined how my heart warmed towards him when I beheld his black eyes withdraw so suspiciously under their brows, as I rode up, and when his fingers sheltered themselves, with a jealous resolution, still further in his waistcoat, as I announced my name."
          ]
        },
        {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky",
          "year": 1866,
          "excerpts": [
            "On an exceptionally hot evening early in July, a young man came out of the garret in which he lodged in S. Place and walked slowly, as though in hesitation, towards K. bridge.",
            "And yet he was miserable, so miserable that he felt it might be better to put an end to himself.",
            "He had not been home for a year and had not written to anyone, and during all this time he had been haunted by the fear that Dounia might be attacked, and might be unhappy."
          ]
        },
        {
          "title": "Great Expectations",
          "author": "Charles Dickens",
          "year": 1861,
          "excerpts": [
            "My father's family name being Pirrip, and my Christian name Philip, my infant tongue could make of both names nothing longer or more explicit than Pip. So, I called myself Pip, and came to be called Pip.",
            "I give Pirrip as my father's family name on the authority of his tombstone and my sister - Mrs. Joe Gargery, who married the blacksmith. As I never saw my father or my mother, and never saw any likeness of either of them (for their days were long before the days of photographs), my first fancies regarding what they were like, were unreasonably derived from their tombstones.",
            "The shape of the letters on my father's, gave me an odd idea that he was a square, stout, dark man, with curly black hair. From the character and turn of the inscription, “Also Georgiana Wife of the Above,” I drew a childish conclusion that my mother was freckled and sickly."
          ]
        },
        {
          "title": "The Adventures of Tom Sawyer",
          "author": "Mark Twain",
          "year": 1876,
          "excerpts": [
            "TOM! No answer. TOM! No answer. What's gone with that boy, I wonder? You TOM!",
            "No answer. The old lady pulled her spectacles down and looked over them about the room; then she put them up and looked out under them. She seldom or never looked _through_ them for so small a thing as a boy; they were her state pair, the pride of her heart, and were built for “style,” not service—she could have seen through a pair of stove-lids just as well.",
            "She looked perplexed for a moment, and then said, not fiercely, but still loud enough for the furniture to hear:"
          ]
        },
        {
          "title": "The Scarlet Letter",
          "author": "Nathaniel Hawthorne",
          "year": 1850,
          "excerpts": [
            "A throng of bearded men, in sad-colored garments and gray, steeple-crowned hats, inter-mixed with women, some wearing hoods, and others bareheaded, was assembled in front of a wooden edifice, the door of which was heavily timbered with oak, and studded with iron spikes.",
            "The founders of a new colony, whatever Utopia of human virtue and happiness they might originally project, have invariably recognized it among their earliest practical necessities to allot a portion of the virgin soil as a cemetery, and another portion as the site of a prison.",
            "In accordance with this rule, it may safely be assumed that the forefathers of Boston had built the first prison-house somewhere in the vicinity of Cornhill, almost as seasonably as they marked out the first burial-ground, on Isaac Johnson's lot, and round about his grave, which subsequently became the nucleus of all the congregated sepulchres in the old churchyard of King's Chapel."
          ]
        },
        {
          "title": "The Count of Monte Cristo",
          "author": "Alexandre Dumas",
          "year": 1844,
          "excerpts": [
            "On the 24th of February, 1815, the look-out at Notre-Dame de la Garde signalled the three-master, the Pharaon from Smyrna, Trieste, and Naples.",
            "As usual, a pilot put off immediately, and rounding the Château d'If, got on board the vessel between Cape Morgion and Rion island.",
            "\"He, or rather, a man, who, like myself, loves Edmond Dantès. The worthy shipowner, who had, the evening before, quitted Marseilles in order to escape the disagreeable reminiscences of the disguised feast, ascended the staircase, and introduced himself into the chamber at the moment the traveller was leaning on his elbow."
          ]
        },
        {
          "title": "Oliver Twist",
          "author": "Charles Dickens",
          "year": 1838,
          "excerpts": [
            "Among other public buildings in a certain town, which for many reasons it will be prudent to refrain from mentioning, and to which I will assign no fictitious name, there is one anciently common to most towns, great or small: to wit, a workhouse; and in this workhouse was born; on a day and date which I need not trouble myself to repeat, inasmuch as it can be of no possible consequence to the reader, in this stage of the business at all events; the item of mortality whose name is prefixed to the head of this chapter.",
            "For a long time after it was ushered into this world of sorrow and trouble, by the parish surgeon, it remained a matter of considerable doubt whether the child would survive to bear any name at all; in which case it is somewhat more than probable that these memoirs would never have appeared; or, if they had, that being comprised within a couple of pages, they would have possessed the inestimable merit of being the most concise and faithful specimen of biography, extant in the literature of any age or country.",
            "Although I am not disposed to maintain that the being born in a workhouse, is in itself the most fortunate and enviable circumstance that can possibly befall a human being, I do mean to say that in this particular instance, it was the best thing for Oliver Twist that could by possibility have occurred. The fact is, that there was considerable difficulty in inducing Oliver to take upon himself the office of respiration,—a troublesome practice, but one which custom has rendered necessary to our easy existence; and for some time he lay gasping on a little flock mattress, rather unequally poised between this world and the next: the balance being decidedly in favour of the latter."
          ]
        },
        {
          "title": "Les Misérables",
          "author": "Victor Hugo",
          "year": 1862,
          "excerpts": [
            "So long as there shall exist, by virtue of law and custom, decrees of damnation pronounced by society, artificially creating hells amid the civilization of earth, and adding the element of human fate to divine destiny; so long as the three great problems of the century—the degradation of man through pauperism, the corruption of woman through hunger, the crippling of children through lack of light—are unsolved; so long as social asphyxia is possible in any part of the world;—in other words, and with a still wider significance, so long as ignorance and poverty exist on earth, books of the nature of Les Misérables cannot fail to be of use.",
            "HAUTEVILLE HOUSE, 1862.",
            "While one may hesitate to call Victor Hugo's Les Misérables a ‘beach read’, it’s undeniably one of the greatest novels of the 19th century. Sprawling, passionate, and searingly intense, the book takes readers on an unforgettable journey through post-revolutionary France, focusing on the lives and interactions of several characters from various social classes."
          ]
        },
        {
          "title": "David Copperfield",
          "author": "Charles Dickens",
          "year": 1850,
          "excerpts": [
            "Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show. To begin my life with the beginning of my life, I record that I was born (as I have been informed and believe) on a Friday, at twelve o'clock at night.",
            "It was remarked that the clock began to strike, and I began to cry, simultaneously.",
            "In consideration of the day and hour of my birth, it was declared by the nurse, and by some sage women in the neighbourhood who had taken a lively interest in me several months before there was any possibility of our becoming personally acquainted, first, that I was destined to be unlucky in life; and secondly, that I was privileged to see ghosts and spirits; both these gifts inevitably attaching, as they believed, to all unlucky infants of either gender, born towards the small hours on a Friday night."
          ]
        }]      

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    var child;
    var snippet;
    var recommended_title = [];
    var recommended_author = [];
    var recommended_snippet = []

    for (var i=0;i<5;i++) {
        child = document.createElement("li");
        snippet = books[i].excerpts[getRandomInt(3)];
        child.innerHTML = snippet;
        child.setAttribute("title", books[i].title);
        child.setAttribute("author", books[i].author);
        child.setAttribute("snippet", snippet);
        document.getElementsByClassName("stack")[0].appendChild(child);
    }

    stack = window.swing.Stack();
    

    [].forEach.call(document.querySelectorAll('.stack li'), function (targetElement) {
        stack.createCard(targetElement);
        targetElement.classList.add('in-deck');
    });

    stack.on('throwout', function (e) {
        if (e.throwDirection == window.swing.Direction.LEFT) {
          console.log("Disliked");
        }
        else if (e.throwDirection == window.swing.Direction.RIGHT) {
          console.log("Liked");
          recommended_title.push(e.target.getAttribute("title"));
          recommended_author.push(e.target.getAttribute("author"));
          recommended_snippet.push(e.target.getAttribute("snippet"))
        }
        e.target.classList.add('done');
        e.target.classList.remove('in-deck');
        setTimeout(() => { e.target.remove(); }, 400);

        if (document.getElementsByClassName("stack")[0].childElementCount <= 1) {
          //console.log(document.getElementsByClassName("stack")[0].childElementCount);
          showRecommendations();
        }

    });

    stack.on('throwin', function (e) {
        e.target.classList.add('in-deck');
    });

    function showRecommendations() {
      var rec_child;
      var rec_box = document.getElementsByClassName("recommendations")[0];
      for (var i=0;i<=recommended_author.length-1;i++) {
        //console.log(recommended_title[i] + " " + recommended_author[i]);
        rec_child = document.createElement("div");
        rec_child.classList.add("rec-child");
        rec_child.innerHTML = "<h2>" + recommended_title[i] + "</h2>" + recommended_author[i] + "<br>" + "<div class='snippet'>'" + recommended_snippet[i] + "'</div>";
        rec_box.appendChild(rec_child);
      }
      //Make recs visible 
      rec_box.classList.add("visible-recs");
    }

});
