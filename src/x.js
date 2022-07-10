let x = 24;
function f() {
  return () => console.log(x);
}

const f1 = f();
x = -1;
const f2 = f();

f1()
f2()
