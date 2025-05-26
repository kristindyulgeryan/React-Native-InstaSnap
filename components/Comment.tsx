import { styles } from "@/styles/feed.styles";
import { formatDistanceToNow } from "date-fns";
import { Image, Text, View } from "react-native";

interface Comment {
  content: string;
  _creationTime: number;
  user: {
    fullname: string;
    image: string;
  };
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function Comment({ comment }: { comment: Comment }) {
  console.log("Comment content:", comment.content);
  return (
    <View style={styles.commentContainer}>
      <Image
        source={{ uri: comment.user.image }}
        style={styles.commentAvatar}
      />
      <View style={styles.captionContainer}>
        <Text style={styles.captionUsername}>{comment.user.fullname}</Text>
        <Text style={styles.commentsText}>{comment.content}</Text>
        <Text style={styles.commentTime}>
          {formatDistanceToNow(comment._creationTime, { addSuffix: true })}
        </Text>
      </View>
    </View>
  );
}
