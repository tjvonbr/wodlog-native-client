const dev = {
  base: 'http://192.168.1.174:3000',
  wods: 'http://192.168.1.174:3000/wods'
}

prod = {

}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export { config }
