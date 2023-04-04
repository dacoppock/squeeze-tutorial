function expandIt(el) 
{
    whichEl = eval(el);
    whichIm = event.srcElement;
    if (whichEl.style.display == "none") 
    {
        whichEl.style.display = "";
        whichIm.src = "../Images/triUp.gif";        
    }
    else 
    {
        whichEl.style.display = "none";
        whichIm.src = "../Images/triDown.gif";
    }
}


var gDeals = new Array();
var gLength = 0;
var ptr = -1;

function showDealNames()
{
  var str = '';
  for (var i=0; i < gDeals.length; i++)
  {
     str += 'Deal: ' + i + ' ' + gDeals[i].dealName + '\n';
  }
  alert(str);

}

function sendHomeMadeDeal()
{
   //var dealName = parent.main.document.all.dn.value;
   var dealName = parent.main.document.getElementById("dn").value;
   var cmt = parent.main.document.all.commentary.value;
   var ns = parent.main.document.all.ns.value;
   var nh = parent.main.document.all.nh.value;
   var nd = parent.main.document.all.nd.value;
   var nc = parent.main.document.all.nc.value;
   var ws = parent.main.document.all.ws.value;
   var wh = parent.main.document.all.wh.value;
   var wd = parent.main.document.all.wd.value;
   var wc = parent.main.document.all.wc.value;
   var es = parent.main.document.all.es.value;
   var eh = parent.main.document.all.eh.value;
   var ed = parent.main.document.all.ed.value;
   var ec = parent.main.document.all.ec.value;
   var ss = parent.main.document.all.ss.value;
   var sh = parent.main.document.all.sh.value;
   var sd = parent.main.document.all.sd.value;
   var sc = parent.main.document.all.sc.value;
   var idx = parent.main.document.all.level.selectedIndex;
   var level = parent.main.document.all.level[idx].value;
   idx = parent.main.document.all.trump.selectedIndex;
   var trump = parent.main.document.all.trump[idx].value;
   setDeal(dealName,ns,nh,nd,nc,ws,wh,wd,wc,es,eh,ed,ec,
            ss,sh,sd,sc,trump, cmt, level);
   setPtr(gDeals.length - 1);
   //showDealNames();
   parent.main.location='playhand.html';
}

function setPtr()
{
   ptr = arguments[0];
}

function remoteGetAttribution()
{
  return gDeals[ptr].getAttribution();
}

function remoteGetDealName()
{
  return gDeals[ptr].getDealName();
}

function remoteGetNS()
{
  return gDeals[ptr].getNS();
}

function remoteGetNH()
{
  return gDeals[ptr].getNH();
}

function remoteGetND()
{
  return gDeals[ptr].getND();
}

function remoteGetNC()
{
  return gDeals[ptr].getNC();
}

function remoteGetWS()
{
  return gDeals[ptr].getWS();
}

function remoteGetWH()
{
  return gDeals[ptr].getWH();
}

function remoteGetWD()
{
  return gDeals[ptr].getWD();
}

function remoteGetWC()
{
  return gDeals[ptr].getWC();
}

function remoteGetES()
{
  return gDeals[ptr].getES();
}

function remoteGetEH()
{
  return gDeals[ptr].getEH();
}

function remoteGetED()
{
  return gDeals[ptr].getED();
}

function remoteGetEC()
{
  return gDeals[ptr].getEC();
}

function remoteGetSS()
{
  return gDeals[ptr].getSS();
}

function remoteGetSH()
{
  return gDeals[ptr].getSH();
}

function remoteGetSD()
{
  return gDeals[ptr].getSD();
}

function remoteGetSC()
{
  return gDeals[ptr].getSC();
}

function remoteGetTrump()
{
  return gDeals[ptr].getTrump();
}

function remoteGetCommentary()
{
  return gDeals[ptr].getCommentary();
}

function remoteGetLevel()
{
  return gDeals[ptr].getLevel();
}

