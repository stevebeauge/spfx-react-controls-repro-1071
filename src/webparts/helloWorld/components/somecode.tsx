import * as React from 'react';
import { ModernTaxonomyPicker } from '@pnp/spfx-controls-react';
import { ITermInfo } from '@pnp/sp/taxonomy';

import "@pnp/sp/taxonomy";

// get term store data

export default async () => {

    const initialTerm: ITermInfo = null;

    return (
        <ModernTaxonomyPicker
            initialValues={[initialTerm]}
            context={null}
            termSetId={null}
            label="Some field"
            panelTitle="Some title" />
    );
}