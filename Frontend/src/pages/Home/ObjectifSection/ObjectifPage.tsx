import { Card, CardTitle, CardBody, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ObjectifFields } from "../../../constant/Fields";

const ObjectifPage = () => {

    const method = useForm()
    const{
      register,
      handleSubmit,
      formState:{errors}
    }=method;
  
  
    const submit=(data : any)=>{
      console.log("Objectif  Data" , data);
    }
  
    return (
      <Card className="ObjectifCard">
        <CardBody>
          <Form onSubmit={handleSubmit(submit)}>
          {ObjectifFields.map((item: any) => (
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
          <Button type="submit">Calculer</Button>
          </Form>
        </CardBody>
      </Card>
    )
  }
  export default ObjectifPage;