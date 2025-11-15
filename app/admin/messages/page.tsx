'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { messages } from '@/lib/data/portfolio';
import { Mail, MailOpen, Trash2, Reply, Archive } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MessagesPage() {
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  const filteredMessages = messages.filter(m => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !m.read;
    if (filter === 'read') return m.read;
    return true;
  });

  const selectedMsg = messages.find(m => m.id === selectedMessage);

  return (
    <div className="space-y-8 pt-16 lg:pt-0">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Messages</h1>
        <p className="text-white/60">Manage contact form submissions and inquiries</p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'all'
              ? 'bg-gradient-premium text-white shadow-lg'
              : 'glass text-white/70 hover:text-white'
          }`}
        >
          All ({messages.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'unread'
              ? 'bg-gradient-premium text-white shadow-lg'
              : 'glass text-white/70 hover:text-white'
          }`}
        >
          Unread ({messages.filter(m => !m.read).length})
        </button>
        <button
          onClick={() => setFilter('read')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            filter === 'read'
              ? 'bg-gradient-premium text-white shadow-lg'
              : 'glass text-white/70 hover:text-white'
          }`}
        >
          Read ({messages.filter(m => m.read).length})
        </button>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Messages List */}
        <div className="space-y-3">
          {filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`cursor-pointer transition-all ${
                  selectedMessage === message.id
                    ? 'ring-2 ring-primary-500'
                    : ''
                }`}
                onClick={() => setSelectedMessage(message.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.read ? 'bg-white/5' : 'bg-gradient-premium'
                  }`}>
                    {message.read ? <MailOpen size={20} /> : <Mail size={20} />}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`font-bold truncate ${!message.read ? 'gradient-text' : ''}`}>
                        {message.name}
                      </h3>
                      {!message.read && (
                        <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <p className="text-sm text-white/60 truncate mb-2">{message.subject}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-white/40">{message.email}</p>
                      <p className="text-xs text-white/40">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {filteredMessages.length === 0 && (
            <Card className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white/40" />
              </div>
              <h3 className="text-xl font-bold mb-2">No messages found</h3>
              <p className="text-white/60">Messages will appear here when someone contacts you</p>
            </Card>
          )}
        </div>

        {/* Message Detail */}
        <div className="lg:sticky lg:top-8 h-fit">
          {selectedMsg ? (
            <Card>
              <div className="space-y-6">
                {/* Header */}
                <div className="pb-6 border-b border-white/10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{selectedMsg.name}</h2>
                      <p className="text-white/60">{selectedMsg.email}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      selectedMsg.read
                        ? 'bg-white/10 text-white/70'
                        : 'bg-gradient-premium text-white'
                    }`}>
                      {selectedMsg.read ? 'Read' : 'Unread'}
                    </span>
                  </div>
                  <p className="text-sm text-white/40">
                    {new Date(selectedMsg.createdAt).toLocaleString()}
                  </p>
                </div>

                {/* Subject */}
                <div>
                  <h3 className="text-sm text-white/60 mb-2">Subject</h3>
                  <p className="font-semibold text-lg">{selectedMsg.subject}</p>
                </div>

                {/* Message */}
                <div>
                  <h3 className="text-sm text-white/60 mb-2">Message</h3>
                  <p className="text-white/80 leading-relaxed">{selectedMsg.message}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                  <Button variant="primary" className="flex-1">
                    <Reply size={18} className="mr-2" />
                    Reply
                  </Button>
                  <Button variant="outline">
                    <Archive size={18} />
                  </Button>
                  <Button variant="outline" className="hover:bg-red-500/20 hover:text-red-400">
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            <Card className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white/40" />
              </div>
              <h3 className="text-xl font-bold mb-2">Select a message</h3>
              <p className="text-white/60">Choose a message from the list to view details</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
