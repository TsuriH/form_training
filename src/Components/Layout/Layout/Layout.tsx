import "./Layout.css";
import { useForm } from 'react-hook-form'


export function Layout(): JSX.Element {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    return (
        <div className="Layout">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                
                <input placeholder="First Name" {...register('firstName')}  />

                <input placeholder="Last Name"{...register('lastName', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}

                <input placeholder="age" {...register('age', { pattern: /\d+/ })} />
                {errors.age && <p>Please enter number for age.</p>}
                
                <input type="submit" />

            </form>
        </div>
    );
}
