
export interface Movie {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    type: 'movie' | 'tv';
    genre: string[];
}

export const MOVIES_DATA: Movie[] = [
    {
        id: 157336,
        title: "Interstellar",
        overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        backdrop_path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=500",
        release_date: "2014-11-05",
        vote_average: 8.4,
        type: 'movie',
        genre: ["Adventure", "Science Fiction"]
    },
    {
        id: 299534,
        title: "Avengers: Endgame",
        overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to restore order to the universe.",
        backdrop_path: "https://images.unsplash.com/photo-1635805737707-57588b30759e?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=500",
        release_date: "2019-04-24",
        vote_average: 8.3,
        type: 'movie',
        genre: ["Action", "Science Fiction"]
    },
    {
        id: 27205,
        title: "Inception",
        overview: "Cobb, a skilled thief who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        backdrop_path: "https://images.unsplash.com/photo-1500673326135-9614b8f59a93?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=500",
        release_date: "2010-07-15",
        vote_average: 8.4,
        type: 'movie',
        genre: ["Mind-Bending", "Science Fiction"]
    },
    {
        id: 671,
        title: "The Magic Castle",
        overview: "A young boy learns he's a powerful wizard—with a place waiting for him at the School of Witchcraft and Wizardry.",
        backdrop_path: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&q=80&w=500",
        release_date: "2001-11-16",
        vote_average: 7.9,
        type: 'movie',
        genre: ["Adventure", "Fantasy"]
    },
    {
        id: 1399,
        title: "Game of Iron",
        overview: "Seven noble families fight for control of the mythical land. Friction between the houses leads to full-scale war.",
        backdrop_path: "https://images.unsplash.com/photo-1519074063912-ad25b57b9d17?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1514539079130-25950c84af65?auto=format&fit=crop&q=80&w=500",
        release_date: "2011-04-17",
        vote_average: 8.4,
        type: 'tv',
        genre: ["Sci-Fi & Fantasy", "Drama"]
    },
    {
        id: 66732,
        title: "Neon Things",
        overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.",
        backdrop_path: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1605142127118-2831f4961730?auto=format&fit=crop&q=80&w=500",
        release_date: "2016-07-15",
        vote_average: 8.6,
        type: 'tv',
        genre: ["Mystery", "Thriller"]
    },
    {
        id: 71446,
        title: "The Heist",
        overview: "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers.",
        backdrop_path: "https://images.unsplash.com/photo-1512446816042-442dbf40702d?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&q=80&w=500",
        release_date: "2017-05-02",
        vote_average: 8.3,
        type: 'tv',
        genre: ["Crime", "Action"]
    },
    {
        id: 42009,
        title: "Digital Glitch",
        overview: "Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it.",
        backdrop_path: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=500",
        release_date: "2011-12-04",
        vote_average: 8.3,
        type: 'tv',
        genre: ["Sci-Fi", "Distopian"]
    },
    {
        id: 603,
        title: "Simulation X",
        overview: "A computer hacker joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        backdrop_path: "https://images.unsplash.com/photo-1531297484001-80022131f1a1?auto=format&fit=crop&q=80&w=2072",
        poster_path: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=500",
        release_date: "1999-03-31",
        vote_average: 8.2,
        type: 'movie',
        genre: ["Action", "Cyberpunk"]
    }
];

export const CATEGORIES = [
    { id: 'trending', title: 'Trending Now' },
    { id: 'top_rated', title: 'Top Rated' },
    { id: 'action', title: 'Action Movies' },
    { id: 'comedy', title: 'Mystery Hits' },
    { id: 'horror', title: 'Sci-Fi Nights' }
];

export const getMoviesByCategory = (categoryId: string) => {
    if (categoryId === 'trending') return MOVIES_DATA.slice(0, 6);
    if (categoryId === 'top_rated') return [...MOVIES_DATA].sort((a, b) => b.vote_average - a.vote_average);
    if (categoryId === 'action') return MOVIES_DATA.slice(3, 9);
    return MOVIES_DATA.slice(0, 5);
};
