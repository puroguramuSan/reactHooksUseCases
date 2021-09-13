import { render } from '@testing-library/react';
import { HookApp } from '../HookApp';

describe("Pruebas en el componente HookApp.js", () => {

    test("Probando que el componentes se renderize correctamente", () => {

        const component = render(<HookApp/>);

        const div = component.container.querySelector('div');

        expect( div ).toBeInTheDocument();
    });
});