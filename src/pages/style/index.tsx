import { GoogleOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import styled from "styled-components";
import ContainerPage from "../../components/content";

const SubmitButton = styled(Button)`
  background: #191a1b;
  color: white;
  margin-right: 30px;
  border: 1px solid #fff;
  height: 50px;
  font-size: 24px;

  &:hover {
    background: #191a1b !important;
    color: white !important;
    border: 1px solid #fff !important;
  }
`;

const SignInButton = styled(Button)`
  background: #4c5fd5;
  color: white;
  height: 50px;
  border: 1px solid #4c5fd5;
  font-size: 24px;

  &:hover {
    background: #fff !important;
    color: black !important;
    border: 1px solid #fff !important;
  }
`;

const StyleComponent = () => {
  return (
    <ContainerPage title="style">
      <div className="w-[100vw] h-[100vh] overflow-x-hidden">
        <div className="bg-black text-white text-[24px] flex justify-between items-center py-4 px-16">
          <div>Abstract | Help Center</div>
          <div>
            <SubmitButton>Submit a request</SubmitButton>
            <SignInButton>Sign in</SignInButton>
          </div>
        </div>
        <div className="h-[396px] bg-[#dadbf1] flex flex-col justify-center items-center">
          <div className="text-[80px]">How can we help?</div>
          <div>
            <Input className="w-[720px] h-[65px]" />
          </div>
        </div>
        <div className="p-[120px]">
          <Row gutter={[24, 100]} className="!m-0">
            {Array.from(Array(6).keys()).map((e) => {
              return (
                <Col span={12} key={e}>
                  <Row gutter={24}>
                    <Col span={6} className="flex justify-end items-start">
                      <TwitterOutlined className="text-[75px] text-blue-400" />
                    </Col>
                    <Col span={18}>
                      <span className="text-[24px] font-bold">Title {e}</span>
                      <p className="text-[24px]">
                        Abstract lets you manage, version, and document your
                        designs in one place.
                      </p>
                      <u className="text-blue-600 text-[20px]">
                        <i>learn more</i>
                      </u>
                    </Col>
                  </Row>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="bg-black text-white p-[40px]">
          <Row>
            <Col span={4} className="flex justify-center">
              <div>
                <p>Abstract</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
            </Col>
            <Col span={5} className="flex justify-center">
              <div>
                <p>Resources</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>
            </Col>
            <Col span={5} className="flex justify-center">
              <div>
                <p>Community</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
              </div>
            </Col>
            <Col span={5} className="flex justify-center">
              <div>
                <div>
                  <p>Company</p>
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div>
                  <p>Contact Us</p>
                  <p>info@abstract.com</p>
                </div>
              </div>
            </Col>
            <Col span={5} className="flex items-end">
              <GoogleOutlined />
            </Col>
          </Row>
          <div>
            <Row>
              <Col span={19}></Col>
              <Col span={5}>
                <p>© Copyright 2023</p>
                <p>Abstract Studio Design,</p>
                <p>Inc. All rights reserved</p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default StyleComponent;
