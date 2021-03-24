/* eslint-disable import/no-unresolved */
import React from 'react';
import { Line } from '@reactchartjs/react-chart.js';
import Select from 'react-select';
import {
  Row, Col, Button, Input, Label, Card, CardBody,
} from 'reactstrap';
import predictiveMaintenanceIcon from '@images/icons/predictiveMaintenance.svg';
import timerIcon from '@images/timer.svg';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'pressure',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'temperature',
      data: [1, 2, 1, 1, 2, 2],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        type: 'linear',
        display: true,
        position: 'left',
        id: 'y-axis-1',
      },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          drawOnArea: false,
        },
      },
    ],
  },
};

const PreventiveMaintainance = () => (
  <>
    <Card className="mt-2 p-0">
      <CardBody>
        <Row sm="12">
          <Col className="m-2">
            <Row>
              <img src={predictiveMaintenanceIcon} alt="predictiveMaintainence" width="30" height="30" className="mr-2" />
              <h3>Predictive Maintenance</h3>
            </Row>
            <hr />
          </Col>
        </Row>
        <Row sm="12">
          <Col sm="3" className="bg-white">
            <Card className="bg-lightblue h-100 sfilterarrow">
              <CardBody>
                <h5>  Filter </h5>
                <hr />
                <Row>
                  <Col sm="8">
                    CHOOSE DEVICE:
                  </Col>
                </Row>
                <Select
                  defaultValue={{ value: 'BT_1005', label: 'BT_1005' }}
                  name="device"
                  id="device"
                  className="ml-0 mt-2 mb-2"
                  options={[{ value: 'BT_1005', label: 'BT_1005' }, { value: 'BT_1006', label: 'BT_1006' }]}
                />
                <Row className="ml-3">
                  <Input type="checkbox" id="data" name="data" />
                  <Label for="data">Data</Label>
                </Row>
                <Row className="ml-3 mb-2">
                  <Input type="checkbox" id="anamoly" />
                  <Label for="anamoly">Anamoly</Label>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="9">
            <Row sm="12">
              <Col sm="12" className="m-0 p-0">
                <Card>
                  <CardBody>
                    <Card className="bg-lightblue p-0" style={{ width: '155px', height: '40px' }}>
                      <CardBody className="p-1 ml-2 mt-1">
                        <h5>Live Sensor Data</h5>
                      </CardBody>
                    </Card>
                    <Line data={data} options={options} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row sm="12">
              <Col sm="6" className="bg-white p-1 thin-scrollbar runTime-list">
                <Card className="bg-white p-0">
                  <Row sm="12">
                    <Col sm="3" className="mr-2 pl-2">
                      <CardBody>
                        <Card className="bg-lightblue" style={{ width: '100px', height: '40px' }}>
                          <CardBody className="p-1 ml-2 mt-1">
                            <h5>Run Time</h5>
                          </CardBody>
                        </Card>
                      </CardBody>
                    </Col>
                    <Col sm="5" className="mt-4">
                      <Button>
                        <img src={timerIcon} alt="timer" height="15" width="15" className="mr-2" />
                        00:00:19
                      </Button>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          On
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Off
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="#00be4b" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Tripped
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="#00be4b" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Low_Speed
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          High_Speed
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Axis_shift
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="#00be4b" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Vibration
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Pressure
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Temperature
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Acc_X
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Acc_Y
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Acc_Z
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Mag_X
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Mag_Y
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Mag_Z
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Gyr_Z
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mr-2 ml-0 my-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Gyr_X
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="runTimeMargin">
                      <Card className="bg-lightblue mr-2 runTime-value">
                        <CardBody className="p-1 ml-2 mt-1">
                          Gyr_Z
                          <svg height="25" width="25" className="float-right mr-1">
                            <circle cx="15" cy="15" r="10" fill="red" />
                          </svg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col sm="6" className="bg-white p-1 thin-scrollbar runTime-list">
                <Card className="bg-white p-0">
                  <Row sm="12">
                    <CardBody>
                      <Card className="bg-lightblue ml-1 form-value" style={{ width: '120px', height: '40px' }}>
                        <CardBody className="p-1 ml-2 mt-1">
                          <h5>Form Values</h5>
                        </CardBody>
                      </Card>
                    </CardBody>
                  </Row>
                  <Row sm="12">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_Pressure_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="pl-0 formMargin">
                      <Card className="bg-lightblue pr-1 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_Temperature_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_mag_x_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="pl-0 formMargin">
                      <Card className="bg-lightblue pr-1 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_mag_y_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_mag_z_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="pl-0 formMargin">
                      <Card className="bg-lightblue pr-1 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_gyr_x_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_gyr_y_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="pl-0 formMargin">
                      <Card className="bg-lightblue pr-1 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_gyr_z_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="mt-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_acc_x_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="6" className="pl-0 formMargin">
                      <Card className="bg-lightblue pr-1 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_acc_y_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row sm="12" className="my-2">
                    <Col sm="6" className="formMarginRight">
                      <Card className="bg-lightblue pr-1 ml-2 form-value">
                        <CardBody className="p-1 ml-2">
                          <span className="font-weight-400">
                            Set_acc_z_Threshold
                          </span>
                          <Input type="text" placeholder="value from 0-1" className="mt-1" />
                          <Button size="sm" className="float-right mt-1 submitButtonColor">Submit</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </>
);
export default PreventiveMaintainance;
