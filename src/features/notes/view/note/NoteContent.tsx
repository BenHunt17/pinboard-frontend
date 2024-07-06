import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";
import { commonMessages } from "../../../../common/commonMessages";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
import TextInput from "../../../../components/inputs/TextInput";
import InputErrorMessage from "../../../../components/inputs/InputErrorMessage";
import TextArea from "../../../../components/inputs/TextArea";

interface NoteContentProps {
  content: string;
  onContentSave: (content: string) => void;
}

export default function NoteContent({
  content,
  onContentSave,
}: NoteContentProps) {
  const { formatMessage: f } = useIntl();

  const formSchema = z.object({
    content: z
      .string()
      .max(999, f(commonMessages.error.maxLength, { number: 999 })),
  });
  type FormSchema = z.infer<typeof formSchema>;

  const { handleSubmit, formState, register, resetField } = useForm<FormSchema>(
    {
      mode: "onChange",
      defaultValues: { content },
      resolver: zodResolver(formSchema),
    }
  );

  const handleSave = (formData: FormSchema) => onContentSave(formData.content);

  const { isDirty, isValid, errors } = formState;

  return (
    <>
      <TextArea
        onSave={handleSubmit(handleSave)}
        onClear={() => resetField("content")}
        isDirty={isDirty}
        isValid={isValid}
        textFieldProps={register("content")}
        maxRows={30}
      />
      <ErrorMessage
        errors={errors}
        name="content"
        render={(e) => <InputErrorMessage message={e.message} />}
      />
    </>
  );
}
