/**
 * Shape functions of a Timoshenko beam - the "interdependent" ones, which reproduce the exact
 * homogeneous solution: the rotation is quadratic, the deflection cubic, and the shear strain
 * w' + phi is constant along the beam. They are the interpolation the stiffness matrix of Beam2D
 * is built from, so reading the deflection or the rotation between the ends with them agrees with
 * what the solver found at the ends; Hermite polynomials do so only when shear is not deformable.
 *
 * The end displacements are ordered (w1, phi1, w2, phi2), with phi = -dw/dx where there is no shear
 * strain, which is the convention of the end displacement vector. Each function returns the four
 * coefficients those are multiplied by, at xi = x/l. With fi = 0 they are the Hermite polynomials.
 */

/** 12EI / (kGA l^2), the ratio of the bending to the shear flexibility of a beam of length l. */
export function shearParameter(l: number, e: number, g: number, area: number, iy: number, k: number): number {
  return (12 * e * iy) / (k * g * area * l * l);
}

/** The deflection w. */
export function deflectionShape(xi: number, l: number, fi: number): [number, number, number, number] {
  const fi1 = 1 + fi;

  return [
    ((1 - xi) * (1 + xi - 2 * xi * xi + fi)) / fi1,
    (l * xi * (xi - 1) * (2 - 2 * xi + fi)) / (2 * fi1),
    (xi * (3 * xi - 2 * xi * xi + fi)) / fi1,
    (l * xi * (1 - xi) * (2 * xi + fi)) / (2 * fi1),
  ];
}

/** The slope of the deflection curve, dw/dx - no longer minus the rotation, by the shear strain. */
export function slopeShape(xi: number, l: number, fi: number): [number, number, number, number] {
  const fi1 = 1 + fi;

  return [
    -(fi + 6 * xi - 6 * xi * xi) / (l * fi1),
    (2 * fi * xi - fi - 6 * xi * xi + 8 * xi - 2) / (2 * fi1),
    (fi + 6 * xi - 6 * xi * xi) / (l * fi1),
    -(2 * fi * xi - fi + 6 * xi * xi - 4 * xi) / (2 * fi1),
  ];
}

/** The rotation of the cross section. */
export function rotationShape(xi: number, l: number, fi: number): [number, number, number, number] {
  const fi1 = 1 + fi;

  return [
    (6 * xi * (1 - xi)) / (l * fi1),
    ((1 - xi) * (1 + fi - 3 * xi)) / fi1,
    (-6 * xi * (1 - xi)) / (l * fi1),
    (xi * (3 * xi - 2 + fi)) / fi1,
  ];
}
