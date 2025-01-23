// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// // import { Form } from "@/components/ui/form"
// import { SelectItem } from "@/components/ui/select"
// // import { FormControl } from "@/components/ui/form"
// import FileUploader from "./FileUploader"
// import CustomFormField from "@/components/ui/customField"
// import { PatientFormValidation } from "@/lib/validation";
// import React, { useState } from 'react'


// export enum FormFieldType {
//     INPUT = "input",
//     TEXTAREA = "textarea",
//     PHONE_INPUT = "phoneInput",
//     CHECKBOX = "checkbox",
//     DATE_PICKER = "datePicker",
//     SELECT = "select",
//     SKELETON = "skeleton"
// }

// const DraftForm = () => {
//     const [isLoading, setIsLoading] = useState(false);

//     const user = {
//         name: "John Doe",
//         email: "",
//         phone: "",
//     }

//     const form = useForm<z.infer<typeof PatientFormValidation>>({
//         resolver: zodResolver(PatientFormValidation),
//         defaultValues: {
//             // ...PatientFormDefaultValues,
//             name: user.name,
//             email: user.email,
//             phone: user.phone,
//         },
//     });

//     return (
//         <div className="space-y-6">
//             <div className="mb-9 space-y-1">
//                 <h3 className='text-lg sm:text-xl md:text-2xl font-normal mb-8'>
//                     Upload, Edit, and Download Documents Effortlessly
//                 </h3>
//             </div>

//             <CustomFormField
//                 fieldType={FormFieldType.SELECT}
//                 control={form.control}
//                 name="identificationType"
//                 label="Identification Type"
//                 placeholder="Select identification type"
//             >
//                 {/* {IdentificationTypes.map((type, i) => (
//                     <SelectItem key={type + i} value={type}>
//                         {type}
//                     </SelectItem>
//                 ))} */}
//             </CustomFormField>

//             <CustomFormField
//                 fieldType={FormFieldType.INPUT}
//                 control={form.control}
//                 name="identificationNumber"
//                 label="Identification Number"
//                 placeholder="123456789"
//             />

//             <CustomFormField
//                 fieldType={FormFieldType.SKELETON}
//                 control={form.control}
//                 name="identificationDocument"
//                 label="Scanned Copy of Identification Document"
//                 renderSkeleton={(field) => (
//                     // <FormControl>
//                     <FileUploader files={field.value} onChange={field.onChange} />
//                 )}
//             />
//         </div>
//     )
// }

// export default DraftForm
