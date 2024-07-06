import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useIntl } from "react-intl";
import { commonMessages } from "../../../../common/commonMessages";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import TextInput from "../../../../components/inputs/TextInput";
import InputErrorMessage from "../../../../components/inputs/InputErrorMessage";

interface NoteTitleProps {
  title: string;
  onTitleSave: (content: string) => void;
}

export default function NoteTitle({ title, onTitleSave }: NoteTitleProps) {
  const { formatMessage: f } = useIntl();

  const formSchema = z.object({
    title: z
      .string()
      .min(1, f(commonMessages.error.requiredField))
      .max(50, f(commonMessages.error.maxLength, { number: 50 })),
  });
  type FormSchema = z.infer<typeof formSchema>;

  const { handleSubmit, formState, register, resetField } = useForm<FormSchema>(
    {
      mode: "onChange",
      defaultValues: { title },
      resolver: zodResolver(formSchema),
    }
  );

  const handleSave = (formData: FormSchema) => onTitleSave(formData.title);

  const { isDirty, isValid, errors } = formState;

  return (
    <>
      <TextInput
        onSave={handleSubmit(handleSave)}
        onClear={() => resetField("title")}
        isDirty={isDirty}
        isValid={isValid}
        textFieldProps={register("title")}
      />
      <ErrorMessage
        errors={errors}
        name="title"
        render={(e) => <InputErrorMessage message={e.message} />}
      />
    </>
  );
}
