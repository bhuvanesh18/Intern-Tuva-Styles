import React from "react";
import { SubHeading, Paragraph, CodeBlocks } from "../../mini_components";

function Sticky() {
  return (
    <React.Fragment>
      <SubHeading subheading="Sticky" id="sticky" />
      <Paragraph paragraph="Use .position-sticky to keep an element stuck to an edge as long as its parent is visible. Things to keep in mind:" />
      <ul className="mt-2 ml-6">
        <li>
          Using the .position-sticky class by itself doesn't have any effect. An
          additional [top|bottom|left|right]-0 class is needed. See the examples
          below.
        </li>
        <li>
          Add a background color to sticky elements so it covers the content
          underneath.
        </li>
        <li>
          Use style="z-index: 1;" (or higher) in case there are other elements
          with z-index.
        </li>
      </ul>
      <SubHeading subheading="Top" id="top" />
      <Paragraph paragraph="Combine .position-sticky with .top-0 to keep an element stuck to the top." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../output/utilitiy/Layout/StickyTop_output4.html"
              frameborder="0"
              style={{
                border: "0",
                maxWidth: "300" + "px",
                height: "300" + "px",
              }}
              allowfullscreen="true"
              title="Sticky-1"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <section class="mb-3">
          <header class="border position-sticky top-0 bg-gray p-3" style="z-index: 1;">Sticky header 1</header>
          <main class="border border-top-0 p-3">
            <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
          </main>
        </section>

        <section class="mb-3">
          <header class="border position-sticky top-0 bg-gray p-3">Sticky header 2</header>
          <main class="border border-top-0 p-3">
            <p>As Cicero would put it, “Um, not so fast.”</p>

            <p>The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.</p>
          </main>
        </section>

        <section class="mb-3">
          <header class="border position-sticky top-0 bg-gray p-3">Sticky header 3</header>
          <main class="border border-top-0 p-3">
            <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
          </main>
        </section>

        <style>.frame-example { max-width: 300px; height: 300px; }</style>
          `,
        ]}
        lang="html"
      />
      <SubHeading subheading="Bottom" id="bottom" />
      <Paragraph paragraph="Combine .position-sticky with .bottom-0 to keep an element stuck to the bottom. Can be used as a footer or toolbar." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../output/utilitiy/Layout/StickyBottom_output5.html"
              frameborder="0"
              style={{
                border: "0",
                maxWidth: "300" + "px",
                height: "300" + "px",
              }}
              allowfullscreen="true"
              title="Sticky-2"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <section class="mb-3">
          <main class="border border-bottom-0 p-3">
            <h3>Title</h3>
            <p>Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”</p>
          </main>
          <footer class="border position-sticky bottom-0 bg-gray p-3">Sticky footer 1</footer>
        </section>

        <section class="mb-3">
          <main class="border border-bottom-0 p-3">
            <h3>Title</h3>
            <p>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
          </main>
          <footer class="border position-sticky bottom-0 bg-gray p-3">Sticky footer 2</footer>
        </section>

        <style>.frame-example { max-width: 300px; height: 300px; }</style>
          `,
        ]}
        lang="html"
      />
      <SubHeading subheading="Left and Right" id="left-and-right" />
      <Paragraph paragraph="Combine .position-sticky with .left-0 or .right-0 to keep elements stuck to the left or right when scrolling horizontally." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <iframe
              src="./../output/utilitiy/Layout/StickyLeftRight_output6.html"
              frameborder="0"
              style={{
                border: "0",
                width: "100" + "%",
                height: "100" + "px",
              }}
              allowfullscreen="true"
              title="Sticky-3"
            ></iframe>
          </div>,
        ]}
        codeline={[
          `
        <div class="d-flex border overflow-x-auto">
          <section class="d-flex">
            <span class="border position-sticky left-0 bg-gray p-4">A</span>
            <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
          </section>
          <section class="d-flex">
            <span class="border position-sticky left-0 bg-gray p-4">B</span>
            <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
          </section>
          <section class="d-flex">
            <span class="border position-sticky left-0 bg-gray p-4">C</span>
            <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
          </section>
          <section class="d-flex">
            <span class="border position-sticky left-0 bg-gray p-4">D</span>
            <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
          </section>
          <section class="d-flex">
            <span class="border position-sticky left-0 bg-gray p-4">E</span>
            <span class="border p-4">1</span><span class="border p-4">2</span><span class="border p-4">3</span><span class="border p-4">4</span><span class="border p-4">5</span><span class="border p-4">6</span><span class="border p-4">7</span><span class="border p-4">8</span><span class="border p-4">9</span>
            <span class="border position-sticky right-0 bg-gray p-4">...</span>
          </section>
        </div>
          `,
        ]}
      />
    </React.Fragment>
  );
}

export default Sticky;
