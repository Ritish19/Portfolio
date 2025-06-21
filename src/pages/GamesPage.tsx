import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Play, Trophy, Clock, Users } from 'lucide-react';

const games = [
  {
    id: 1,
    title: 'Code Typing Challenge',
    description: 'Test your coding speed and accuracy with different programming languages and difficulty levels.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    category: 'Skill',
    difficulty: 'Easy to Hard',
    players: 'Single Player',
    playTime: '5-15 min',
    features: ['Multiple Languages', 'Real-time Stats', 'Leaderboard', 'Progress Tracking'],
    status: 'Available',
  },
  {
    id: 2,
    title: 'Algorithm Visualizer Race',
    description: 'Race against time to solve sorting algorithms while watching them animate in real-time.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    category: 'Educational',
    difficulty: 'Medium',
    players: 'Single Player',
    playTime: '10-20 min',
    features: ['Visual Learning', 'Step-by-step Mode', 'Multiple Algorithms', 'Speed Control'],
    status: 'Available',
  },
  {
    id: 3,
    title: 'CSS Art Creator',
    description: 'Create beautiful CSS art and share your creations with the community.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop',
    category: 'Creative',
    difficulty: 'Easy',
    players: 'Single Player',
    playTime: '15-60 min',
    features: ['Live Preview', 'Export Code', 'Community Gallery', 'Tutorials'],
    status: 'Coming Soon',
  },
  {
    id: 4,
    title: 'Memory Pattern Game',
    description: 'Enhance your pattern recognition skills with increasingly complex sequences.',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop',
    category: 'Puzzle',
    difficulty: 'Easy to Hard',
    players: 'Single Player',
    playTime: '5-10 min',
    features: ['Progressive Difficulty', 'High Scores', 'Pattern Types', 'Brain Training'],
    status: 'Available',
  },
  {
    id: 5,
    title: '3D Maze Explorer',
    description: 'Navigate through procedurally generated 3D mazes with stunning visual effects.',
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=600&fit=crop',
    category: 'Adventure',
    difficulty: 'Medium',
    players: 'Single Player',
    playTime: '10-30 min',
    features: ['3D Graphics', 'Procedural Generation', 'Multiple Themes', 'Time Challenges'],
    status: 'In Development',
  },
  {
    id: 6,
    title: 'Physics Playground',
    description: 'Experiment with physics simulations and create your own interactive experiments.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    category: 'Simulation',
    difficulty: 'Medium',
    players: 'Single Player',
    playTime: '20-60 min',
    features: ['Real Physics', 'Object Creator', 'Save Experiments', 'Share Creations'],
    status: 'Coming Soon',
  },
];

const categories = ['All', 'Skill', 'Educational', 'Creative', 'Puzzle', 'Adventure', 'Simulation'];

const GamesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [filteredGames, setFilteredGames] = React.useState(games);

  React.useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter(game => game.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-700';
      case 'Coming Soon':
        return 'bg-yellow-100 text-yellow-700';
      case 'In Development':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
            <Gamepad2 className="w-8 h-8 text-primary-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interactive Games
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fun and educational mini-games that combine entertainment with learning. 
            Challenge yourself and improve your skills while having fun!
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-3">
              <Gamepad2 className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{games.length}</div>
            <div className="text-sm text-gray-600">Total Games</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-3">
              <Play className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{games.filter(g => g.status === 'Available').length}</div>
            <div className="text-sm text-gray-600">Available Now</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-3">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">1.2k+</div>
            <div className="text-sm text-gray-600">Players</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-3">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">15k+</div>
            <div className="text-sm text-gray-600">Hours Played</div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Games Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="card hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(game.status)}`}>
                    {game.status}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
                      {game.category}
                    </span>
                    <span className="text-xs text-gray-500">{game.difficulty}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm">{game.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{game.playTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-900">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {game.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    game.status === 'Available'
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={game.status !== 'Available'}
                >
                  {game.status === 'Available' ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Play size={18} />
                      <span>Play Now</span>
                    </div>
                  ) : (
                    <span>{game.status}</span>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want More Games?</h2>
            <p className="text-gray-600 mb-6">
              I'm constantly working on new games and interactive experiences. 
              Follow my progress or suggest new game ideas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Suggest a Game
              </button>
              <button className="btn-secondary">
                Follow Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GamesPage;
