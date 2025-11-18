const sum = require('./math');

test('debe sumar 1 + 2 y ser igual a 3', () => {
  const result = sum(1,2);

  expect(result).toBe(3);
});

test('debe sumar -10 + 5 y ser igual a -5', () => {
  expect(sum(-10,5)).toBe(-5);
});

test('debe retornar un objeto con el resultado y el estado', () => {
    const data = {
        result: sum(10,5),
        success: true
    };
  expect(data).toEqual({
    result: 15,
    success:true
  });
});

const sum = require('./math');

test('debe retornar un objeto con el resultado positivo y estado de éxito', () => {
    const data = {
        result: sum(8, 7),
        success: true
    };
  expect(data).toBeGreaterThan({
    result:10,
    success:true
  });
});

test('debe retornar un objeto con el resultado negativo y estado de error', () => {
    const data = {
        result: sum(-4, -6),
        success: false
    };
  expect(data).toBeLessThan({
    result:-5,    
    success:false
  });
});

test('debe retornar un objeto con el resultado cercano a cero y estado de éxito', () => {
    const data = {
        result: sum(0.1, -0.1),
        success: true
    };
  expect(data).toBeCloseTo({
    result:1,
    success: true
  });
});

test('debe retornar un objeto con el resultado mayor o igual a 20 y estado de éxito', () => {
    const data = {
        result: sum(12, 8),
        success: true
    };
  expect(data).toBeGreaterThanOrEqual({
    result:20,
    success:true
  });
});

test('debe retornar un objeto con el resultado menor o igual a -10 y estado de error', () => {
    const data = {
        result: sum(-15, 5),
        success: false
    };
  expect(data).toBeLessThanOrEqual({
    result:-10,
    success:false
  });
});

test('debe retornar un objeto con el resultado definido y estado de éxito', () => {
    const data = {
        result: sum(3, 2),
        success: true
    };
  expect(data).toBeDefined({
    result:5,
    success:true
  });
});