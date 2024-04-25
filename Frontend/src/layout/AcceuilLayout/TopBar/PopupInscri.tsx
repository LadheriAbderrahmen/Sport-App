import { useEffect, useRef, useState } from 'react';
import { Alert, Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { GiMuscleUp } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { Gym, LoginFields, LoginFields0, SingupFields1, SingupFields2 } from '../../../constant/Fields';
type ModalCustomProps = {
  show: any
  handleClose: any
  Signup?: boolean
  Login?: boolean
  postdata?: (data: any) => void
}
function ModalCustom({ show, Signup, Login, handleClose, postdata }: ModalCustomProps) {

  const [Role, setRole] = useState<any>();

  const method = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = method

  const { Account_user } = useSelector((state: any) => ({
    Account_user: state.AccountReducer
  }))

  useEffect(() => {
    if (Account_user.loginuser) {
      handleClose()
    }
  }, [Account_user])

  const Submit = (data: any) => {
    postdata?.(data)
  }

  const OpenSignupPop = () => {
    postdata?.(true)
  }

  useEffect(()=>{
    method.reset();
    setRole(null);
  },[handleClose])

  console.log(Account_user.error)
  return (
    <>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header >
          <Modal.Title className='w-100'>
            <Row >
              <Col>
                <div className='TopnavContent'>
                  <h1>GYM</h1>
                  <GiMuscleUp className='IconLogo' />
                </div>
              </Col>
              {Signup &&
                <Col className='text-end mt-2'>
                  Create Account
                </Col>
              }
            </Row>

          </Modal.Title>
        </Modal.Header>
        
          {/* ---------------------formulaire-------------------------------- */}

        <Form onSubmit={handleSubmit(Submit)}>

          {/* ---------------------Modal Body-------------------------------- */}

          <Modal.Body>
          {Signup ?
              <>
              {/* {Account_user.error &&
                  <Alert key='danger' variant='danger'>{Account_user.error.message}</Alert>
              } */}
              <div style={{height : !Role ? "20vh" : ""}}>
                
                <Form.Select aria-label="Default select example" {...register("role")} onChange={(e) => { setRole(e.target.value) }}>
                  <option>Chose your Role</option>
                  <option value="Normal">Normal</option>
                  <option value="Coache">Coache</option>
                  <option value="Gym Owner">Gym Owner</option>
                </Form.Select>

                <Row>
                  {Role === "Normal" ? (
                    <>
                      <Row>
                        {LoginFields0.map((item: any) => (
                          <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>{item.label}</Form.Label>
                              <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                            </Form.Group>
                            {errors[item.name] && (
                              <p role="alert" className="text-danger">
                                {errors[item.name]?.message as string}
                              </p>
                            )}
                          </Col>
                        ))}
                        {LoginFields.map((item: any) => (
                          <>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>{item.label}</Form.Label>
                              <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                            </Form.Group>
                            {errors[item.name] && (
                              <p role="alert" className="text-danger">
                                {errors[item.name]?.message as string}
                              </p>
                            )}
                          </>

                        ))}
                      </Row>

                      <Row>
                        {SingupFields1.map((item: any) => (
                          <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>{item.label}</Form.Label>
                              <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                            </Form.Group>
                            {errors[item.name] && (
                              <p role="alert" className="text-danger">
                                {errors[item.name]?.message as string}
                              </p>
                            )}
                          </Col>
                        ))}

                      </Row>

                    </>
                  ) : (
                    Role === "Coache" ? (
                      <>
                        <Row>
                          {LoginFields0.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}
                        </Row>

                        {LoginFields.map((item: any) => (
                          <>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>{item.label}</Form.Label>
                              <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                            </Form.Group>
                            {errors[item.name] && (
                              <p role="alert" className="text-danger">
                                {errors[item.name]?.message as string}
                              </p>
                            )}
                          </>

                        ))}

                        <Row>
                          {SingupFields1.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}

                        </Row>

                        <Row>
                          {SingupFields2.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}

                        </Row>

                      </>
                    ) : (Role === "Gym Owner" ? (
                      <>

                        <Row>

                          {LoginFields0.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}

                        </Row>

                        {LoginFields.map((item: any) => (
                          <>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                              <Form.Label>{item.label}</Form.Label>
                              <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                            </Form.Group>
                            {errors[item.name] && (
                              <p role="alert" className="text-danger">
                                {errors[item.name]?.message as string}
                              </p>
                            )}
                          </>
                        ))}

                        <Row>
                          {Gym.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}

                        </Row>

                        <Row>
                          {SingupFields2.map((item: any) => (
                            <Col>
                              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                              </Form.Group>
                              {errors[item.name] && (
                                <p role="alert" className="text-danger">
                                  {errors[item.name]?.message as string}
                                </p>
                              )}
                            </Col>
                          ))}

                        </Row>

                      </>
                    ) : null))}

                </Row>

              </div>
              </>
              : Login &&
              <>
                {/* {Account_user.error &&
                  <Alert key='danger' variant='danger'>{Account_user.error}</Alert>
                } */}
                {LoginFields.map((item: any) => (
                  <>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>{item.label}</Form.Label>
                      <Form.Control className={errors[item.name] ? 'border border-danger' : ''} type={item.type} placeholder={item.name}  {...register(item.name, item.validation)} />
                    </Form.Group>
                    {errors[item.name] && (
                      <p role="alert" className="text-danger">
                        {errors[item.name]?.message as string}
                      </p>
                    )}
                  </>
                ))}
                <p onClick={OpenSignupPop} style={{ cursor: 'pointer' }}>Create An Account ?</p>
              </>
            }
          </Modal.Body>

          {/* ---------------------Footer-------------------------------- */}

          {Login || Role ?
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type='submit' >
                Save
              </Button>
            </Modal.Footer>
            : null}

        </Form>
      </Modal>
    </>
  );
}

export default ModalCustom;