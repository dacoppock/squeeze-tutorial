var dealNameString = '';
var dealNameList = new Array();

function loadDealNames()
{
   var arg = 'dealNameString' + '=';
   var alen = arg.length;
   var clen = document.cookie.length;
   //alert('clen = ' + clen+ ' cookie= ' + document.cookie);
   var i=0;
   while (i < clen)
   {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
      {
         dealNameString = getCookieVal(j);
         loadDealNameList();
         return;
      }
      i = document.cookie.indexOf(" ",i) + 1;
      //alert(i);
      if ( i == 0) break;
   }
   //if we get here there are no saved deals, so clear the select list
   dealNameString = '';
   var el = document.all.saveddeal;
   el.innerHTML = '';
   var opt = null;
   opt = document.createElement('option');
   opt.innerHTML = 'Select...';
   el.appendChild(opt);
   return;
}

function showDeal()
{
   var arg = document.all.dn.value;
   var alen = arg.length;
   var clen = document.cookie.length;
   var i=0;
   var dealString = '';
   while (i < clen)
   {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
      {
         dealString = getCookieVal(j);
         //alert('Deal String: ' + dealString);
         loadTheDeal(dealString);
         return;
      }
      i = document.cookie.indexOf(" ",i) + 1;
      //alert(i);
      if ( i == 0) break;
   }
   dealString = '';
   return;

}

function loadTheDeal(str)
{
   var len = str.length;
   //alert('str=' + str + ' len=' + len);
   var start = 0;
   var end = str.indexOf(',',start);
   document.all.ns.value = str.substring(start+1,end);
   
   start=end+1;
   end = str.indexOf(',',start);
   document.all.nh.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.nd.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.nc.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.ws.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.wh.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.wd.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.wc.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.es.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.eh.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.ed.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.ec.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.ss.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.sh.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.sd.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   document.all.sc.value = str.substring(start,end);

   start=end+1;
   end = str.indexOf(',',start);
   var lidx = str.substring(start,end);
   document.all.level.selectedIndex = lidx;

   start=end+1;
   end = str.indexOf(',',start);
   var tidx = str.substring(start,end);
   document.all.trump.selectedIndex = tidx;

   start=end+1;
   end = str.indexOf('@',start);
   var comm = str.substring(start,end);
   document.all.commentary.value = comm;

}

function loadDealNameList()
{
   var str = dealNameString;
   var len = str.length;
   //alert('str=' + str + ' len=' + len);
   var start = 0;
   var end = str.indexOf(',',start);
   var dealName = '';
   var temp = '';
   var pos = 0;
   dealNameList.length = 0;
   while (len > 0)
   {
      //alert('end: ' + end);
      dealName = str.substring(start,end);
      //alert('dealName= ' + dealName);
      if (dealName != '')
      {
         pos = dealNameList.length;
         dealNameList[pos] = new Object;
         dealNameList[pos].dealName = dealName; 
      }
      temp = str.substring(end+1,len);
      //alert(temp);
      str = temp;
      len = str.length;
      //alert('len: ' + len);
      end = str.indexOf(',',start);
      //i++;
   }
   var el = document.all.saveddeal;
   el.innerHTML = '';
   var opt = null;
   opt = document.createElement('option');
   opt.innerHTML = 'Select...';
   el.appendChild(opt);
   for (var i=0; i < dealNameList.length; i++)
   {
      opt = document.createElement('option');
      opt.innerHTML = dealNameList[i].dealName;
      opt.setAttribute('value',dealNameList[i].dealName);
      el.appendChild(opt);
   }

}

function getCookieVal(offset)
{
   var endstr = document.cookie.indexOf(';', offset);
   if (endstr == -1)
   {
       endstr = document.cookie.length;
   }
   return unescape(document.cookie.substring(offset, endstr));
}


function selectDeal()
{
   //alert('select deal: ' + document.all.saveddeal[document.all.saveddeal.selectedIndex].value);
   document.all.dn.value = document.all.saveddeal[document.all.saveddeal.selectedIndex].value;
   if (document.all.dn.value > ' ')
   {
      showDeal();
   }
}

function show()
{
   var str = '';
   alert('DealNameString = ' + dealNameString);
   for (var i=0; i < dealNameList.length; i++)
   {
      str += dealNameList[i].dealName + '\n';
   }
   alert(str);
}