function setDeal()
{
   var pos = gDeals.length;
   gDeals[pos] = new Object;
   gDeals[pos].dealName = arguments[0];
   gDeals[pos].ns = arguments[1];
   gDeals[pos].nh = arguments[2];
   gDeals[pos].nd = arguments[3];
   gDeals[pos].nc = arguments[4];
   gDeals[pos].ws = arguments[5];
   gDeals[pos].wh = arguments[6];
   gDeals[pos].wd = arguments[7];
   gDeals[pos].wc = arguments[8];
   gDeals[pos].es = arguments[9];
   gDeals[pos].eh = arguments[10];
   gDeals[pos].ed = arguments[11];
   gDeals[pos].ec = arguments[12];
   gDeals[pos].ss = arguments[13];
   gDeals[pos].sh = arguments[14];
   gDeals[pos].sd = arguments[15];
   gDeals[pos].sc = arguments[16];
   gDeals[pos].trump = arguments[17];
   gDeals[pos].commentary = arguments[18];
   gDeals[pos].level = arguments[19];
   gDeals[pos].attribution = arguments[20];
   gDeals[pos].getDealName = getDealName;
   gDeals[pos].getNS = getNS;
   gDeals[pos].getNH = getNH;
   gDeals[pos].getND = getND;
   gDeals[pos].getNC = getNC;
   gDeals[pos].getWS = getWS;
   gDeals[pos].getWH = getWH;
   gDeals[pos].getWD = getWD;
   gDeals[pos].getWC = getWC;
   gDeals[pos].getES = getES;
   gDeals[pos].getEH = getEH;
   gDeals[pos].getED = getED;
   gDeals[pos].getEC = getEC;
   gDeals[pos].getSS = getSS;
   gDeals[pos].getSH = getSH;
   gDeals[pos].getSD = getSD;
   gDeals[pos].getSC = getSC;
   gDeals[pos].getTrump = getTrump;
   gDeals[pos].getCommentary = getCommentary;
   gDeals[pos].getLevel = getLevel;
   gDeals[pos].getAttribution = getAttribution;
}

function getAttribution()
{
   return this.attribution;
}

function getDealName()
{
   return this.dealName;
}

function getNS()
{
   return this.ns;
}

function getNH()
{
   return this.nh;
}

function getND()
{
   return this.nd;
}

function getNC()
{
   return this.nc;
}

function getWS()
{
   return this.ws;
}

function getWH()
{
   return this.wh;
}

function getWD()
{
   return this.wd;
}

function getWC()
{
   return this.wc;
}

function getES()
{
   return this.es;
}

function getEH()
{
   return this.eh;
}

function getED()
{
   return this.ed;
}

function getEC()
{
   return this.ec;
}

function getSS()
{
   return this.ss;
}

function getSH()
{
   return this.sh;
}

function getSD()
{
   return this.sd;
}

function getSC()
{
   return this.sc;
}


function getTrump()
{
   return this.trump;
}

function getCommentary()
{
   return this.commentary;
}

function getLevel()
{
   return this.level;
}

