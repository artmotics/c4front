import React from 'react'
import  Buttonloading from 'components/ButtonLoading'
import {render,screen } from '@testing-library/react'

it("Render OK", ()=> {
    render(<Buttonloading text='ok' loading={false} disable={false} />);
    expect(screen.getByTestId('button-loading')).toBeInTheDocument();
})