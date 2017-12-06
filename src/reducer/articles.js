import {ADD_COMMENT, DELETE_ARTICLE} from '../constants'
import {normalizedArticles as defaultArticles} from '../fixtures'

const articlesMap = defaultArticles.reduce((acc, article) => ({
    ...acc,
    [article.id]: article
}), {})

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action
    const newArticleState = {...articlesState};

    switch (type) {
        case DELETE_ARTICLE:
            delete newArticleState[payload.id]
            return newArticleState
        case ADD_COMMENT:
            const {articleId, commentId} = payload
            newArticleState[articleId] = {
                ...newArticleState[articleId],
                comments: [...newArticleState[articleId].comments, commentId]
            }
            return newArticleState
    }

    return articlesState
}