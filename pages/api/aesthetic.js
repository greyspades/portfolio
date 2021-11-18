const temp=require('../../templates/aesthetic/index.html')

export default (req, res) => {
    res.status(200).render(temp)
  }