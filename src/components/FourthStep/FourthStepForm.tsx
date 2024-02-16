import React from 'react';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import { Box, Button } from '@mui/material'
import TextFieldWrapper from '../TextFieldWrapper'
import SelectWrapper from '../SelectWrapper'
import { connect } from 'react-redux';

interface DeliveryFormData {
    deliveryMethod: string;
    shippingFee?: number;
    shippingCompany?: string
    deliveryAddress: string
    returnOption: string;
}

interface OwnProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
    handleBack: () => void;
    handleNext: () => void;
    finished: boolean;
    deliveryMethod?: string
}

type Props = OwnProps & InjectedFormProps<DeliveryFormData, OwnProps>;
const ThirdStepForm: React.FC<Props> = ({
    handleSubmit,
    handleNext,
    finished,
    handleBack,
    activeStep,
    deliveryMethod
}) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <Field
            name="deliveryMethod"
            component={SelectWrapper}
            label="Teslimat Şekli"
            required
            categories={[
                { value: 'cargo', label: 'Kargo' },
                { value: 'digitalDownload', label: 'Dijital İndirme' },
            ]}
        />
        <Field
            name="returnOption"
            component={SelectWrapper}
            label="İade Seçenekleri"
            required
            categories={[
                { value: 'returnable', label: 'İade Edilebilir' },
                { value: 'nonReturnable', label: 'İade Edilemez' },
            ]}
        />
        {deliveryMethod === 'cargo' && (
            <div>
                <Field
                    name="shippingCompany"
                    component={SelectWrapper}
                    label="Kargo Şirketi"
                    required
                    categories={[
                        { value: 'ups', label: 'UPS' },
                        { value: 'fedex', label: 'FedEx' },
                        { value: 'dhl', label: 'DHL' },
                    ]}
                >
                </Field>
                <Field
                    name="shippingFee"
                    component={TextFieldWrapper}
                    label="Kargo Ücreti"
                    type="number"
                    parse={(value: any) => Number(value)}
                />
            </div>
        )}
        <div>
            <Field
                name="deliveryAddress"
                component={TextFieldWrapper}
                label="Gönderim Adresi"
                required
                multiline
                rows={5}
            />
        </div>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
            >
                Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button type='submit'>
                {finished ? 'Finish' : 'Next'}
            </Button>
        </Box>
    </form>
);

const ReduxFormWrapped = reduxForm<DeliveryFormData, OwnProps>({
    form: 'thirdForm',
    destroyOnUnmount: false,
})(ThirdStepForm);

const mapStateToProps = (state: any) => {
    const deliveryMethod = formValueSelector('thirdForm')(state, 'deliveryMethod');
    return { deliveryMethod };
};

const ConnectedDeliveryForm = connect(mapStateToProps)(ReduxFormWrapped);

export default ConnectedDeliveryForm;