function setHandsToUpper()
{
   document.all.ns.value = document.all.ns.value.toUpperCase();
   document.all.nh.value = document.all.nh.value.toUpperCase();
   document.all.nd.value = document.all.nd.value.toUpperCase();
   document.all.nc.value = document.all.nc.value.toUpperCase();
   document.all.ws.value = document.all.ws.value.toUpperCase();
   document.all.wh.value = document.all.wh.value.toUpperCase();
   document.all.wd.value = document.all.wd.value.toUpperCase();
   document.all.wc.value = document.all.wc.value.toUpperCase();
   document.all.es.value = document.all.es.value.toUpperCase();
   document.all.eh.value = document.all.eh.value.toUpperCase();
   document.all.ed.value = document.all.ed.value.toUpperCase();
   document.all.ec.value = document.all.ec.value.toUpperCase();
   document.all.ss.value = document.all.ss.value.toUpperCase();
   document.all.sh.value = document.all.sh.value.toUpperCase();
   document.all.sd.value = document.all.sd.value.toUpperCase();
   document.all.sc.value = document.all.sc.value.toUpperCase();
}

function save()
{
   setHandsToUpper();

   if (! validDeal())
   {
      return;
   }
   
   var expires = new Date();
   expires.setTime (expires.getTime() + 24 * 60 * 60 * 365 * 1000 * 20);
   var str = document.all.dn.value+',';
   var ind = dealNameString.indexOf(str,0);
   var dnames = '';
   if (ind < 0)
   {      
      if (dealNameString == '')
      {
         dnames = document.all.dn.value+',';
      }
      else
      {
         dnames = dealNameString+document.all.dn.value+',';
      }
   }
   else
   {
      dnames = dealNameString;
   }
   //alert(dnames);
   document.cookie = 'dealNameString=' + escape(dnames)+ '; expires='+expires.toGMTString();
   saveTheDeal();
   loadDealNames();
}

function validDeal()
{
   if ( ! document.all.dn.value > ' ')
   {
      alert('Enter a name for this deal');
      document.all.dn.focus();
      return false;
   }
   
   var nameStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var tempStr = document.all.dn.value.toUpperCase();
   var aChar = '';
   var ind = 0;
   for (var i=0; i < tempStr.length; i++)
   {
      aChar = tempStr.substring(i,i+1);
      ind = nameStr.indexOf(aChar,0);
      if (ind == -1)
      {
         alert('Deal name must consist of only alphanumerics with no embedded spaces');
         document.all.dn.focus();
         document.all.dn.select();
         return false;
      }
   }
   
   var cnt = document.all.ns.value.length + document.all.nh.value.length 
           + document.all.nd.value.length + document.all.nc.value.length;
   if (cnt != 13 && document.all.partial.checked == false)
   {
      alert('North hand does not consist of 13 cards; number entered is: ' + cnt);
      document.all.ns.focus();
      return false;
   }
   
   cnt = document.all.ws.value.length + document.all.wh.value.length 
       + document.all.wd.value.length + document.all.wc.value.length;
   if (cnt != 13 && document.all.partial.checked == false)
   {
      alert('West hand does not consist of 13 cards; number entered is: ' + cnt);
      document.all.ws.focus();
      return false;
   }
   
   cnt = document.all.es.value.length + document.all.eh.value.length 
       + document.all.ed.value.length + document.all.ec.value.length;
   if (cnt != 13 && document.all.partial.checked == false)
   {
      alert('East hand does not consist of 13 cards; number entered is: ' + cnt);
      document.all.es.focus();
      return false;
   }
  
   cnt = document.all.ss.value.length + document.all.sh.value.length 
       + document.all.sd.value.length + document.all.sc.value.length;
   if (cnt != 13 && document.all.partial.checked == false)
   {
      alert('South hand does not consist of 13 cards; number entered is: ' + cnt);
      document.all.ss.focus();
      return false;
   }

   var as = document.all.ns.value+document.all.ws.value+document.all.es.value+document.all.ss.value;
   var ah = document.all.nh.value+document.all.wh.value+document.all.eh.value+document.all.sh.value;
   var ad = document.all.nd.value+document.all.wd.value+document.all.ed.value+document.all.sd.value;
   var ac = document.all.nc.value+document.all.wc.value+document.all.ec.value+document.all.sc.value;
   
   if (! validateSuit(as, 'Spade', document.all.ns, document.all.ws, document.all.es,document.all.ss))
   {
     return false;
   }
   if (! validateSuit(ah, 'Heart', document.all.nh, document.all.wh, document.all.eh,document.all.sh))
   {
     return false;
   } 
   if (! validateSuit(ad, 'Diamond', document.all.nd, document.all.wd, document.all.ed,document.all.sd))
   {
     return false;
   } 
   if (! validateSuit(ac, 'Club', document.all.nc, document.all.wc, document.all.ec,document.all.sc))
   {
     return false;
   } 
   return true;
}

