import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import {
  Input,
  Button,
  Col,
  Row,
  Card,
  Switch,
  Popover,
  Popconfirm,
} from "antd";
import { MoreOutlined, UserAddOutlined, MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import MoreDropdown from "../components/MoreDropdown";
import styles from "./TotalData.module.css";
const content = (
  <div>
    <Link to="/editProfile">
      <Button style={{ border: "0px" }}>Edit Profile</Button>
    </Link>
    <br />
    <Popconfirm
      title="Removed profile will be deleted permenantly and Won't be available anymore."
      description="Are you sure"
      okText={
        <Button style={{ backgroundColor: "red", color: "#fff" }}>
          Delete
        </Button>
      }
      cancelText={<Button>Cancel</Button>}
    >
      <Button style={{ border: "0px" }}>Remove Profile</Button>
    </Popconfirm>
  </div>
);
const TotalData = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [isFrame1Open, setFrame1Open] = useState(false);
  const [isFrame2Open, setFrame2Open] = useState(false);
  const [isFrame3Open, setFrame3Open] = useState(false);
  const [isFrame4Open, setFrame4Open] = useState(false);
  const [isFrame5Open, setFrame5Open] = useState(false);
  const [isFrame6Open, setFrame6Open] = useState(false);
  const [isFrame7Open, setFrame7Open] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const onButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <div style={{ backgroundColor: "#f0f5ff", height: "auto" }}>
      <Col span={24}>
        <Card style={{ height: "70px" }}>
          <Row justify={"space-between"}>
            <Col
              xl={{ span: 12, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 22, offset: 0 }}
            >
              <img alt="" src="/vnlogo1.svg" />
              <span>iral Nation</span>
            </Col>
            <Col
              xl={{ span: 2, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 2, offset: 0 }}
            >
              <Row>
                <Col span={8}>
                  <img alt="" src="/lightmodefilled.svg" />
                </Col>
                <Col span={8}>
                  <Switch style={{ width: 43 }} size="default" />
                </Col>
                <Col span={8}>
                  <img
                    alt=""
                    src="/weathermoon.svg"
                    style={{ marginLeft: "20px" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={24} className={styles.cardbody}>
        {/* <Col>
          <Row gutter={[32, 32]}>
            <Col
              xl={{ span: 20, offset: 0 }}
              lg={{ span: 20, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 20, offset: 0 }}
            >
              <Input
                placeholder="Search"
                style={{
                  width: "90px",
                  border: "0px",
                  backgroundColor: "#f0f5ff",
                }}
              />
            </Col>
            <Col
              xl={{ span: 4, offset: 0 }}
              lg={{ span: 20, offset: 0 }}
              md={{ span: 12, offset: 0 }}
              sm={{ span: 12, offset: 0 }}
              xs={{ span: 12, offset: 0 }}
              xxl={{ span: 4, offset: 0 }}
            >
              <Button
                onClick={() => {
                  window.location.href = "/createprofile";
                }}
              >
                Create Profile
              </Button>
            </Col>
          </Row>
        </Col> */}
        <Col span={24}>
          <Row gutter={[32, 32]}>
            <Col
              xl={{ span: 18, offset: 0 }}
              lg={{ span: 24, offset: 0 }}
              md={{ span: 6, offset: 0 }}
              sm={{ span: 6, offset: 0 }}
              xs={{ span: 8, offset: 0 }}
              xxl={{ span: 20, offset: 0 }}
            >
              <Input
                placeholder="Search"
                style={{ display: "flex" }}
                // onChange={searchProduct}
              />
            </Col>
            <Col xxl={4} xl={6}>
              <Row gutter={[10, 10]}>
                <Col>
                  <Button
                    style={{ borderRadius: "5px" }}
                    onClick={() => {
                      window.location.href = "/createprofile";
                    }}
                  >
                    <UserAddOutlined style={{ color: "#40a9ff" }} />
                    <span style={{ color: "#40a9ff" }}>Create Profile</span>
                  </Button>
                </Col>
                <Col span={2}>
                  <div
                    className={styles.toggleviewParent}
                    onClick={onButtonContainer1Click}
                  >
                    <div className={styles.toggleview}>
                      <div className={styles.button}>
                        <MenuOutlined />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24} style={{ marginTop: "30px" }}>
          <Row gutter={[10, 10]}>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Ronald Richards</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge2.svg"
                        />
                      </div>
                      <div className={styles.ronaldrichardsgmailcom}>
                        ronaldrichards@gmail.com
                      </div>
                    </div>

                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus1.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Ronald Richards</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge3.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        danghoang87hl@gmail.com
                      </p>
                    </div>

                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus2.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Jimmy Nelson</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge3.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        manhhachkt08@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus3.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Ralph Edwards</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge3.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        tienlapspktnd@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus4.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>
                          Marvin Gary McKinsey
                        </p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge4.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        vuhaithuongnute@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus5.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Jacob Jones</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge4.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        trungkienspktnd@gamail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus6.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Darrell Steward</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge4.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        ckctm12@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus7.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>
                          Darlene Robertson
                        </p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge4.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        darlene@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfileParent}>
                <div className={styles.discoveryProfile}>
                  <div className={styles.profilemonitorstatusParent}>
                    <img
                      className={styles.profilemonitorstatusIcon}
                      alt=""
                      src="/profilemonitorstatus8.svg"
                    />
                    <div className={styles.talentFrame238890Parent}>
                      <div className={styles.talentFrame238890}>
                        <div className={styles.ronaldRichardsParent}>
                          <p className={styles.ronaldRichards}>
                            Leslie Alexander
                          </p>
                          <img
                            className={styles.accreditationBadgeIcon}
                            alt=""
                            src="/accreditation-badge5.svg"
                          />
                        </div>
                        <p className={styles.ronaldrichardsgmailcom1}>
                          lelsie@gmail.com
                        </p>
                      </div>
                      <Popover content={content} trigger="hover">
                        <Button
                          style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                        >
                          <MoreOutlined />
                        </Button>
                      </Popover>
                    </div>
                  </div>
                  <p className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Tortor ut cras
                    mauris at faucibus pharetra pellentesque diam pulvinar.
                    Mauris penatibus ut luctus posuere posuere odio nisi mauris
                    aliquet. Sapien aliquet porta tincidunt massa id quam
                    pharetra. Massa vitae feugiat vulputate et praesent nisl
                    neque nunc tortor.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus9.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Devon Lane</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge5.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        devonlane@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus10.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Felix Kjelberg</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge5.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        felixpewdie@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
            <Col
              xl={{ span: 8, offset: 0 }}
              lg={{ span: 8, offset: 0 }}
              md={{ span: 25, offset: 0 }}
              sm={{ span: 24, offset: 0 }}
              xs={{ span: 24, offset: 0 }}
              xxl={{ span: 8, offset: 0 }}
            >
              <div className={styles.discoveryProfile}>
                <div className={styles.profilemonitorstatusParent}>
                  <img
                    className={styles.profilemonitorstatusIcon}
                    alt=""
                    src="/profilemonitorstatus11.svg"
                  />
                  <div className={styles.talentFrame238890Parent}>
                    <div className={styles.talentFrame238890}>
                      <div className={styles.ronaldRichardsParent}>
                        <p className={styles.ronaldRichards}>Doja Cat</p>
                        <img
                          className={styles.accreditationBadgeIcon}
                          alt=""
                          src="/accreditation-badge5.svg"
                        />
                      </div>
                      <p className={styles.ronaldrichardsgmailcom1}>
                        dojacat@gmail.com
                      </p>
                    </div>
                    <Popover content={content} trigger="hover">
                      <Button
                        style={{ border: "0px", backgroundColor: "#f0f0f0" }}
                      >
                        <MoreOutlined />
                      </Button>
                    </Popover>
                  </div>
                </div>
                <p className={styles.loremIpsumDolor1}>
                  Lorem ipsum dolor sit amet consectetur. Tortor ut cras mauris
                  at faucibus pharetra pellentesque diam pulvinar. Mauris
                  penatibus ut luctus posuere posuere odio nisi mauris aliquet.
                  Sapien aliquet porta tincidunt massa id quam pharetra. Massa
                  vitae feugiat vulputate et praesent nisl neque nunc tortor.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Col>
    </div>
  );
};

export default TotalData;