function loadDeals()
{
   var cmt = '';
   /* template
   cmt = '';
   setDeal('Name','ns','nh','nd','nc','ws','wh','wd','wc','es','eh','ed','ec',
            'ss','sh','sd','sc','strain', cmt, lvl, attrib);

   */

   //0
   cmt = '';
   cmt += 'West preempts with 2 spades, then leads the spade Q. Making 7 is possible. ';
   cmt += 'Solution can be found for same hand in Miscellaneous list. ';
   cmt += 'Features of this panel: 1) West always has opening lead; 2) Click a card to play it, ';
   cmt += 'click again to unplay it; 3) Some rules for squeeze play can be displayed by selecting ';
   cmt += 'from the drop down list in upper right hand corner; 4) After several tricks, can restart ';
   cmt += 'at a particular trick by entering trick number and clicking restart.';
   setDeal('Sample','A54','A95','AK4','9764','QJT973','J76','T85','8','62','QT2','QJ9762','Q3',
            'K8','K843','3','AKJT52','Club', cmt, 6);
   
   //1
   //Love Excercise 1
   cmt = '';
   cmt += 'West leads the spade 9.';
   setDeal('Exercise 1','65','AK42','AJ83','J65','987','J7','T65','87432','KQJ42','T9653','9','T9',
            'AT3','Q8','KQ742','AKQ','NT', cmt, 7, 'love');
   
   //2
   //Love Excercise 2
   cmt = '';
   cmt += 'West leads the club 2. E/W take first 4 club tricks, then west continues with diamond J.';
   setDeal('Exercise 2','KQT3','864','Q754','74','762','J9','JT93','AQT2','984','T753','K82','K63',
            'AJ5','AKQ2','A6','J985','NT', cmt, 3, 'love');
   
   //3
   //Love Excercise 3
   cmt = '';
   cmt += 'West leads the heart K, then heart A.';
   setDeal('Exercise 3','K72','96','Q752','AK76','83','AK7','J982','JT54','654','JT85432','T','92',
            'AQJT9','Q','AK63','Q83','Spade', cmt, 6, 'love');
    
   //4
   //Love Excercise 4
   cmt = '';
   cmt += 'East overcalls one spade and west leads spade J.';
   setDeal('Exercise 4','','KQT82','J762','AJT7','J7','5','T8543','Q9532','QT98643','J976','9','4',
            'AK52','A43','AKQ','K86','NT', cmt, 7, 'love');

   //5
   //Love Excercise 5
   cmt = '';
   cmt += 'West leads heart Q.';
   setDeal('Exercise 5','KQJ743','A5','A42','K4','95','QJT92','J53','652','T82','8743','K7','JT97',
            'A6','K6','QT986','AQ83','NT', cmt, 7, 'love');
  
   //6
   //Love Excercise 6
   cmt = '';
   cmt += 'West leads club Q.';
   setDeal('Exercise 6','AK32','A965','A9','AK9','T976','7','T765','QJT6','J8','843','J8432','874',
            'Q54','KQJT2','KQ','532','Heart', cmt, 7, 'love'); 
 
   //7
   //Love Excercise 7
   cmt = '';
   cmt += 'The final contract is doubled by East. West leads heart 6.';
   setDeal('Exercise 7','A3','A8','AKQJ87','AK7','T986','Q97632','T','65','KQ7','KJT','963','JT92',
            'J542','54','542','Q843','NT', cmt, 6, 'love'); 
 
   //8
   //Love Excercise 8
   cmt = '';
   cmt += 'West overcalls one spade, East bids clubs; opening lead is spade Q.';
   setDeal('Exercise 8','AK42','75','K742','763','QJT93','T832','AQT8','','7','9','J9653','KQJT95',
            '865','AKQJ64','','A842','Heart', cmt, 4, 'love'); 

   //9
   //Love Excercise 9
   cmt = '';
   cmt += 'West leads club 2. Playing for a squeeze is NOT the correct play.';
   setDeal('Exercise 9','AKQ2','Q4','9842','875','T643','872','KJ','JT62','J97','953','QT653','Q9',
            '85','AKJT6','A7','AK43','Heart', cmt, 6, 'love'); 

   //10
   //Love Excercise 10
   cmt = '';
   cmt += 'West leads heart J.';
   setDeal('Exercise 10','K2','KQ5','A8732','963','863','JT98','96','7542','754','7643','KQT','KJT',
            'AQJT9','A2','J54','AQ8','Spade', cmt, 6, 'love'); 

   //11
   //Love Excercise 11
   cmt = '';
   cmt += 'West leads heart 9.';
   setDeal('Exercise 11','7432','A6','QJ7','K762','K98','9874','T863','Q5','AJT65','2','952','T943',
            'Q','KQJT53','AK4','AJ8','Heart', cmt, 6, 'love'); 

   //12
   //Love Excercise 12
   cmt = '';
   cmt += 'West overcalls two diamonds, then leads diamond K, A and shifts to heart 9.';
   setDeal('Exercise 12','AK3','AT63','J5','Q864','8652','987','AKQ73','5','QT4','QJ52','982','T73',
            'J97','K4','T64','AKJ92','Club', cmt, 5, 'love'); 

   //13
   //Love Excercise 13
   cmt = '';
   cmt += 'West leads club 8.';
   setDeal('Exercise 13','AK32','A965','A9','AK5','J8','843','J8432','874','T976','7','QT76','QJT6',
            'Q54','KQJT2','K5','932','Heart', cmt, 7, 'love'); 

   //14
   //Love Excercise 14
   cmt = '';
   cmt += 'East opens the bidding with one heart, and West leads heart Q. Two more hearts are ';
   cmt += 'cashed by East, then spade 3 is led.';
   setDeal('Exercise 14','AJ4','T74','AKJ','AQJ9','T76','Q9','98642','763','3','AK862','QT7','KT52',
            'KQ9852','J53','53','84','Spade', cmt, 4, 'love'); 

   //15
   //Love Excercise 15
   cmt = '';
   cmt += 'West overcalls one spade, then leads spade K.';
   setDeal('Exercise 15','T72','J863','AKQ','A53','KQJ84','9','97','KJT92','9653','T','JT432','874',
            'A','AKQ7542','865','Q6','Heart', cmt, 6, 'love'); 

   //16
   //Love Excercise 16
   cmt = '';
   cmt += 'West overcalls two clubs, East advances with two spades; West wins three club tricks, ';
   cmt += 'then continues with spade K.';
   setDeal('Exercise 16','AT7','K84','K654','T83','K2','T72','Q9','AKQ764','QJ9865','96','T873','9',
            '43','AQJ53','AJ2','J52','Heart', cmt, 3, 'love'); 

   //17
   //Love Excercise 17
   cmt = '';
   cmt += 'West leads Spade 10.';
   setDeal('Exercise 17','K73','J843','7432','A2','T985','65','95','97543','642','T7','JT86','KJT8',
            'AQJ','AKQ92','AKQ','Q6','Heart', cmt, 7, 'love'); 

   //18
   //Love Excercise 18
   cmt = '';
   cmt += 'After West opens one diamond, a complicated auction leads to four hearts doubled. West leads ';
   cmt += 'diamond K and shifts to club 2. Declarer guesses right and club J forces A, club 7 continued. ';
   cmt += 'In with heart A, west continues with club Q.';
   setDeal('Exercise 18','AK653','KQ2','2','KJ84','T94','A','AKT53','QT92','QJ','873','QJ864','A76',
            '872','JT9654','97','53','Heart', cmt, 4, 'love'); 

   //19
   //Love Excercise 19
   cmt = '';
   cmt += 'West overcalls one spade, doubles final contract, and leads spade J.';
   setDeal('Exercise 19','AQ9','7','K762','AK852','KJT84','2','QT','QJ763','752','98654','J93','T4',
            '63','AKQJT3','A854','9','Heart', cmt, 7, 'love'); 

   //20
   //Love Excercise 20
   cmt = '';
   cmt += 'East opens with one club, west leads club 9; after three clubs, east continues with daimond 5.';
   setDeal('Exercise 20','QT7','QJ7','AK86','765','J932','64','QT972','92','K865','85','53','AKQT4',
            'A4','AKT932','J4','J83','Heart', cmt, 4, 'love'); 

   //21
   //Love Excercise 21
   cmt = '';
   cmt += 'This is a defense problem for east. West opens one diamond, bids three clubs in a contested ';
   cmt += 'auction, cashes three top clubs, then continues with spade K. East can save ';
   cmt += 'the day (interchange diamond 5 with 6, and squeeze cannot be stopped).';
   setDeal('Exercise 21','AT74','AJT','AQ5','762','KQJ','','KJT83','AKQT5','9852','9873','642','93',
            '63','KQ6542','97','J84','Heart', cmt, 4, 'love'); 

   //22
   //Love Excercise 24
   cmt = '';
   cmt += 'East preempts with 3 clubs, N/S reach 7 spades, and West leads a trump.';
   setDeal('Exercise 24','QJ73','QT965','A762','','4','KJ872','KJ93','J94','6','43','Q854','AKQT82',
            'AKT9852','A','T','7653','Spade', cmt, 7, 'love');
   
   //23
   //Love Excercise 25
   cmt = '';
   cmt += 'West bids clubs twice, N/S reach 5 diamonds, West leads K, Q, and 8 of clubs.';
   setDeal('Exercise 25','K2','AT74','983','7653','95','K96','JT5','AKQJ8','JT873','QJ532','6','T2',
            'AQ64','8','AKQ742','94','Diamond', cmt, 5, 'love');
   
   //24
   //Love Excercise 26
   cmt = '';
   cmt += 'West leads spade J.';
   setDeal('Exercise 26','A6542','T652','A2','T7','JT973','9','T754','532','8','J873','K9863','964',
            'KQ','AKQ4','QJ','AKQJ8','NT', cmt, 7, 'love');
   
   //25
   //Love Excercise 27
   cmt = '';
   cmt += 'West leads club K.';
   setDeal('Exercise 27','AQJ64','984','AT5','J6','T9873','3','832','KQ83','2','JT76','964','T9742',
            'K5','AKQ52','KQJ7','A5','NT', cmt, 7, 'love');
   
   //26
   //Love Excercise 28
   cmt = '';
   cmt += 'West leads spade 2.';
   setDeal('Exercise 28','8743','AK72','974','T4','JT52','J65','JT53','97','Q9','QT93','62','86532',
            'AK6','84','AKQ8','AKQJ','NT', cmt, 6, 'love');
   
   //27
   //Love Excercise 29
   cmt = '';
   cmt += 'West leads club 9.';
   setDeal('Exercise 29','AK','T954','A864','AT3','94','J8632','J975','95','5','KQ7','KT32','QJ862',
            'QJT87632','A','Q','K74','Spade', cmt, 6, 'love');
   
  //28
   //Love Excercise 30
   cmt = '';
   cmt += 'West leads club 10.';
   setDeal('Exercise 30','AK64','KQ95','74','764','J852','64','Q82','T982','T73','JT83','JT93','A5',
            'Q9','A72','AK65','KQJ3','NT', cmt, 6, 'love');
   
   //29
   //Love Excercise 31
   cmt = '';
   cmt += 'West leads spade 7. East wins the K and returns the 4. West wins and continues with diamond 9.';
   setDeal('Exercise 31','Q952','K8','T6','AKQ53','AJ873','975','984','42','K4','JT43','KQ75','JT8',
            'T6','AQ62','AJ32','976','NT', cmt, 3, 'love');
   
   //30
   //Love Excercise 32
   cmt = '';
   cmt += 'West overcalls one spade, leads the spade K and A, followed by the spade 2 (east ruffing).';
   setDeal('Exercise 32','JT53','T54','KQ54','52','AKQ82','J72','972','97','96','83','JT63','QT863',
            '74','AKQ96','A8','AKJ4','Heart', cmt, 4, 'love');
   
   //31
   //Love Excercise 33
   cmt = '';
   cmt += 'West leads diamond 5; east wins K, A and continues with the 10.';
   setDeal('Exercise 33','AKQJ','A42','62','9653','7632','Q763','J875','8','985','985','AKT','JT72',
            'T4','KJT','Q943','AKQ4','NT', cmt, 3, 'love');
   
   //32
   //Love Excercise 34
   cmt = '';
   cmt += 'West leads spade 9. Diamond K and Q reveal 4-1 break, so heart Q is led to A; East continues ';
   cmt += 'with heart J.';
   setDeal('Exercise 34','AKQT2','Q','KQ4','KJT7','986','763','J976','Q52','743','AJT54','2','9843',
            'J5','K982','AT853','A6','NT', cmt, 6, 'love');
   
   //33
   //Love Excercise 35
   cmt = '';
   cmt += 'East preempts with three diamonds; west leads diamond 9.';
   setDeal('Exercise 35','AT','AT2','A653','A986','954','J965','98','JT74','QJ32','','KQJT742','32',
            'K876','KQ8743','','KQ5','Heart', cmt, 7, 'love');
   
   //34
   //Love Excercise 36
   cmt = '';
   cmt += 'West leads club 3. Declarer ducks and east continues with club 10.';
   setDeal('Exercise 36','QT5','AK85','64','A654','K76','J9','9832','J973','J9832','T432','T5','QT',
            'A4','Q76','AKQJ7','K82','NT', cmt, 6, 'love');
   
   //35
   //Love Excercise 37
   cmt = '';
   cmt += 'West leads diamond J.';
   setDeal('Exercise 37','KQ8','6','AKQ62','AKQ4','T64','K975','JT98','J7','93','Q832','53','T9863',
            'AJ752','AJT4','74','52','NT', cmt, 7, 'love');
   
   //36
   //Love Excercise 38
   cmt = '';
   cmt += "West leads club 3. Not a perfect analysis by Love here, because after three rounds of spades (";
   cmt += "finessing the J), east's play of spade Q is not a false card from QT93.";
   setDeal('Exercise 38','K5','T52','A932','A652','T842','84','T54','QT43','Q93','J976','J76','J97',
            'AJ76','AKQ3','KQ8','K8','NT', cmt, 6, 'love');
   
   //37
   //Love Excercise 39
   cmt = '';
   cmt += 'West leads club 10. East ducks, wins club A after declarer crosses to dummy with ';
   cmt += 'heart to the Q and continues with a club. East shifts to diamond J.';
   setDeal('Exercise 39','AK64','KQ95','74','764','J852','64','Q82','T982','T73','JT83','JT93','A5',
            'Q9','A72','AK65','KQJ3','NT', cmt, 6, 'love');
   
   //38
   //Love Excercise 40
   cmt = '';
   cmt += 'West leads diamond J. East wins and shifts to spade 10.';
   setDeal('Exercise 40','AK543','KQ7','Q82','76','Q86','8652','JT943','3','T92','JT93','A','T9854',
            'J7','A4','K765','AKQJ2','NT', cmt, 6, 'love');
   
   //39
   //Love Excercise 99
   cmt = '';
   cmt += 'West leads heart 9. ';
   cmt += 'Type R - restricted; ';
   cmt += 'H Jack is not accompanied by a winner, so free suit lies with South. ';
   cmt += 'After next to last spade, decide which suit East has abandoned; cash those tops ending in South with D Ace. ';
   cmt += 'Final spade executes the type R double squeeze.';
   setDeal('Exercise 99','A54','T2','K8532','AK2','T6','9874','Q96','Q864','7','KQ653','JT7','J953',
            'KQJ9832','AJ','A4','T7','NT', cmt, 7, 'love');
   
   //40
   //Love Excercise 100
   cmt = '';
   cmt += 'West leads spade Q.';
   setDeal('Exercise 100','A8752','A75','K43','54','QJT6','J','Q652','Q973','93','863','JT97','JT82',
            'K4','KQT942','A8','AK6','NT', cmt, 7, 'love');

   //41
   //Love Excercise 101
   cmt = '';
   cmt += 'West preempts with three spades, then leads spade K.';
   setDeal('Exercise 101','A972','6542','83','A96','KQJT64','KT','42','QT3','85','QJ983','T6','J872',
            '3','A7','AKQJ975','K54','Diamond', cmt, 6, 'love'); 

   //42
   //Love Excercise 102
   cmt = '';
   cmt += 'East overcalls one heart. West leads heart 6. Declarer ducks first two hearts.';
   setDeal('Exercise 102','A42','8','A832','AKQJ5','Q863','62','J94','T876','KT','QJT97','QT65','43',
            'J975','AK543','K7','92','NT', cmt, 3, 'love'); 

   //43
   //Love Excercise 103
   cmt = '';
   cmt += 'West leads spade K.';
   setDeal('Exercise 103','984','7','A7','AKJ8764','KQT3','9643','JT5','T3','762','QJT82','Q982','2',
            'AJ5','AK5','K643','Q95','NT', cmt, 7, 'love'); 

   //44
   //Love Excercise 105
   cmt = '';
   cmt += 'West leads club 8. First trick is key.';
   setDeal('Exercise 105','AQ6','AK5','AT8','AJ32','T84','J862','KJ93','85','','QT943','Q762','QT74',
            'KJ97532','7','54','K96','Spade', cmt, 7, 'love'); 

   //45
   //Love Excercise 106
   cmt = '';
   cmt += 'West leads club J. A wins. Diamond 9 led and east allowed to hold. East continues with spade Q.';
   setDeal('Exercise 106','AK63','AK96','9','AQ74','T975','J742','82','JT9','QJ4','Q83','JT654','86',
            '82','T5','AKQ73','K532','NT', cmt, 6, 'love'); 

   //46
   //Love Excercise 108
   cmt = '';
   cmt += 'West leads club Q.';
   setDeal('Exercise 108','AT72','J43','7','AK532','Q86','T85','653','QJT4','K943','Q976','94','876',
            'J5','AK2','AKQJT82','9','Diamond', cmt, 7, 'love'); 

   //47
   //Love Excercise 109
   cmt = '';
   cmt += 'West overcalls one spade, and leads spade K.';
   setDeal('Exercise 109','A83','QT86','AK7','J87','KQT94','J','QT5','9532','752','43','J9863','QT6',
            'J6','AK9752','42','AK4','Heart', cmt, 6, 'love'); 

   //48
   //Love Excercise 110
   cmt = '';
   cmt += 'West leads club J.';
   setDeal('Exercise 110','K752','AK6','Q6','KQ54','986','T52','J93','JT97','','QJ9743','KT8542','6',
            'AQJT43','8','A7','A832','Spade', cmt, 7, 'love'); 

   //49
   //Love Excercise 111
   cmt = '';
   cmt += 'West leads club 3.';
   setDeal('Exercise 111','K643','A3','J9642','T5','J97','J72','Q8','Q8732','Q82','T965','T75','J94',
            'AT5','KQ84','AK3','AK6','NT', cmt, 7, 'love'); 

   //50
   //Love Problem 30
   cmt = '';
   cmt += 'West leads club 6. Contract can be set if West defends correctly. Must hold spades.';
   setDeal('Problem 30','J96','A942','9','AT983','T82','J8753','42','642','Q543','QT6','Q8','KQJ5',
            'AK7','K','AKJT7653','7','NT', cmt, 7, 'love'); 

   //51(for now)
   //From ACBL Bulletin August, 2002; Kantar Test Your Play #2
   cmt = '';
   cmt += 'After West makes a takeout dbl, N/S end in 6 hearts.  West leads heart A, followed';
   cmt += ' by heart 4.  Given that West holds 4 spades and the club K, the contract can be ';
   cmt += ' made on any layout of the remaining cards. Deal has been slightly revised from bulletin: ';
   cmt += 'diamond 8 and J interchanged. Do not take club finesse early. After next to last heart is ';
   cmt += 'played, play the minor you think west has unguarded.';
   setDeal('Test Your Play(8/02)','A985','Q63','T63','AQ8','JT74','A4','K85','KJ62','63','T5','QJ72','T9753',
            'KQ2','KJ9872','A94','4','Heart', cmt, 6, 'acbl:kantar');

  //52 
   cmt = '';
   cmt += 'West preempts with 2 spades, then leads the spade Q. Making 7 is possible. ';
   cmt += 'On the next to last club west will unguard one of the red suits. If the diamond is unguarded, ';
   cmt += 'the double squeeze becomes type b1. In this case the diamond winners must be cashed before ';
   cmt += 'the last club. The only possible reentry to hand is in spades; hence trick one must be won ';
   cmt += 'with the A!';
   setDeal('Sample Revisited','A54','A95','AK4','9764','QJT973','J76','T85','8','62','QT2','QJ9762','Q3',
            'K8','K843','3','AKJT52','Club', cmt, 6); 
   
   //53
   //Love Exercise 66
   cmt = '';
   cmt += 'West leads club K, followed by club J. ';
   setDeal('Exercise 66','K54','A43','KQ83','T83','QJ3','QJ8','92','AKJ52','9872','9752','4','9764',
            'AT6','KT6','AJT765','Q','Diamond', cmt, 5, 'love');
   //54
   //Love Exercise 67
   cmt = '';
   cmt += 'West leads diamond 8. ';
   setDeal('Exercise 67','4','AJ','AJ973','AQ983','8732','T98532','8','65','6','KQ74','QT54','KT72',
            'AKQJT95','6','K62','J4','Spade', cmt, 7, 'love');
   
   //55
   //Love Excercise 36A
   cmt = '';
   cmt += 'West leads club 3. Declarer ducks and east continues with club 10.';
   setDeal('Exercise 36A','QT5','AK85','64','A654','K76','J932','98','J973','J9832','T4','T532','QT',
            'A4','Q76','AKQJ7','K82','NT', cmt, 6, 'love');
   
   //56
   //Love Exercise 68
   cmt = '';
   cmt += 'West leads heart 4. ';
   setDeal('Exercise 68','A72','Q8','AJ75','K743','9654','97542','2','985','QJ8','KJT63','93','QJ2',
            'KT3','A','KQT864','AT6','NT', cmt, 7, 'love');
   
   //57
   //Love Exercise 69
   cmt = '';
   cmt += 'West leads diamond K. ';
   setDeal('Exercise 69','92','T652','Q63','A865','','AQ7','AKJ94','QT973','J74','J983','T872','J4',
            'AKQT8653','K4','5','K2','Spade', cmt, 4, 'love');
            
   //58
   //Love Exercise 70
   cmt = '';
   cmt += 'West leads club 8. Fails to find the spade switch at trick 2, but instead continues clubs. ';
   setDeal('Exercise 70','AJ95','97543','','9743','874','T62','9874','862','KQT6','AQJ8','','AKQJ5',
            '32','K','AKQJT6532','T','Diamond', cmt, 5, 'love');
   
   //59
   //Love Exercise 71
   cmt = '';
   cmt += 'West leads diamond followed by a ruff, and then a club continuation. ';
   setDeal('Exercise 71','JT6','J43','KQ86','K92','954','AT9652','4','876','8','Q87','AJ732','QJT3',
            'AKQ732','K','T95','A54','Spade', cmt, 4, 'love');
    
   //60
   //Love Exercise 72
   cmt = '';
   cmt += 'West leads heart Q. Discover that Vienna coup with spade A is required! ';
   setDeal('Exercise 72','JT63','83','76','AKQJ9','KQ2','QJT6','JT843','7','985','7542','2','86543',
            'A74','AK9','AKQ95','T2','NT', cmt, 6, 'love');
   
   //61
   //Love Exercise 73
   cmt = '';
   cmt += 'West leads spade Q, after re-bidding hearts in a competitive auction. ';
   setDeal('Exercise 73','A9653','62','32','QT98','QJT8','KJT874','','K72','4','953','9874','J6543',
            'K72','AQ','AKQJT65','A','NT', cmt, 6, 'love');
   
   //62
   //Love Exercise 74
   cmt = '';
   cmt += 'West leads heart K. Three threats north cannot repeat.';
   setDeal('Exercise 74','AKQ3','T76','32','K832','JT97','KQJ43','8','AQ9','84','982','J94','JT764',
            '652','A5','AKQT765','5','Diamond', cmt, 6, 'love');
   
   //63
   //Love Exercise 75
   cmt = '';
   cmt += 'West leads diamond J. Club suit contains double threat.';
   setDeal('Exercise 75','K643','AKQ5','Q2','J74','9875','J43','JT943','9','','T987','K8765','QT82',
            'AQJT2','62','A','AK653','Spade', cmt, 7, 'love');
   
    //64
   //Love Exercise 76
   cmt = '';
   cmt += 'West leads spade J. ';
   setDeal('Exercise 76','AQ52','AQ75','54','875','JT987','T9832','82','3','K43','KJ4','JT96','T94',
            '6','6','AKQ73','AKQJ62','NT', cmt, 7, 'love');
   
   //65
   //Love Exercise 77
   cmt = '';
   cmt += 'West leads diamond 10. ';
   setDeal('Exercise 77','KT2','QT98','KJ','KQ43','976','65','T96432','86','','KJ3','AQ875','JT972',
            'AQJ8543','A742','','A5','Spade', cmt, 7, 'love');
   
   //66
   //Love Exercise 78
   cmt = '';
   cmt += 'West leads club K followed by two rounds of trump. ';
   setDeal('Exercise 78','KJ7','A9543','K652','9','A5','KQJ','J984','AKT8','632','872','T3','J7542',
            'QT984','T6','AQ7','Q63','Spade', cmt, 4, 'love');
   
   //67
   //Love Exercise 79
   cmt = '';
   cmt += 'West leads club 10. ';
   setDeal('Exercise 79','QJ','K765','AK32','K76','5432','J32','84','T954','A76','T984','QT9','J83',
            'KT98','AQ','J765','AQ2','NT', cmt, 6, 'love');
   
   //68
   //Love Problem 23
   cmt = '';
   cmt += 'West leads spade 10, East playing the Q.  ';
   setDeal('Problem 23','854','AKQT87','','A765','T97','9','98732','9843','KQ32','J432','6','KJT2',
            'AJ6','65','AKQJT54','Q','NT', cmt, 7, 'love');
   
   //69
   //Love Problem 24
   cmt = '';
   cmt += 'West leads diamond 2, East wins A, cashes J, continues with spade J.  ';
   setDeal('Problem 24','AK82','653','865','J83','75','J4','KQ72','96542','JT94','QT82','AJ','QT7',
            'Q63','AK97','T943','AK','NT', cmt, 1, 'love');
  
   //70
   //Love Exercise 117
   cmt = '';
   cmt += 'West leads heart J. ';
   setDeal('Exercise 117','K52','T8','72','AKQ632','Q9764','J3','QT65','T7','JT3','Q764','KJ93','98',
            'A8','AK952','A84','J54','NT', cmt, 6, 'love');
   
   //71
   //Love Problem 40
   cmt = '';
   cmt += 'West leads diamond K. ';
   setDeal('Problem 40','75','AK95','JT742','65','J3','QT3','KQ953','J74','T2','J876','A86','KQ98',
            'AKQ9864','42','','AT32','Spade', cmt, 6, 'love');
                                                                                                                                                       
   gLength = gDeals.length;
   return;
}


