import * as React from "react";
import * as THREE from "three";
import { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import normal from "../asset/normal.jpg";
import space from "../asset/space.jpg";
import jeffpic from "../asset/mo.png";
import moonpic from "../asset/moon.jpg";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolio {
        nodes {
          title
          image {
            file {
              url
            }
          }
          description {
            description
          }
          link
        }
      }
    }
  `);
  const portfolio = data.allContentfulPortfolio.nodes;
  useEffect(() => {
    // Setup

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    camera.position.setX(-3);

    renderer.render(scene, camera);

    // Torus

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Lights

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Helpers

    // const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50);
    // scene.add(lightHelper, gridHelper)

    // const controls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    // Background

    const spaceTexture = new THREE.TextureLoader().load(`${space}`);
    scene.background = spaceTexture;

    // Avatar

    const jeffTexture = new THREE.TextureLoader().load(`${jeffpic}`);

    const jeff = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: jeffTexture })
    );

    scene.add(jeff);

    // Moon

    const moonTexture = new THREE.TextureLoader().load(`${moonpic}`);
    const normalTexture = new THREE.TextureLoader().load(`${normal}`);

    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(3, 32, 32),
      new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
      })
    );

    scene.add(moon);

    moon.position.z = 30;
    moon.position.setX(-10);

    jeff.position.z = -5;
    jeff.position.x = 2;

    // Scroll Animation

    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      moon.rotation.x += 0.05;
      moon.rotation.y += 0.075;
      moon.rotation.z += 0.05;

      jeff.rotation.y += 0.01;
      jeff.rotation.z += 0.01;

      camera.position.z = t * -0.01;
      camera.position.x = t * -0.0002;
      camera.rotation.y = t * -0.0002;
    }

    document.body.onscroll = moveCamera;
    moveCamera();

    // Animation Loop

    function animate() {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;

      moon.rotation.x += 0.005;

      // controls.update();

      renderer.render(scene, camera);
    }

    animate();
  });

  return (
    <>
      <canvas id="bg"></canvas>

      <main>
        <header>
          <h1>Mo Awwal</h1>
          <p>???? Welcome to my website!</p>
        </header>

        <blockquote>
          <p>I am a javascript fanboy. I love the JAMstack</p>
        </blockquote>

        <section>
          <h2>???? Manifesto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="light">
          <h2>??????????????? Projects</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>???? Accomplishments</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <blockquote>
          <p>
            The best way out is always through <br />
            -Robert Frost
          </p>
        </blockquote>

        <section className="left">
          <h2>???? Work History</h2>

          <h3>McDonalds</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Burger King</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3>Taco Bell</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="card-wrapper">
          {portfolio.map(
            ({ image, title, description: { description }, link }) => {
              return (
                <div className="card" style={{ marginTop: "3rem" }}>
                  <img style={{ width: "100%" }} src={image.file.url} />
                  <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href={link}>Visit project</a>
                  </div>
                </div>
              );
            }
          )}
        </section>
      </main>
    </>
  );
};

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulPortfolio(sort: { order: DESC }) {
//       nodes {
//         title
//         description {
//           description
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
