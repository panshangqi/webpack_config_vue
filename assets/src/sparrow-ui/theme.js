export default {
    theme_color: '#00A4FF',
    theme_color_success: '#67c23a',
    theme_color_warning: '#e6a23c',
    theme_color_danger: '#f56c6c',
    color_alpha(color,float_n){
        let num = parseInt(256*float_n); //0 < float_n < 1
        return color + num.toString(16)
    },
}
