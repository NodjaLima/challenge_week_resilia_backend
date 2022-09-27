class ValidationService {

  static notEmpty(parameter) {
    if(!parameter == '') return true
  }

  static ifString(parameter){
    if( typeof parameter == 'string') return true
  }

  static ifNumber(string){
    if(string.length > 0) {
      const list = '0123456789'
      return string.split('').every(elem => list.includes(elem))
    } else {
      return false
    }
  }

  static ifStringNotEmpty(parameter) {
    if(this.ifString(parameter) && this.notEmpty(parameter)) return true
  }
}

export default ValidationService;