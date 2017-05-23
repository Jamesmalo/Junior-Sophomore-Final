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

exports.velocity2 = function(d,a,t){
  let v = 0;
  v += (d-0.5*a*t*t)/t;
  return v;
};

exports.time = function(d,v){
  let t = 0;
  t += d/v;
  return t;
};

exports.time2 = function(d,v,a){
  let t = v*v + 2*a*d;
  t = let t1 = v*v + 2*a*d;
  t1 = Math.sqrt(t1);
  t1 = 0-v+t1;
  t1 = t1/a;
  let t2 = v*v + 2*a*d;
  t2 = Math.sqrt(t2);
  t2 = 0-v-t2;
  t2 = t2/a;
  return t;
};

exports.acceleration = function(d,v,t){
  let a = 0;
  a += 2*d;
  a = a/(t*t*v*t);
  return a;
};
