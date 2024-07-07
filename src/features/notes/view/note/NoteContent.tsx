import { Controller, useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { z } from "zod";
import { commonMessages } from "../../../../common/commonMessages";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "@hookform/error-message";
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

  const { handleSubmit, formState, control, resetField } = useForm<FormSchema>({
    mode: "onChange",
    defaultValues: { content },
    resolver: zodResolver(formSchema),
  });

  const handleSave = (formData: FormSchema) => onContentSave(formData.content);

  const { isDirty, isValid, errors } = formState;

  return (
    <>
      {/* MUI text area seems to be unstable when it comes to multiline and resizing. 
      React hook form controller seems to bypass this issue https://stackoverflow.com/questions/64837884/material-ui-too-many-re-renders-the-layout-is-unstable-textareaautosize-limit */}
      <Controller
        control={control}
        name="content"
        render={({ field }) => (
          <TextArea
            onSave={handleSubmit(handleSave)}
            onClear={() => resetField("content")}
            isDirty={isDirty}
            isValid={isValid}
            textFieldProps={{ ...field }}
            maxRows={30}
          />
        )}
      />
      <ErrorMessage
        errors={errors}
        name="content"
        render={(e) => <InputErrorMessage message={e.message} />}
      />
    </>
  );
}
