import React, { useEffect, useState } from "react";
import { TextInput, Stack, Text } from "@sanity/ui";
import { FormField } from "@sanity/base/components";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { useId } from "@reach/auto-id"; // hook to generate unique IDs
import sanityClient from "part:@sanity/base/client";

export const AltInput = React.forwardRef((props, ref) => {
  const {
    type, // Schema information
    value, // Current field value
    readOnly, // Boolean if field is not editable
    placeholder, // Placeholder text from the schema
    markers, // Markers including validation rules
    presence, // Presence information for collaborative avatars
    compareValue, // Value to check for "edited" functionality
    onFocus, // Method to handle focus state
    onBlur, // Method to handle blur state
    onChange, // Method to handle patch events
    parentValue,
  } = props;

  // Creates a unique ID for our input
  const inputId = useId();
  const parentAsset = parentValue?.asset;
  useEffect(() => {
    if (!value && parentAsset) {
      sanityClient
        .getDocument(parentAsset["_ref"])
        .then((data) => {
          const name = data.originalFilename.split(".")[0];
          onChange(PatchEvent.from(name ? set(name) : unset()));
        })
        .catch(console.error);
    }
  }, [parentAsset]);

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (event) => {
      const inputValue = event.currentTarget.value; // get current value
      // if the value exists, set the data, if not, unset the data
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <Stack space={1}>
      <FormField
        description={type.description} // Creates description from schema
        title={type.title} // Creates label from schema title
        __unstable_markers={markers} // Handles all markers including validation
        __unstable_presence={presence} // Handles presence avatars
        compareValue={compareValue} // Handles "edited" status
        inputId={inputId} // Allows the label to connect to the input field
      >
        <TextInput
          id={inputId} // A unique ID for this input
          onChange={handleChange} // A function to call when the input value changes
          value={value} // Current field value
          readOnly={readOnly} // If "readOnly" is defined make this field read only
          onFocus={onFocus} // Handles focus events
          onBlur={onBlur} // Handles blur events
          ref={ref}
        />
      </FormField>
    </Stack>
  );
});

// Create the default export to import into our schema
export default AltInput;
