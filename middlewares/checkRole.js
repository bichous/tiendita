module.exports = role => (req, res, next) => {
    if (req.isAuthenticated()) {
        if (req.user.role === role) {
            next()
        } else {
            res.redirect('/auth/login')
        }
    } else {
        console.log('making roles great againg')
        res.redirect('/auth/login')

    }
}