function validateSuit(fullSuit, suitName, n,w,e,s)
{
   var cardStr = 'AKQJT98765432';
   var aCard = '';
   var ind = 0; 
   for (var i=0; i < fullSuit.length; i++)
   {
      aCard = fullSuit.substring(i,i+1);
      ind = cardStr.indexOf(aCard,0);
      if (ind == -1)
      {
         alert('Invalid card designation in' +  suitName + ' suit: ' + aCard);
         if (n.value.indexOf(aCard,0) >= 0)
         {
            n.focus();
            n.select();
         }
         else if (w.value.indexOf(aCard,0) >= 0)
         {
            w.focus();
            w.select();
         }
         else if (e.value.indexOf(aCard,0) >= 0)
         {
            e.focus();
            e.select();
         }
         else if (s.value.indexOf(aCard,0) >= 0)
         {
            s.focus();
            s.select();
         }
         return false;
      }
   }
   if (document.all.partial.checked == false)
   {
      for (var i=0; i < cardStr.length; i++)
      {
         aCard = cardStr.substring(i,i+1);
         ind = fullSuit.indexOf(aCard,0);
         if (ind == -1)
         {
            alert('Card is missing from the' + suitName + ' suit: ' + aCard);
            return false;
         }
      }
   }
   if (fullSuit.length > 13)
   {
      alert(suitName + ' suit contains duplicate entries; check ' + suitName + 's in N/S and E/W.');
      n.select();
      return false;
   }
   return true;
}

function saveTheDeal()
{
   var expires = new Date();
   expires.setTime (expires.getTime() + 24 * 60 * 60 * 365 * 1000 * 20);
   
   var tempComm = '';
   var ns = document.all.ns.value;
   var nh = document.all.nh.value;
   var nd = document.all.nd.value;
   var nc = document.all.nc.value;
   var ws = document.all.ws.value;
   var wh = document.all.wh.value;
   var wd = document.all.wd.value;
   var wc = document.all.wc.value;
   var es = document.all.es.value;
   var eh = document.all.eh.value;
   var ed = document.all.ed.value;
   var ec = document.all.ec.value;
   var ss = document.all.ss.value;
   var sh = document.all.sh.value;
   var sd = document.all.sd.value;
   var sc = document.all.sc.value;
   var lidx = document.all.level.selectedIndex;
   var tidx = document.all.trump.selectedIndex;
   var str = '';
   str += ns + ',' + nh + ',' + nd + ',' + nc + ',';
   str += ws + ',' + wh + ',' + wd + ',' + wc + ',';
   str += es + ',' + eh + ',' + ed + ',' + ec + ',';
   str += ss + ',' + sh + ',' + sd + ',' + sc + ',';
   str += lidx + ',' + tidx + ',';
   str += document.all.commentary.value + '@';
   document.cookie = document.all.dn.value + '=' + escape(str) + '; expires=' + expires.toGMTString();
}


function deleteThisDeal()
{
   
   var str = document.all.saveddeal[document.all.saveddeal.selectedIndex].value;
   if (! confirm('Continue with Delete of deal: ' + str))
   {
      return;
   }

   //delete the deal
   var exp = new Date();
   exp.setTime(exp.getTime() - 1);
   
   document.cookie = str + '=none; expires=' + exp.toGMTString();
   
   //recreate the dealNameList
   str += ',';
   var ind = dealNameString.indexOf(str,0);
   var dnames = dealNameString.substring(0,ind) + 
      dealNameString.substring(ind+str.length,dealNameString.length);
   var expires = new Date();
   expires.setTime (expires.getTime() + 24 * 60 * 60 * 365 * 1000 * 20);
   document.cookie = 'dealNameString=' + escape(dnames)+ '; expires='+expires.toGMTString();
   loadDealNames();
   clearDeal();
}

