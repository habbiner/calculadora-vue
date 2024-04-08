const{createApp} = Vue


createApp({
    data() {
        return {
            valorCorrente:'',
            numeroAnterior: null,
            operador:null,
            operadorClicado:false,
        }
    },
    methods: {
       limpar(){
        this.valorCorrente = '';
       },
       juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
  
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
      ponto() {
        if (this.valorCorrente.indexOf('.') === -1) {
            if(this.valorCorrente == 0){
                this.juntarNumeros('0.')
            }
          else this.juntarNumeros('.');
        }
      },
      setarValor(){
        this.numeroAnterior = this.valorCorrente
        this.operadorClicado = true 
        
      },
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
      dividir() {
        this.operador = (num1, num2) => num1 / num2;
        this.setarValor();
      },
      somar() {
        this.operador = (num1, num2) => num1 + num2;
        this.setarValor();
      },
      subtrair() {
        this.operador = (num1, num2) => num1 - num2;
        this.setarValor();
      },
      multiplicar() {
        this.operador = (num1, num2) => num1 * num2;
        this.setarValor();
      },
    }
}).mount("#app")