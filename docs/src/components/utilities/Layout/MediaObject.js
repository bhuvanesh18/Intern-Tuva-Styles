import React from "react";
import { Heading, Paragraph, CodeBlocks } from "../../mini_components";
import { Link } from "react-router-dom";

function MediaObject() {
  return (
    <React.Fragment>
      <Heading heading="The media object" id="media-object" />
      <Paragraph paragraph="Create a media object with utilities." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix p-3 border">
            <div className="float-left p-3 mr-3 bg-gray">Image</div>
            <div className="overflow-hidden">
              <p>
                <b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork
                chop meatball strip steak bresaola doner sirloin capicola
                biltong shank pig. Alcatra frankfurter ham hock, ribeye
                prosciutto hamburger kevin brisket chuck burgdoggen short loin.
              </p>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="clearfix p-3 border">
          <div class="float-left p-3 mr-3 bg-gray">
            Image
          </div>
          <div class="overflow-hidden">
            <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
          </div>
        </div>
          `
        ]}
        lang="html"
      />
      <Paragraph paragraph="Create a double-sided media object for a container with a flexible center." />
      <CodeBlocks
        htmlcoderender={[
          <div className="clearfix p-3 border border-gray">
            <div className="float-left p-3 mr-3 bg-gray">Image</div>
            <div className="float-right p-3 ml-3 bg-gray">Image</div>
            <div className="overflow-hidden">
              <p>
                <b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork
                chop meatball strip steak bresaola doner sirloin capicola
                biltong shank pig. Alcatra frankfurter ham hock, ribeye
                prosciutto hamburger kevin brisket chuck burgdoggen short loin.
              </p>
            </div>
          </div>
        ]}
        codeline={[
          `
        <div class="clearfix p-3 border border-gray">
          <div class="float-left p-3 mr-3 bg-gray">
            Image
          </div>
          <div class="float-right p-3 ml-3 bg-gray">
            Image
          </div>
          <div class="overflow-hidden">
            <p><b>Body</b> Bacon ipsum dolor amet shankle rump tenderloin pork chop meatball strip steak bresaola doner sirloin capicola biltong shank pig. Alcatra frankfurter ham hock, ribeye prosciutto hamburger kevin brisket chuck burgdoggen short loin.</p>
          </div>
        </div>
          `
        ]}
        lang="html"
      />
      <p className="mt-2 pb-6">
        You can also create a media object with
        <Link to="/utilities/flexbox#media-object"> flexbox utilities </Link>
        instead of floats which can be useful for changing the vertical
        alignment.
      </p>
    </React.Fragment>
  );
}

export default MediaObject;
