

  const questionReponse = [{
      Question: {
          0: "Quelle a été votre température la plus élevée ces dernières 48 heures ?",
          1: "Inférieur ou égale à 35,4°C",
          2: "Entre 35,5 ou 38,9°C",
          3: "Supérieire ou égale à 39°C",
          4: "Je ne sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous une toux ou votre toux habituelle s’est-elle modifiée ces derniers jours ?",
          1: "Réponse1: OUi j'ai de la toux",
          2: "Réponse2: Non j'ai pas de la toux",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
        
      }
    },
    {
      Question: {
          0: "Avez-vous noté une perte ou une forte diminution de votre goût ou de votre odorat ces derniers jours ?",
          1: "Réponse1: OUi j'ai une perte d'odorat",
          2: "Réponse2: Non j'ai pas une perte de gout",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous un mal de gorge ou des douleurs musculaires ou des courbatures inhabituelles ou des maux de tête inhabituels ces derniers jours ?",
          1: "Réponse1: OUi j'ai des douleurs",
          2: "Réponse2: Non j'ai pas des douleurs",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?",
          1: "Réponse1: OUi j'ai de la diarrhée",
          2: "Réponse2: Non j'ai pas de la la diarrhée",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous une fatigue inhabituelle ces derniers jours ?",
          1: "Réponse1: OUi j'ai de la fatigue intense",
          2: "Réponse2: Non j'ai pas de la fatigue",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Êtes-vous dans l'impossibilité de vous alimenter ou boire DEPUIS 24 HEURES OU PLUS ?",
          1: "Réponse1: OUi je ne mange pas assez",
          2: "Réponse2: Non je mange bien",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Dans les dernières 24 heures, avez-vous noté un manque de souffle INHABITUEL lorsque vous parlez ou faites un petit effort ?",
          1: "Réponse1: OUi j'ai des problémes de respiration",
          2: "Réponse2: Non j'ai pas de problémes de respiration",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous des antécédents de maladie cardiovasculaire : hypertension artérielle compliquée, accident vasculaire cérébral, maladie coronaire, chirurgie cardiaque, insuffisance cardiaque avec essoufflement au moindre effort ?",
          1: "Réponse1: OUi j'ai des antécédents comme l'hypertention",
          2: "Réponse2: Non j'ai pas de maladie chronique",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous un diabète mal équilibré ou avec des complications (yeux, reins) ?",
          1: "Réponse1: OUi j'ai un diabéte de type simple",
          2: "Réponse2: Non j'ai pas de diabéte",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous un cancer évolutif sous traitement (hors hormonothérapie) ?",
          1: "Réponse1: OUi j'ai de la cancer",
          2: "Réponse2: Non j'ai pas de la cancer",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous une maladie respiratoire chronique (bronchopneumopathie obstructive, asthme sévère, fibrose pulmonaire, syndrome d’apnées du sommeil, mucoviscidose) ou êtes-vous suivi par un pneumologue ?",
          1: "Réponse1: OUi j'ai de la bronchopneumopathie",
          2: "Réponse2: Non j'ai pas de maladie respiratoire",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    },
    {
      Question: {
          0: "Avez-vous une insuffisance rénale chronique avec besoin de faire de la dialyse ?",
          1: "Réponse1: OUi j'ai de l'insuffisance rénale",
          2: "Réponse2: Non j'ai pas de l'insuffisance rénale",
          3: "Réponse3: De petit signe",
          4: "Réponse4: Je sais pas"
      }
    }
  ]


    var titre = document.querySelector('#titre');
    var para = document.querySelector('#para');

    var butt = document.querySelector('#but1');
    var cpt = document.querySelector('#cpt');
    var ra = document.querySelectorAll('.rad');

    var r1 = document.querySelector('#radio3');
    var r2 = document.querySelector('#radio4');

    var d1 = document.querySelector('#d1');
    var d2 = document.querySelector('#d2');

    var i=1;
    function charger(){
      if(i<13)
        {
            titre.innerHTML = i + 1;
            cpt.innerHTML = i + 1;
            para.innerHTML = questionReponse[i].Question[0];
            for(let j=0; j<4; j++){
              ra[j].innerHTML = questionReponse[i].Question[j+1];
            }
            i++;
       }
        //recuperer();
    }
     

    var radio = document.querySelectorAll('.radio');
    ra[2].style.marginLeft = "70px";
    radio[0].style.marginLeft = "20px"; 
    radio[1].style.marginLeft = "50px";  
    radio[2].style.marginLeft = "70x";   
    radio[3].style.marginLeft = "90px";   


    // butt.addEventListener("click",charger);
    butt.addEventListener("click",verifBoutonsRadio);

    var somme = 0;
    function verifBoutonsRadio(){ 	
      var val=0;
      for(let k=1; k<5; k++){			 			 
        if(document.getElementById('radio'+k).checked){ 
          val=1;
        }
      }		 			 
      if(document.getElementById('radio1').checked){ 
          somme = somme + 1;
        }

      if(val==0){ 
        alert('Veuillez choisir une réponse!');
       // return 0;
      }else{
          // return 1; 
          
           charger();
           test();
        }
      }
    

    orang = document.querySelector('#orang');
    quest = document.querySelector('#quest');

    function test(){  
      if(i==13){
        if (somme<=2){
          orang.innerHTML = "";
          para.innerHTML = "";
          quest.innerHTML = "<h1>Voici le résultat du test Covid-19 que vous avez éffectué</h1>";
          const par = document.createElement("h1");
          par.innerHTML = "Vous n'avez pas de la covid! Veillez respecter les mesures barriéres";
          par.style.color= "white";
          par.style.marginLeft = "20%";
          par.style.marginTop = "100px";
          orang.appendChild(par);
        }else if (somme>2 && somme<=4){
          orang.innerHTML = "";
          para.innerHTML = "";
          quest.innerHTML = "<h1>Voici le résultat du test Covid-19 que vous avez éffectué</h1>";
          const par = document.createElement("h1");
          par.innerHTML = "Vous etes susceptible d'avoir la covid 19! Veillez respecter les mesures barriéres";
          par.style.color= "white";
          par.style.marginLeft = "20%";
          par.style.marginTop = "100px";
          orang.appendChild(par);
        }else if (somme>4 && somme<=8){
          orang.innerHTML = "";
          para.innerHTML = "";
          quest.innerHTML = "<h1>Voici le résultat du test Covid-19 que vous avez éffectué</h1>";
          const par = document.createElement("h1");
          par.innerHTML = "ATTENTION Vous avez un debut de covid 19! Veillez appellez le SAMU avec 1515";
          par.style.color= "white";
          par.style.marginLeft = "20%";
          par.style.marginTop = "100px";
          orang.appendChild(par);
        }else{
          orang.innerHTML = "";
          para.innerHTML = "";
          quest.innerHTML = "<h1>Voici le résultat du test Covid-19 que vous avez éffectué</h1>";
          const par = document.createElement("h1");
          par.innerHTML = "ATTENTION Vous etes un CAS GRAVE de covid 19 Votre etat de sante est inquiétant<br> Veuillez consulter un medecin ou appeler au : Numéro vert : 800 00 50 50 <br> Numéro SAMU : 15 15 ; Cellule d'alerte : 78 172 10 81 / 76 765 97 31 / 70 717 14 92";
          par.style.color= "white";
          par.style.marginLeft = "15%";
          par.style.marginTop = "40px";
          orang.appendChild(par);
       }
      }
    }

    function clearForm(){
       $('#orang input[type="text"]').each(function(){
           $(this).val("");  
       });
      $('#orang input[type="radio":checked]').each(function(){
          $(this).checked = false;  
      });
     }
    
    