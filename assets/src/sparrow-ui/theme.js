export default {
    theme_color: '#00A4FF',
    color_alpha(color,float_n){
        let num = parseInt(256*float_n); //0 < float_n < 1
        return color + num.toString(16)
    },
}
