// Type definitions for addressit 1.5
// Project: https://github.com/DamonOehlman/addressit#readme
// Definitions by: Louis Orleans <https://github.com/dudeofawesome>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Addressit {
    interface Address {
        /** Original input */
        text: string;
        parts: any[];
        /** Street number */
        number: number | string;
        /** Street name */
        street: string;
        /** Apartment number */
        unit: number | string;
        /** City, county */
        regions: string[];
        /** State */
        state: string;
        /** Country */
        country: string;
        /** Postal code */
        postalcode: number | string;

        _extractStreetParts (startIndex: number, streetPartsLength?: number): void;
        /**
         * The clean function is used to clean up an address string. It is designed to remove any parts of the text that prevent effective
         * parsing of the address string.
         */
        clean (cleaners?: (Function | RegExp)[]): this;
        /**
         * The extract function is used to extract the specified field from the raw parts that have previously been split from the input text.
         * If successfully located then the field will be updated from the parts and that part removed from the parts list.
         */
        extract (fieldName: string, regexes: RegExp | RegExp[]): this;
        /**
         * This function is used to parse the address parts and locate any parts that look to be related to a street address.
         * @param {RegExp} [regexes=[]]
         */
        extractStreet (regexes?: RegExp[], reSplitStreet?: RegExp, reNoStreet?: RegExp): this;
        /**
         * The finalize function takes any remaining parts that have not been extracted as other information, and pushes those fields into a
         * generic `regions` field.
         */
        finalize (): this;
        /** Split the address into it's component parts, and remove any empty parts */
        split (separator?: string): this;
        /** Convert the address to a string representation */
        toString (): string;
    }

    interface AddressitOptions {
        /**
         * Overrides the default parser
         * @default 'en-US'
         */
        locale?: 'en-US' | 'en-AU';
    }
}

declare function Addressit(input: string, opts?: Addressit.AddressitOptions): Addressit.Address;

export = Addressit;
