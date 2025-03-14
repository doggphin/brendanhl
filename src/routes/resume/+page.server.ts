import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `query {
                matchedUser(username: "brla5166") {
                    submitStats {
                        acSubmissionNum {
                            difficulty
                            count
                        }
                    }
                }
                allQuestionsCount {
                    difficulty
                    count
                }
            }`
        })
    });

    if (!res.ok) {
        throw new Error("Failed to fetch LeetCode data");
    }

    let data = await res.json();

    return {
        completedStats: data.data.matchedUser.submitStats.acSubmissionNum,
        totalStats: data.data.allQuestionsCount,
    };
};