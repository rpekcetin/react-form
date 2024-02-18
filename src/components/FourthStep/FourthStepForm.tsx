import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import TextFieldWrapper from '../TextFieldWrapper'
import SelectWrapper from '../SelectWrapper'
import { connect } from 'react-redux';
import ButtonGroup from '../ButtonGroup'
import { Grid, Typography } from '@mui/material';
import { DeliveryFormData, OwnProps, Props } from './types/types';

const FourthStepForm: React.FC<Props> = ({
    handleSubmit,
    handleNext,
    finished,
    handleBack,
    activeStep,
    deliveryMethod,
    returnOption,
    isRead
}) => (
    <form onSubmit={handleSubmit(handleNext)}>
        <Grid container spacing={3} px={5} py={isRead ? 0 : 12} mt={isRead ? 1 : 0} justifyContent={'center'} alignItems={'flex-start'}>
            <Grid item xs={12}>
                <Typography variant='h6' fontWeight={700} textAlign={'center'}>Teslimat Bilgileri</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <Field
                    name="deliveryMethod"
                    component={SelectWrapper}
                    label="Teslimat Şekli"
                    disabled={isRead}
                    required
                    categories={[
                        { value: 'cargo', label: 'Kargo' },
                        { value: 'digitalDownload', label: 'Dijital İndirme' },
                    ]}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Field
                    name="returnOption"
                    component={SelectWrapper}
                    label="İade Seçenekleri"
                    disabled={isRead}
                    required
                    categories={[
                        { value: 'returnable', label: 'İade Edilebilir' },
                        { value: 'nonReturnable', label: 'İade Edilemez' },
                    ]}
                />
            </Grid>
            {deliveryMethod === 'cargo' && (
                <>
                    <Grid item xs={12} md={6}>
                        <Field
                            name="shippingCompany"
                            component={SelectWrapper}
                            label="Kargo Şirketi"
                            disabled={isRead}
                            required
                            categories={[
                                { value: 'ups', label: 'UPS' },
                                { value: 'fedex', label: 'FedEx' },
                                { value: 'dhl', label: 'DHL' },
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field
                            name="shippingFee"
                            component={TextFieldWrapper}
                            label="Kargo Ücreti"
                            type="number"
                            disabled={isRead}
                            required
                            parse={(value: any) => Number(value)}
                        />
                    </Grid>
                </>
            )}

            {
                returnOption === 'returnable' && (
                    <Grid item xs={12} md={6}>
                        <Field
                            name="returnPeriod"
                            component={TextFieldWrapper}
                            label="İade Süresi (Gün)"
                            type="number"
                            disabled={isRead}
                            required
                        />
                    </Grid>
                )
            }
            <Grid item xs={12}>
                <Field
                    name="deliveryAddress"
                    component={TextFieldWrapper}
                    label="Gönderim Adresi"
                    required
                    disabled={isRead}
                    multiline
                    rows={5}
                />
            </Grid>
            {
                isRead ?? (<ButtonGroup handleBack={handleBack} activeStep={activeStep} finished={finished} />)
            }
        </Grid>
    </form >
);

const ReduxFormWrapped = reduxForm<DeliveryFormData, OwnProps>({
    form: 'fourthForm',
    destroyOnUnmount: false,
})(FourthStepForm);

const mapStateToProps = (state: any) => {
    const deliveryMethod = formValueSelector('fourthForm')(state, 'deliveryMethod');
    const returnOption = formValueSelector('fourthForm')(state, 'returnOption');
    return { deliveryMethod, returnOption };
};

const ConnectedDeliveryForm = connect(mapStateToProps)(ReduxFormWrapped);

export default ConnectedDeliveryForm;