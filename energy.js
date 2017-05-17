var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
    let ke = 0.5*m*v*v
    return ke;
};

exports.velocity = function(ke,m){
    let v = 0;
    v += 2*ke;
    v = v/m;
    v = math.sqrt(v);
    return v;
};

exports.mass = function(ke,v){
    let m = 0;
    m += ke*2;
    m = m/(v*v);
    return m;
};
