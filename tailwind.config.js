module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      
        orangeSuper:'#FB4F14',
        blueSea:'#00BCDF'
      }
      ,inset: {
        '22%': '22%',
        '60%': '60%',
        '40%': '40%',
        '70%': '70%',
        '80%': '80%',
        '30%': '30%'
       },
       width: {

        '25%': '25%'
       },boxShadow: {
        '3xl': '0 35px 60px 50px rgba(0, 0, 0, 0.3)',
        'manual':'5px 10px 8px 10px #888888'
       }
    }
    ,fontFamily:{
      body:['Sarabun']
    }
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
