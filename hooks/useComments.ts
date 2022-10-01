import {CommentType} from "../utils/api/types";
import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {Api} from "../utils/api";

type UseCommentsPropsType = {
  setComments: Dispatch<SetStateAction<CommentType[]>>
  comments: CommentType[]
}

export const useComments = (postId?: number): UseCommentsPropsType => {
  const [comments, setComments] = useState<CommentType[]>([])
  useEffect(() => {
    (async () => {
      try {
        const arr = await Api().comment.getAll(postId)
        setComments(arr)
      } catch (error) {
        console.warn("Fetch comments", error)
      }
    })()
  }, [])

  return {comments, setComments}
}