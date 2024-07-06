import { Grid } from "@mui/material";
import Note from "./note/Note";

const notes = [
  {
    id: "1",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat erat. Suspendisse ipsum dui, fringilla eu dictum et, condimentum eget est. In sed est at sem feugiat cursus in non ipsum. Ut tristique varius felis, eu dignissim neque. Aenean in libero in est hendrerit pharetra. Mauris aliquet quis turpis ac volutpat. Etiam porta tortor eget eleifend lacinia. Quisque in justo ut ex placerat maximus. Sed efficitur, augue eget varius pretium, nibh ligula euismod est, lobortis accumsan eros nunc quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam placerat justo eget elit viverra fringilla sed at ex. Cras non leo viverra, faucibus eros nec, fringilla risus. Ut porta, eros vitae faucibus malesuada, metus arcu condimentum velit, hendrerit pretium nunc felis a nisl. Nunc sit amet nibh nisi.",
  },
  {
    id: "2",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat erat. Suspendisse ipsum dui, fringilla eu dictum et, condimentum eget est. In sed est at sem feugiat cursus in non ipsum. Ut tristique varius felis, eu dignissim neque. Aenean in libero in est hendrerit pharetra. Mauris aliquet quis turpis ac volutpat. Etiam porta tortor eget eleifend lacinia. Quisque in justo ut ex placerat maximus. Sed efficitur, augue eget varius pretium, nibh ligula euismod est, lobortis accumsan eros nunc quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam placerat justo eget elit viverra fringilla sed at ex. Cras non leo viverra, faucibus eros nec, fringilla risus. Ut porta, eros vitae faucibus malesuada, metus arcu condimentum velit, hendrerit pretium nunc felis a nisl. Nunc sit amet nibh nisi.",
  },
  {
    id: "3",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetu cursus in non ipsum. Ut tristique varius felis, eu dignissim neque. Aenean in libero in est hendrerit pharetra. Mauris aliquet quis turpis ac volutpat. Etiam porta tortor eget eleifend lacinia. Quisque in justo ut ex placerat maximus. Sed efficitur, augue eget varius pretium, nibh ligula euismod est, lobortis accumsan eros nunc quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam placerat justo eget elit viverra fringilla sed at ex. Cras non leo viverra, faucibus eros nec, fringilla risus. Ut porta, eros vitae faucibus malesuada, metus arcu condimentum velit, hendrerit pretium nunc felis a nisl. Nunc sit amet nibh nisi.",
  },
  {
    id: "4",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat erat. Suspendisse ipsum dui, fringilla eu dictum et, condimentum eget est. In sed est at sem feugiat cursus in non ipsum. Ut tristique varius felis, eu dignissim neque. Aenean in libero in est hendrerit pharetra. Mauris aliquet quis turpis ac volutpat. Etiam porta tortor eget eleifend lacinia. Quisque in justo ut ex placerat maximus. Sed efficitur, augue eget varius pretium, nibh ligula euismod est, lobortis accumsan eros nunc quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam placerat justo eget elit viverra fringilla sed at ex. Cras non leo viverra, faucibus eros nec, fringilla risus. Ut porta, eros vitae faucibus malesuada, metus arcu condimentum velit, hendrerit pretium nunc felis a nisl. Nunc sit amet nibh nisi.",
  },
  {
    id: "5",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis erat erat. Suspendisse ipsum dui, fringilla eu dictum et, condimentum eget est. In sed est at sem feugiat cursus in non ipsum. Ut tristique varius felis, eu dignissim neque. Aenean in libero in est hendrerit pharetra. Mauris aliquet quis turpis ac volutpat. Etiam porta tortor eget eleifend lacinia. Quisque in justo ut ex placerat maximus. Sed efficitur, augue eget varius pretium, nibh ligula euismod est, lobortis accumsan eros nunc quis mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam placerat justo eget elit viverra fringilla sed at ex. Cras non leo viverra, faucibus eros nec, fringilla risus. Ut porta, eros vitae faucibus malesuada, metus arcu condimentum velit, hendrerit pretium nunc felis a nisl. Nunc sit amet nibh nisi.",
  },
];

export default function NotesView() {
  return (
    <Grid container spacing={4}>
      {notes.map((x) => (
        <Grid key={x.id} item xs={3}>
          <Note
            title={x.title}
            content={x.content}
            onTitleSave={() => {}}
            onContentSave={() => {}}
          />
        </Grid>
      ))}
    </Grid>
  );
}
