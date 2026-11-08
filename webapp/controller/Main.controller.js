sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.detaysoft.project1.controller.Main", {
        
        onInit: function() {
            // Hata Düzeltildi: Değişken ismi oData olarak eşitlendi
            var oData = {
                vizeNotu: "",
                vizeYuzdesi: "40",   
                finalNotu: "",
                finalYuzdesi: "60",  
                sonucYazisi: "Lütfen notları girip hesaplayın."
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "notModeli");
        },

        onDeneme: function () {
          
            
            var oModel = this.getView().getModel("notModeli");
            var oData = oModel.getData();

           
            var VizeHesapla = parseFloat(oData.vizeYuzdesi);
            var FinalHesapla = parseFloat(oData.finalYuzdesi);

            
            if (!isNaN(VizeHesapla) && !isNaN(FinalHesapla)) {
                if (VizeHesapla + FinalHesapla > 100) {
                    oModel.setProperty("/sonucYazisi", "Tekrar yüzdelik yazınız ");
                } else {
                    
                    oModel.setProperty("/sonucYazisi", "Lütfen notları girip hesaplayın.");
                }
            }
        },
        

        onCalculate: function () {
            var oModel = this.getView().getModel("notModeli");
            var oData = oModel.getData();

            
            var vizeInput = parseFloat(oData.vizeNotu);
            var VizeHesapla = parseFloat(oData.vizeYuzdesi);
            var finalInput = parseFloat(oData.finalNotu);
            var FinalHesapla = parseFloat(oData.finalYuzdesi);

            if (isNaN(vizeInput) || isNaN(finalInput) || isNaN(VizeHesapla) || isNaN(FinalHesapla)) {
                oModel.setProperty("/sonucYazisi", "Lütfen tüm alanları geçerli sayılarla doldurun!");
                return;
            }

            if (VizeHesapla + FinalHesapla !== 100) {
                oModel.setProperty("/sonucYazisi", "Hata: Vize ve Final yüzdelerinin toplamı 100 olmalıdır!");
                return;
            }

            var ortalama = (vizeInput * (VizeHesapla / 100)) + (finalInput * (FinalHesapla / 100));
            var harfNotu = "";

            if (ortalama < 45) {
                harfNotu = "FF";
            } else if (ortalama < 55) {
                harfNotu = "FD";
            } else if (ortalama < 65) {
                harfNotu = "DD";
            } else if (ortalama < 75) {
                harfNotu = "CC";
            } else if (ortalama < 85) {
                harfNotu = "BB";
            } else {
                harfNotu = "AA";
            }

            var sonuc = "ortalama: " + ortalama.toFixed(2) + " Harf Notu: " + harfNotu;
            oModel.setProperty("/sonucYazisi", sonuc);
        }

        



 /*(Controller) => {
    "use strict";

    return Controller.extend("com.detaysoft.project1.controller.Main", {
      onInit() {
        },
         onCalculate: function() {     
            var Vize = this.getView().byId("vizeInput").getValue();
            var Final = this.getView().byId("finalInput").getValue();

            Vize = parseFloat(Vize);
            Final = parseFloat(Final);


            var VizeHesabı=this.getView().byId("VizeHesapla").getValue();
            var FinalHesabı=this.getView().byId("FinalHesapla").getValue();

            VizeHesabı = parseFloat(VizeHesabı);
            FinalHesabı = parseFloat(FinalHesabı);

        if(VizeHesabı+FinalHesabı > 100){
        this.getView().byId("resultText").setText("Hesaplanmadı");
        return;
        }
           
            VizeHesabı=VizeHesabı/100
            FinalHesabı=FinalHesabı/100
            

            if (isNaN(Vize) || isNaN(Final)) {
    this.getView().byId("resultText").setText("Lütfen geçerli bir sayı olarak girin!");
    return; 
    }
     
    var ortalama = (Vize*VizeHesabı) + (Final*FinalHesabı);

    var harfNotu= "";

   if(ortalama<45){
    harfNotu= "FF";
   } else if(ortalama >= 45 && ortalama < 55){
    harfNotu= "FD";
   }else if(ortalama >= 55 && ortalama < 65){
    harfNotu= "DD";
   }else if(ortalama >= 65 && ortalama < 75){
    harfNotu= "CC";
   }else if(ortalama >= 75 && ortalama < 85){
    harfNotu ="BB";
   }else {
    harfNotu= "AA";
   }

   var sonuc = "ortalama: " + ortalama.toFixed(2) + " Harf Notu: " + harfNotu;
   this.getView().byId("resultText").setText(sonuc);

  },
  
      
       onDeneme: function() {

       var VizeHesabı=this.getView().byId("VizeHesapla").getValue();
       var FinalHesabı=this.getView().byId("FinalHesapla").getValue();

       VizeHesabı = parseFloat(VizeHesabı);
       FinalHesabı = parseFloat(FinalHesabı);


        if(VizeHesabı+FinalHesabı > 100){
        this.getView().byId("resultText").setText("Tekrar yüzdelik yazınız");
        }
            
     }*/


    
        
    });
});