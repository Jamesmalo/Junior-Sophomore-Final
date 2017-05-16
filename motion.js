var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance = function(v,t){
  let d = v*t;
  return d;
};


exports.distance2 = function(v,t,a){
  let d = 0.5*a*t*t+v*t;
  return d;
};

exports.velocity = function(d,t){
  let v = d/t;
  return v;
};

exports.velocity2 = function(){
  let v = 0;
  v += (d-0.5*a*t*t)/t;
  return v;
};

exports.time = function(){
  let t = 0;
  t += d/v;
  return t;
};

exports.time2 = function(){
  let t = (vf-vi)/2;
  return t;
};

exports.acceleration = function(v,t){
  let a =
  return a;
};
