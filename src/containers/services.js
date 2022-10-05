import React from "react";

import { Service } from "../components";

export function ServiceContainer() {
  return (
    <Service>
      <Service.Row>
        <Service.Column>
          <Service.Title>Core Value</Service.Title>
          <Service.Text>
            Upholding the truth and promoting the rule of law and justice
            through credible legal advice and representation.
          </Service.Text>
        </Service.Column>
      </Service.Row>
      <Service.Row />
      <Service.Row>
        <Service.Column>
          <Service.SubContainer>
            <Service.Row>
              <Service.Column>
                <Service.SubTitle>OUR MOTTO</Service.SubTitle>
              </Service.Column>
              <Service.Column>
                <Service.SubText>
                  The Rights that you have over others- Forget them, <br />
                  The Rights that others have over you - Remember them.
                </Service.SubText>
              </Service.Column>
            </Service.Row>
            <Service.Row>
              <Service.Column>
                <Service.SubTitle>OUR MISSON</Service.SubTitle>
              </Service.Column>
              <Service.Column>
                <Service.SubText>
                  We always strive to provide outstanding client and community
                  service, and are committed to client satisfaction, public
                  growth and development, as we consider their satisfaction to
                  be the best measure of our success.
                </Service.SubText>
              </Service.Column>
            </Service.Row>
            <Service.Row>
              <Service.Column>
                <Service.SubTitle>OUR VISION</Service.SubTitle>
              </Service.Column>
              <Service.Column>
                <Service.SubText>
                  At Kanu G. Agabi and Associates, we endeavour to be our
                  Clients' Trusted Advisors. When it comes to honesty and timely
                  legal counsel in the ever-changing legal world, we strive to
                  remain the first port of call for all and sundry.
                </Service.SubText>
              </Service.Column>
            </Service.Row>
          </Service.SubContainer>
        </Service.Column>
      </Service.Row>
    </Service>
  );
}
