/**
 * Three Vector Spring Physics & Camera Orbit Damping Script
 * Extracted from `three-vector-spring.675c6963.js` & `orbit.f4f33075.js` in Gehry Getty
 */

import * as THREE from 'three';

export class VectorSpring {
  constructor(stiffness = 150, damping = 15) {
    this.stiffness = stiffness;
    this.damping = damping;
    this.position = new THREE.Vector3();
    this.velocity = new THREE.Vector3();
    this.target = new THREE.Vector3();
  }

  update(deltaTime) {
    const force = new THREE.Vector3()
      .subVectors(this.target, this.position)
      .multiplyScalar(this.stiffness);

    const dampingForce = new THREE.Vector3()
      .copy(this.velocity)
      .multiplyScalar(this.damping);

    const acceleration = force.sub(dampingForce);

    this.velocity.addScaledVector(acceleration, deltaTime);
    this.position.addScaledVector(this.velocity, deltaTime);

    return this.position;
  }
}