function deleteDealList()
{
   if (! confirm('Continue with Delete of ALL saved Deals?'))
   {
      return;
   }
   var exp = new Date();
   exp.setTime(exp.getTime() - 1);
   var str = '';
   for (var i=0; i < dealNameList.length; i++)
   {
      str += dealNameList[i].dealName;
      document.cookie = str + '=none; expires=' + exp.toGMTString();
   }
   document.cookie = 'dealNameString=' + 'none; expires=' + exp.toGMTString();
   dealNameList.length = 0;
   var el = document.all.saveddeal;
   el.innerHTML = '';
   var opt = null;
   opt = document.createElement('option');
   opt.innerHTML = 'Select...';
   el.appendChild(opt);
   loadDealNames();
   clearDeal();
}

function clearDeal()
{
   document.all.dn.value = '';
   document.all.ns.value = '';
   document.all.nh.value = '';
   document.all.nd.value = '';
   document.all.nc.value = '';
   document.all.ws.value = '';
   document.all.wh.value = '';
   document.all.wd.value = '';
   document.all.wc.value = '';
   document.all.es.value = '';
   document.all.eh.value = '';
   document.all.ed.value = '';
   document.all.ec.value = '';
   document.all.ss.value = '';
   document.all.sh.value = '';
   document.all.sd.value = '';
   document.all.sc.value = '';
   document.all.trump.selectedIndex = 0;    
   document.all.level.selectedIndex = 0;
   document.all.commentary.value = 'Commentary';
}

function getRemoteHand()
{
   if (parent.slist.ptr >= parent.slist.gDeals.length || parent.slist.ptr == -1)
   {
      alert('There is no pre-dealt deal to retrieve; click a pre-dealt deal first');
      return;
   } 
   document.all.ns.value = parent.slist.remoteGetNS();
   document.all.nh.value = parent.slist.remoteGetNH();
   document.all.nd.value = parent.slist.remoteGetND();
   document.all.nc.value = parent.slist.remoteGetNC();
   document.all.ws.value = parent.slist.remoteGetWS();
   document.all.wh.value = parent.slist.remoteGetWH();
   document.all.wd.value = parent.slist.remoteGetWD();
   document.all.wc.value = parent.slist.remoteGetWC();
   document.all.es.value = parent.slist.remoteGetES();
   document.all.eh.value = parent.slist.remoteGetEH();
   document.all.ed.value = parent.slist.remoteGetED();
   document.all.ec.value = parent.slist.remoteGetEC();
   document.all.ss.value = parent.slist.remoteGetSS();
   document.all.sh.value = parent.slist.remoteGetSH();
   document.all.sd.value = parent.slist.remoteGetSD();
   document.all.sc.value = parent.slist.remoteGetSC();
   var trump = parent.slist.remoteGetTrump();
   switch (trump)
   {
      case 'Spade':
         document.all.trump.selectedIndex = 1;
         break;
      case 'Heart':
         document.all.trump.selectedIndex = 2;
         break;
      case 'Diamond':
         document.all.trump.selectedIndex = 3;
         break;
      case 'Club':
         document.all.trump.selectedIndex = 4;
         break;
      case 'NT':
         document.all.trump.selectedIndex = 5;
         break;
   }
   var level = parent.slist.remoteGetLevel();
   switch (level)
   {
      case 1:
         document.all.level.selectedIndex = 1;
         break;
      case 2:
         document.all.level.selectedIndex = 2;
         break;
      case 3:
         document.all.level.selectedIndex = 3;
         break;
      case 4:
         document.all.level.selectedIndex = 4;
         break;
      case 5:
         document.all.level.selectedIndex = 5;
         break;
      case 6:
         document.all.level.selectedIndex = 6;
         break;
      case 7:
         document.all.level.selectedIndex = 7;
         break;
   }
   document.all.commentary.value = parent.slist.remoteGetCommentary();

}

function playEnteredDeal()
{
   setHandsToUpper();
   if (! validDeal())
   {
      return;
   }
   parent.slist.sendHomeMadeDeal();
}

