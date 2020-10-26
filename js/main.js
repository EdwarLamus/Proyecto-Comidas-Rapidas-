var app = new Vue({
  // edwar lamus
  el: '#app',
  data: {
    tipo:0,
    preHam:12000,
    prePe:9000,
    cantCo:0,
    cantPa:0,
    prePa:4000,
    comida:0,
    papas:0,
    total:0,
    totalPapas:0,
    efectivo:0,
    cambio:0
  },
  methods: {
    procesar:function(){
      if(this.cantCo<0 || this.cantPa<0){
        alert("Error, las cantidades no pueden ser inferiores a 0")

      }else if(this.comida=="H" && this.papas=="S"){
        this.totalPapas=this.cantPa*this.prePa;
        this.total=(this.cantCo*this.preHam)+this.totalPapas;
        this.tipo=1

      }else if(this.comida=="H" && this.papas=="N"){
        this.totalPapas=0;
        this.total=(this.cantCo*this.preHam)+this.totalPapas;
        this.tipo=1
      }else if(this.comida=="P" && this.papas=="S"){
        this.totalPapas=this.cantPa*this.prePa;
        this.total=(this.cantCo*this.prePe)+this.totalPapas;
        this.tipo=1
      }else{
        this.totalPapas=0;
        this.total=(this.cantCo*this.prePe)+this.totalPapas;
        this.tipo=1
      }
    },
    pagar:function(){
      if(this.efectivo>=this.total){
        this.cambio= this.efectivo - this.total;
        
      }else{
        alert("Dinero insuficiente")
      }
    }
  },
})