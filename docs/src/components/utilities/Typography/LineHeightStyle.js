import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";

function LineHeightStyle() {
  return (
    <React.Fragment>
      <Heading heading="Line height styles" id="line-height-styles" />
      <Paragraph paragraph="Change the line height density with these utilities. Responsive variants are also available (e.g. .lh-sm-condensed)." />
      <CodeBlocks
        htmlcoderender={[
          <div>
            <p className="lh-default">
              Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef
              corned beef ground round prosciutto hamburger porchetta sausage
              alcatra tail. Jowl chuck biltong flank meatball, beef short ribs.
              Jowl tenderloin ground round, short loin tri-tip ribeye picanha
              filet mignon pig chicken kielbasa t-bone fatback. Beef ribs
              meatball chicken corned beef salami.
            </p>
            <p className="lh-condensed">
              Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef
              corned beef ground round prosciutto hamburger porchetta sausage
              alcatra tail. Jowl chuck biltong flank meatball, beef short ribs.
              Jowl tenderloin ground round, short loin tri-tip ribeye picanha
              filet mignon pig chicken kielbasa t-bone fatback. Beef ribs
              meatball chicken corned beef salami.
            </p>
            <p className="lh-condensed-ultra">
              Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef
              corned beef ground round prosciutto hamburger porchetta sausage
              alcatra tail. Jowl chuck biltong flank meatball, beef short ribs.
              Jowl tenderloin ground round, short loin tri-tip ribeye picanha
              filet mignon pig chicken kielbasa t-bone fatback. Beef ribs
              meatball chicken corned beef salami.
            </p>
          </div>
        ]}
        codeline={[
          `
        <p class="lh-default">
          Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
        </p>
        <p class="lh-condensed">
          Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
        </p>
        <p class="lh-condensed-ultra">
          Bacon ipsum dolor amet tri-tip chicken kielbasa, cow swine beef corned beef ground round prosciutto hamburger porchetta sausage alcatra tail. Jowl chuck biltong flank meatball, beef short ribs. Jowl tenderloin ground round, short loin tri-tip ribeye picanha filet mignon pig chicken kielbasa t-bone fatback. Beef ribs meatball chicken corned beef salami.
        </p>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="The lh-0 utility class sets line-height: 0 !important, and can be used to remove vertical spacing from elements that inherit line-height but don't contain any text." />
    </React.Fragment>
  );
}

export default LineHeightStyle;
